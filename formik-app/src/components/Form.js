import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import Users from './Users';
import styled from 'styled-components';

const Label = styled.label `
background: lavender;
border: 4px solid lavender;
border-radius: 3px;


`

const Div = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-content:center;
width: 100%;
margin-top: 10px;

background: #8E54E9;
`





export default function MyForm () {

  const [users, setUsers] = useState([]);



    function submitHandler(values, actions) {
        // console.log(values, actions);

        axios 

        .post('https://reqres.in/api/users', values)
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
           
            actions.resetForm();


        })
        .catch(event => console.log(event))

        .finally(() => {
            console.log('Axios Post request has finished');
        })

    }



    return (

        <div className="Form">
           
           <div>
           <Formik
        onSubmit={submitHandler}
        
        initialValues={initialTestingFormValues}

        validationSchema={validationSchema}
      >
        <Form>
          <Div>
          
          <Label htmlFor="form_name">Name</Label>
          <Field
            type="text"
            id="form_name"
            name="name"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="name" component="div" className="error"/>

          <Label htmlFor="form_email">Email</Label>
          <Field
            type="email"
            id="form_email"
            name="email"
            placeholder="Enter your email here"
          />
          <ErrorMessage name="email" component="div" className="error"/>
          
          <Label htmlFor="form_password">Password</Label>
          <Field
            type="password"
            id="form_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          
          <Field
            as="select"
            name="role"
            id="form_role"
          >
            <option value="">Select a role</option>
            <option value="front">Front-End</option>
            <option value="back">Back-End</option>
            <option value="data">Data Engineer</option>
          </Field>
          <ErrorMessage name="role" component="div" className="error"/>

          <Label htmlFor="form_tos">Agree With Our Terms Of Service?</Label>
          <Field
            type="checkbox"
            id="form_tos"
            name="terms"
          />
          <ErrorMessage name="terms" component="div" className="error"/>
         
          <button type="submit">Submit</button>
          </Div>
        </Form>
      </Formik>
     </div>
    


<Users submit={users} />


</div>
       
    );
}


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter a valid name').min(3, 'Name must have at least 3 characters'),
    email: Yup.string().email('Must be an email address').required('Please enter a valid email'),
    password: Yup.string().min(7, 'Too Short!').required('Please enter a password').matches(
      /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/, "Your Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    role: Yup.string().required('Please Select a Role'),
    terms: Yup.boolean().required('Please agree to the Terms and Conditions')
  });


const initialTestingFormValues = {
    name: '',
    email: '',
    password: '',
    role: '',
    terms: false
  }
  