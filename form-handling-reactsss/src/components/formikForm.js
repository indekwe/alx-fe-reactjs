import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const FormikForms = () => {
    const initialValues={username:'',email: '',password: ''}
    const handleSubmit=(values)=>{
        console.log(values)
    }
    const validationSchema=Yup.object({
        username: Yup.string().required('Username required'),
        email: Yup.string().required('Email required').email('not valid email'),
        password: Yup.string().required('Password required')
    })
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form>
            <label htmlFor="username">username</label>
            <Field type="text" name="username" />
            <ErrorMessage style={{color: 'red'}} name="username" component="div" />
            <label htmlFor="email">email</label>
            <Field type="email" name="email" />
            <ErrorMessage style={{color: 'red'}} name="email" component="div" />
            <label htmlFor="password">password</label>
            <Field type="text" name="password" />
            <ErrorMessage style={{color: 'red'}} name="password" component="div" />
            <button type="submit">Submit</button>
        </Form>
        </Formik>
        
    );
};

export default FormikForms;