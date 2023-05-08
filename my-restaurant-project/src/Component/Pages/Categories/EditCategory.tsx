import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditCategory() {
  // navigate back on view all categories page
  const navigate= useNavigate();

  const navigateBack = () => {
    navigate('/category');
  }

  //hook that returns an object of key/value pair from current url
  const {Id}= useParams();
  const categoryId=Number(Id);
  console.log(Id);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  useEffect(() => {
    const fetchcategory = async () => {
      try {
        const response = await axios.get(`https://localhost:7211/api/CategoryTables/catId=${categoryId}`);
        const categoryData = response.data;
        setCategoryName(categoryData.categoryName);
        setCategoryDescription(categoryData.categoryDescription);
        setCategoryImage(categoryData.categoryImage);
      } catch (error) {
        console.log('Error fetching category data:', error);
      }
    };

    fetchcategory();
  }, [categoryId]);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedCategory = {
      categoryId:categoryId,
      categoryName: categoryName,
      categoryDescription: categoryDescription,
      categoryImage: categoryImage,
      isDeleted: false
    };

    try {
      await axios.put(`https://localhost:7211/api/CategoryTables/${categoryId}`, updatedCategory);
      console.log('category updated successfully!');
      navigateBack();
    } catch (error) {
      console.log('Error updating category:', error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
      <div className="Auth-form-content">
            <h3 className="Auth-form-title">Edit Category</h3>

            <div className="form-group mt-3">
        <label htmlFor="categoryName">Category Name</label>
        <input type="text" className="form-control mt-1" id="categoryName" value={categoryName} required onChange={(event) => setCategoryName(event.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="categoryDescription">Category Description</label>
        <textarea id="categoryDescription" className="form-control mt-1" value={categoryDescription} required onChange={(event) => setCategoryDescription(event.target.value)}/>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="categoryImage">Category Image</label>
        <input type="text" className="form-control mt-1" id="categoryImage" value={categoryImage} required onChange={(event) => setCategoryImage(event.target.value)}/>
      </div>
      <div className="d-grid gap-2 mt-3">
            <button className='btn btn-primary' type="submit">Update Category</button>
        </div>
      </div>
    </form>
    </div>
    

  );
}

export default EditCategory;






