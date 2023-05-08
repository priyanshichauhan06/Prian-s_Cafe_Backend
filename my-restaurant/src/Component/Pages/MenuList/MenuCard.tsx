import React from "react";
import { Button, Card } from "react-bootstrap";

function MenuCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.menuImage} />
            <Card.Body>
                <Card.Title>{props.menuName}</Card.Title>
                <Card.Text>{props.menuDescription}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard