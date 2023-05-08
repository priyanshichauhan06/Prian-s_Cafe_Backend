import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogIn =() => {
    /*const [UserID,UserIDupdate] = useState('');
    const [Password,Passwordupdate] = useState('');
  
    //declaring usenavigate hook
    const usenavigate=useNavigate();
  
    // axios.post("https://localhost:7211/api/LogIn", {
    //     UserID: 'myUserID',
    //     Password:'myPassword'
    // }).then(function(re))
    useEffect(() => {
      sessionStorage.clear();
    },[]);
  
    const ProceedLogin = (e) => {
      e.preventDefault();

      const data={UserID, Password};

      if(validate()){
        //fetching data

        // fetch("https://localhost:7211/api/LogIn",
        // {
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        // }).then((response) => response.json())
        // .then((data)=> {

        //})

      axios.post("https://localhost:7211/api/LogIn",data).then((res)=>
        {
          return res.json();
        }).then((resp)=>
        {
            console.log(resp.data);
        //     if(resp.true){
        //         usenavigate("./menu")

        //     }
        //   //console.log(resp)

        //   if(Object.keys(resp).length===0){
        //     toast.error('Please Enter valid credentials');
        //   }
        //   else {
        //     if(resp.Password===Password){
        //       toast.success('Success');
        //       sessionStorage.setItem('UserID',UserID);
        //       usenavigate('/');
        //     }
        //     else {
  
        //     }
        //   }
        }).catch((err)=> 
        {
         toast.error('LogIn Failed due to :' + err.message);
        })
      }
    }
  const validate=()=>{
      let result=true;
      if(UserID==='' || UserID===null)
      {
        result=false;
        alert('Please Enter UserID');
      }
      if(Password==='' || Password===null)
      {
        result=false;
        alert('Please Enter Password');
      }
      return result;
    }*/
    
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" /*onSubmit={ProceedLogin}*/>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>User ID<span className="errmsg"> *</span></label>
            <input type="UserID" value="abc" /*onChange={e=>UserIDupdate(e.target.value)}*/ className="form-control mt-1" placeholder="Enter UserID"/>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="Password" value="1234" /*{Password} onChange={e=>Passwordupdate(e.target.value)}*/ className="form-control mt-1" placeholder="Enter Password"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" > Log In</button>
          </div>
          <p className="forgot-Password text-right mt-2">
            Forgot <a href="#">Password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LogIn;