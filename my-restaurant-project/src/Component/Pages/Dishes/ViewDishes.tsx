import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DishApi } from "./DishApi";
import DishCard from "./DishCard";
import { useNavigate } from "react-router-dom";

function ViewDishes() {
    const navigate= useNavigate();

    const handleButton = () => {
        navigate('/createdish');
    }

    const [dishes, setDishes] = useState([]);
    async function getData() {
        const data = await DishApi.getAll();
        setDishes(data);
    }
    useEffect(() => {
            getData();
    }, []);
    
    return (
        <React.Fragment>                
            {/* <NavBarComp/> */}
            <h1 className="text-center">Dishes</h1>
            <br />
            <div className="d-flex">
            <button className="btn btn-primary mb-3 mx-4" onClick={()=>handleButton() } >Add New Dish</button>               
            </div>
            <Container>    
                <Row>    
                    {dishes.length !== 0 ? dishes.map((dish:any) => 
                        <Col sm>    
                            <DishCard dishId={dish.dishId} dishName={dish.dishName} dishImage={dish.dishImage} dishDescription={dish.dishDescription} dishPrice={dish.dishPrice} nature={dish.nature}/>    
                        </Col> 
                    )  : null
                    }    
                </Row>    
            </Container>
        </React.Fragment>
    )
}

export default ViewDishes;