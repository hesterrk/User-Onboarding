import React from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';

export default function Form () {


















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
          
          <label htmlFor="form_tos">Agree With Our Terms Of Service>?</label>
          <Field
            type="checkbox"
            id="form_tos"
            name="terms"
          />
          <ErrorMessage name="terms" component="div" className="error"/>
         
          <button type="submit">Submit</button>
        </Form>
      </Formik>



        </div>
    );
}


const initialTestingFormValues = {
    name: '',
    email: '',
    password: '',
    terms: false
  }
  