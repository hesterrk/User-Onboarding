import React from 'react';


export default function Users(props) {
   
  

    return (
<div>


        <h2>Our Formik User DataBase</h2>
       
      
           <div className="persons">  <h3> {props.user.name}</h3>
                 <p>{props.user.email}</p>
                 <p>{props.user.password}</p>   </div>
              
      

        </div>
    );
}