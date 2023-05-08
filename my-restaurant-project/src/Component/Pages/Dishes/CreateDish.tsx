import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Category {
    categoryId: number;
    categoryName: string;
    categoryDescription: string;
    categoryImage: string;
    isDeleted:false;

  }

function CreateDish() {
  // navigate back on all dishes page
  const navigate= useNavigate();
  
  const navigateBack = () => {
    navigate('/dish');
  }
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState(0);
  const [dishImage, setDishImage] = useState('');
  const [nature, setNature] = useState('veg');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        // Fetch categories from the API
        const fetchCategories = async () => {
          try {
            const response = await axios.get<Category[]>('https://localhost:7211/api/CategoryTables');
            setCategories(response.data);
            //console.log(categories);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://localhost:7211/api/DishTable/${categoryId}`, {
        dishName,
        dishDescription,
        dishPrice,
        dishImage,
        nature,
        isDeleted: false
      });

      console.log('Dish created successfully:', response.data);
      navigateBack();

      // Reset form fields
      setDishName('');
      setDishDescription('');
      setDishPrice(0);
      setDishImage('');
      setNature('veg');
      setCategoryId('');
    } catch (error) {
      console.error('Error creating dish:', error);
    }

  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add New Dish</h3>

          <div className="form-group mt-3">
          <label htmlFor="dishName">Dish Name</label>
          <input type="text" className="form-control mt-1" placeholder='Enter dish name' id="dishName" value={dishName} required onChange={(e) => setDishName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="dishDescription">Dish Description</label>
          <textarea id="dishDescription" className="form-control mt-1" maxLength={190} value={dishDescription} required onChange={(e) => setDishDescription(e.target.value)} />
        </div>
        <div>
          <label htmlFor="dishPrice">Dish Price</label>
          <input type="number" id="dishPrice" className="form-control mt-1" value={dishPrice} required onChange={(e) => setDishPrice(Number(e.target.value))} />
        </div>
        <div>
          <label htmlFor="dishImage">Dish Image URL</label>
          <input type="text" placeholder='Enter valid url' id="dishImage" className="form-control mt-1" value={dishImage} required onChange={(e) => setDishImage(e.target.value)} />
        </div>
        
          <label htmlFor="nature">Nature</label>
          <div>
            <label className='px-2'>
              <input type="radio" value="veg" required checked={nature === 'veg'} onChange={() => setNature('veg')} />{' '}
              Veg
            </label>
            <label className='px-2'>
              <input type="radio" value="non-veg" checked={nature === 'non-veg'} onChange={() => setNature('non-veg')} />{' '}
              Non-Veg
            </label>
            <label className='px-2'>
              <input type="radio" value="vegan" checked={nature === 'vegan'} onChange={() => setNature('vegan')}/>{' '}
              Vegan
            </label>
          </div>
          <div>
          <label htmlFor="categoryId">Category</label>
          {categories.length>0 ? (
              <select id="categoryId" className="form-control mt-1" value={categoryId} required onChange={(e) => setCategoryId(e.target.value)} style={{color: "black"}} >
              <option value="">Select a category</option>
              {categories.map((cat) => {
                  
                return (
                <option key={cat.categoryId} value={cat.categoryId}> {cat.categoryName} </option>
              )})}
            </select>
          ) : (<div>Loading Categories... </div>)
      }
          
        </div>
        <div className="d-grid gap-2 mt-3">
          <button className='btn btn-primary' type="submit">Create Dish</button>
        </div>
        
        </div>
      </form>
    </div>
    
  );
}

export default CreateDish;