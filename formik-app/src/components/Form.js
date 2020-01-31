import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Users from "./Users";

export default function MyForm () {

    const [users, setUsers] = useState([]);




    function submitHandler(values, actions) {
        console.log(values, actions);

        axios 

        .post('https://reqres.in/api/users', values)
        .then(response => {
            console.log(response.data);
            actions.resetForm();

        })
        .catch(event => console.log(event))

        .finally(() => {
            console.log('Axios Post request has finished');
        })

    }



    return (

        <div className="Form">
           
           <Formik
        onSubmit={submitHandler}
        
        initialValues={initialTestingFormValues}

        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="form_name">Name</label>
          <Field
            type="text"
            id="form_name"
            name="name"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="name" component="div" className="error"/>

          <label htmlFor="form_email">Email</label>
          <Field
            type="email"
            id="form_email"
            name="email"
            placeholder="Enter your email here"
          />
          <ErrorMessage name="email" component="div" className="error"/>
          
          <label htmlFor="form_password">Password</label>
          <Field
            type="password"
            id="form_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          
          <label htmlFor="form_tos">Agree With Our Terms Of Service?</label>
          <Field
            type="checkbox"
            id="form_tos"
            name="terms"
          />
          <ErrorMessage name="terms" component="div" className="error"/>
         
          <button type="submit">Submit</button>
        </Form>
      </Formik>

{/* //Adding our users component to pass down data to */}

<Users />

        </div>
    );
}


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter a valid name'),
    email: Yup.string().required('Please enter a valid email'),
    password: Yup.string().required('Please enter a password'),
    terms: Yup.boolean().required('Please agree to the Terms and Conditions')
  });


const initialTestingFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false
  }
  