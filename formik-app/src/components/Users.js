import React from 'react';


export default function Users(props) {
    console.log(props, 'This is props');
   
  

    return (
<div>


        <h2>Our Formik User DataBase</h2>
       
      
           <div className="persons">  <h3>                          {props.submit.name}</h3>
                 <p>{props.submit.email}</p>
                 <p>{props.submit.password}</p>   </div>
              
      

        </div>
    );
}