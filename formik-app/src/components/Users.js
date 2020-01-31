import React from 'react';


export default function Users(props) {


    return (
        <div>

            <h2>Our Formik User DataBase</h2>
        <h3>{props.users.name}</h3>
        <p>{props.users.email}</p>
        <p>{props.users.password}</p>
        <p>{props.users.terms}</p>
        </div>
    )
}