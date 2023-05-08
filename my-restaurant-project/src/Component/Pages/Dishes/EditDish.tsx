import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditDish() {
  // navigate back on all dishes page
  const navigate= useNavigate();

  const navigateBack = () => {
    navigate('/dish');
  }

  const {Id}= useParams();
  const dishId=Number(Id);
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState(0);
  const [dishImage, setDishImage] = useState('');
  const [Nature, setNature] = useState('');

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await axios.get(`https://localhost:7211/api/DishTable/dishId=${dishId}`);
        const dishData = response.data;
        setDishName(dishData.dishName);
        setDishDescription(dishData.dishDescription);
        setDishPrice(dishData.dishPrice);
        setDishImage(dishData.dishImage);
        setNature(dishData.Nature);
      } catch (error) {
        console.log('Error fetching dish data:', error);
      }
    };

    fetchDish();
  }, [dishId]);

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedDish = {
      dishId:dishId,
      dishName: dishName,
      dishDescription: dishDescription,
      dishPrice: dishPrice,
      dishImage: dishImage,
      Nature:Nature,
      isDeleted: false
    };

    try {
      if(updatedDish.Nature==undefined){
        alert('Select Nature');
      } else{
        await axios.put(`https://localhost:7211/api/DishTable/${dishId}`, updatedDish);
        console.log('Dish updated successfully!');
        navigateBack();
      }
      
    } catch (error) {
      console.log('Error updating dish:', error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Edit Dish</h3>

            <div className="form-group mt-3">
          <label htmlFor="dishName">Dish Name</label>
          <input type="text" className="form-control mt-1" id="dishName" value={dishName} required onChange={(event) => setDishName(event.target.value)}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dishDescription">Dish Description</label>
          <textarea id="dishDescription" className="form-control mt-1" value={dishDescription} required onChange={(event) => setDishDescription(event.target.value)}/>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dishPrice">Dish Price</label>
          <input type="number" id="dishPrice" className="form-control mt-1" value={dishPrice} required onChange={(event) => setDishPrice(parseFloat(event.target.value))} />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="dishImage">Dish Image</label>
          <input type="text" id="dishImage" className="form-control mt-1" value={dishImage} required onChange={(event) => setDishImage(event.target.value)} />
        </div>
        <div className="form-group mt-3">
          <p>Nature</p>
          <label className='px-2'>
            <input type="radio" value="veg" required checked={Nature === 'veg'} onChange={() => setNature('veg')}/>
            Veg
          </label>
          <label className='px-2'> 
            <input type="radio" value="non-veg" checked={Nature === 'non-veg'} onChange={() => setNature('non-veg')}/>
            Non-Veg
          </label>
          <label className='px-2'>
            <input type="radio" value="vegan" checked={Nature === 'vegan'} onChange={() => setNature('vegan')}/>
            Vegan
          </label>
        </div>
        <div className="d-grid gap-2 mt-3">
            <button className='btn btn-primary' type="submit">Update Dish</button>
        </div>
        </div>
    </form>
    </div>
    
  

  );
}

export default EditDish;






