import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DishApi } from "./DishApi";
import DishCard from "./DishCard";

function ViewDishesByCatId() {
    const {categoryId}= useParams();
    const parsedCategoryId=Number(categoryId);
    const [dishes, setdishes] = useState([]);
    async function getData() {
        const data = await DishApi.getByCatId(parsedCategoryId);
        setdishes(data);
    }
    useEffect(() => {
            getData();
    }, []);
    
    return (
        <React.Fragment>                
            {/* <NavBarComp/> */}
            <h1 className="text-center">Dishes</h1>
            <br />
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

export default ViewDishesByCatId;