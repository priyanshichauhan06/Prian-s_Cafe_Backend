import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Menu {
    menuId: number;
    menuName: string;
    menuDescription: string;
    menuImage: string;
    isDeleted:false;

  }

function CreateCategory() {
  // navigate back on view all categories page
  const navigate= useNavigate();
  //navigate user to the desired page
    const navigateBack = () => {
        navigate('/category');
    }
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [menuId, setMenuId] = useState('');
  const [menus, setMenus] = useState<Menu[]>([]);


    useEffect(() => {
        // Fetch categories from the API
        const fetchMenus = async () => {
          try {
            const response = await axios.get<Menu[]>('https://localhost:7211/api/MenuTable');
            setMenus(response.data);
            //console.log(categories);
          } catch (error) {
            console.error('Error fetching menus..', error);
          }
        };
    
        fetchMenus();
      }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://localhost:7211/api/CategoryTables/${menuId}`, {
        categoryName,
        categoryDescription,
        categoryImage,
        isDeleted: false
      });
      console.log('Category created successfully:', response.data);
      navigateBack();
      // Reset form fields
      setCategoryName('');
      setCategoryDescription('');
      setCategoryImage('');
      setMenuId('');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">

          <h3 className="Auth-form-title">Add New Category</h3>

          <div className="form-group mt-3">
            <label htmlFor="categoryName">Category Name </label>
            <input type="text" className="form-control mt-1" placeholder='Enter category name' id="categoryName" value={categoryName} required onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className="form-group mt-3"> 
            <label htmlFor="categoryDescription ">Category Description </label>
            <textarea id="categoryDescription" className="form-control mt-1" maxLength={190} value={categoryDescription} required onChange={(e) => setCategoryDescription(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="categoryImage">Category Image URL </label>
            <input type="text" placeholder='Enter valid url' id="categoryImage" className="form-control mt-1" value={categoryImage} required onChange={(e) => setCategoryImage(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="menuId">Menu </label>
            {menus.length > 0 ? (
                <select id="menuId" className="form-control mt-1" value={menuId} required onChange={(e) => setMenuId(e.target.value)} style={{color: "black"}} >
                <option value="">Select a menu</option>
                {menus.map((m) => {
                    
                  return (
                  <option key={m.menuId} value={m.menuId}> {m.menuName} </option>
                )})}
              </select>
            ) : (<div>Loading Menus... </div>)
        }
        </div>
        <div className="d-grid gap-2 mt-3">
        <button className='btn btn-primary' type="submit" >Create Category</button>
        </div>
      </div>
    </form>

    </div>
    
  );
}

export default CreateCategory;