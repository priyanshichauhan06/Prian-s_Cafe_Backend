import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CategoryCard(props: any) {
    //get navigation fn from react router
    const navigate= useNavigate();

    //navigate user to the desired page
    const handleButtonView = (catId: number) => {
        navigate(`/dishcategory/${catId}`);
    }

    //navigate user to the desired page
    const handleButtonEdit = (catId: number) => {
        navigate(`/editcategory/${catId}`);
    }

    //DELETING the category
    const deleteCategory = async (categoryId:number) => {
        try {
            //make delete request to delete the category
            const response = await axios.delete(`https://localhost:7211/api/CategoryTables/${categoryId}`);
            console.log(response.status);
            
            //Reload the page to reflect the changes
            window.location.reload();

        } catch (error) {
          console.error(error);
        }
      };

    return (
        <Card style={{ width: '18rem' }} className="text-center mb-2">
            <Card.Img variant="top" src={props.categoryImage} style={{width: '100%', height:'250px'}} />
            <Card.Body>
                <Card.Title>{props.categoryName}</Card.Title>
                <Card.Text>{props.categoryDescription}</Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={()=>handleButtonView(props.categoryId) } >View</Button>
                    <Button variant="dark" onClick={()=>handleButtonEdit(props.categoryId) } >Edit</Button>
                    <Button variant="danger" onClick={()=>deleteCategory(props.categoryId) } >Delete</Button>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default CategoryCard;