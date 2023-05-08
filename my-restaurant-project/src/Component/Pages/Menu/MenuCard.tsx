import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MenuCard(props: any) {
    const navigate= useNavigate();

    const handleButtononClick = (menuId: number) => {
        navigate(`/categorymenu/${menuId}`);
    }

    return (
        <Card style={{ width: '18rem'}} className="text-center mb-2">
            <Card.Img variant="top" src={props.menuImage} style={{width: '100%', height:'250px'}} />
            <Card.Body>
                <Card.Title>{props.menuName}</Card.Title>
                <Card.Text>{props.menuDescription}</Card.Text>
                <Button variant="primary" onClick={()=>handleButtononClick(props.menuId) }>View {props.menuName}</Button>
            </Card.Body>
        </Card> 
    )
}

export default MenuCard;