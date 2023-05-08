import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { CategoryApi } from "./CategoryApi";
// import { fa-search} from "react-bootstrap-icons"

function ViewCategories(props: any) {
  const navigate = useNavigate();
  const [category, setCategory] = useState({
    categoryId : "",
    categoryName : "",
    categoryImage : "",
    categoryDescription : ""
  });

  const [categories, setCategories] = useState([]);
  const [searchCategoryId, setSearchCategoryId] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButton = () => {
    navigate('/createcategory');
  };

  async function getData() {
    const data = await CategoryApi.getAll();
    setCategories(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async () => {
    if(searchCategoryId == "")
    return;

try {
    const category = await CategoryApi.getById(parseInt(searchCategoryId));
    console.log(category)
    if (category) {
      setCategory(category);
    } 
    console.log(searchCategoryId)
  } catch (error) {
    console.error(error);
    
  }
  setIsButtonClicked(true);
};

  return (
    <React.Fragment>
      <h1 className="text-center">Categories</h1>
      <br />
      <div className="d-flex ">
        <button className="btn btn-primary mb-3 mx-4" onClick={handleButton}>
          Add New Categories
        </button>
      </div>
      <div className="d-flex justify-content-end" >
        <div className="input-group mb-3 mx-4">
            <div className="form-outline ">
                <input type="search" id="form1" placeholder="Search Category"  className="form-control" value={searchCategoryId} onChange={(e) => setSearchCategoryId(e.target.value)}/>
            </div>
            {/* <label className="form-label" htmlFor="form1">Search</label> */}

            <button type="button" className="btn btn-primary " onClick={handleSearch}>
                <i className="fas fa-search"></i>
            </button>
        </div>
      </div>
      <Container>
        <Row>
            {
                isButtonClicked ? !('error' in category) ? 
                <Col sm>
                <CategoryCard
                  categoryId={category.categoryId}
                  categoryName={category.categoryName}
                  categoryImage={category.categoryImage}
                  categoryDescription={category.categoryDescription}
                />
              </Col>
          : (
           <p>No categories found.</p>
         ) : categories.length !== 0 ? (
            categories.map((cat: any) => (
              <Col sm key={cat.categoryId}>
                <CategoryCard
                  categoryId={cat.categoryId}
                  categoryName={cat.categoryName}
                  categoryImage={cat.categoryImage}
                  categoryDescription={cat.categoryDescription}
                />
              </Col>
            ))
          ) : (
            <p>No categories found</p>
          )
        }
          
          
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ViewCategories;