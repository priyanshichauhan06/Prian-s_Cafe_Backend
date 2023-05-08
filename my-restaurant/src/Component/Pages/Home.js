import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const usenavigate=useNavigate();
    useEffect(()=>{
      let userid=sessionStorage.getItem('userid');
      if(userid==='' || userid===null)
      {
        usenavigate('/login')
      }
    },[]);
    return (
        <div>
            <div className="header">
                
                <Link to={'/'}>Home</Link>
            
            </div>
            <h1 className="text-center">Welcome</h1>
        </div>
    )
}