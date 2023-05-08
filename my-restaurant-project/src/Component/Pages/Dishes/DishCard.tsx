import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaCircle, FaCarrot } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function DishCard(props: any) {
    const navigate= useNavigate();

    const handleButtonEdit = (dishId: number) => {
        navigate(`/editdish/${dishId}`);
    }

    const deleteDish = async (dishId:number) => {
        try {
          //make delete request to delete the dish
          const response = await axios.delete(`https://localhost:7211/api/DishTable/${dishId}`);
          console.log(response.status);
          //Reload the page to reflect the changes
          window.location.reload();

        } catch (error) {
          console.error(error);
        }
      };

      const renderNatureIcon = (nature: string) => {
        console.log(nature);
        switch (nature) {
            case 'veg':
                return <FaLeaf color="green" />;
            case 'non-veg':
                return <FaCircle color="red" />;
            case 'vegan':
                return <FaCarrot color="orange" />;
            default:
                return null;
        }
    }

    return (
        <Card style={{ width: '18rem' }} className="text-center mb-2">
            <Card.Img variant="top" src={props.dishImage}  style={{width: '100%', height:'250px'}}/>
            <Card.Body>
                <Card.Title>{props.dishName} 
                <div>{renderNatureIcon(props.nature)}</div>
                </Card.Title>
                <Card.Header className="fw-bold">Price: {props.dishPrice}/-</Card.Header>
                <Card.Text>{props.dishDescription}</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button  variant="primary" onClick={()=>handleButtonEdit(props.dishId)} >Edit</Button>
                    <Button variant="danger" onClick={()=>deleteDish(props.dishId) }>Delete</Button>
                </div>
                
            </Card.Body>
        </Card> 
    )
}

export default DishCard;