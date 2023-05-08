import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import { CategoryApi } from "./CategoryApi";
import { useParams } from "react-router-dom";

function ViewCategoryByMenuId() {
    //hook that returns an object of key/value pair from current url
    const {menuId}= useParams();
    const parsedMenuId=Number(menuId);
    const [categories, setcategories] = useState([]);
    async function getData() {
        const data = await CategoryApi.getByMenuId(parsedMenuId);
        setcategories(data);
    }
    useEffect(() => {
            getData();
    }, []);
    
    return (
        <React.Fragment>                
            {/* <NavBarComp/> */}
            <h1 className="text-center">Categories</h1>
            <br />
            <Container>                        
                <Row>    
                    {categories.length !== 0 ? categories.map((cat:any) =>
                        <Col sm>    
                            <CategoryCard categoryId={cat.categoryId} categoryName={cat.categoryName} categoryImage={cat.categoryImage} categoryDescription={cat.categoryDescription}/>    
                        </Col>               
                    )  : null
                    }    
                </Row>    
            </Container>
        </React.Fragment>        
    )
}

export default ViewCategoryByMenuId;