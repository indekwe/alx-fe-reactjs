import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  usename: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
       initialValues={{username: '', email: '', passwords: ''}}
       validationSchema={validationSchema}
       onSubmit={(values, { resetForm }) => {
         console.log(values);
         resetForm();
       }}
    >
      {() => (
        <Form>
           <h1>Formik Registration Form</h1>
          
            <label>Username:</label>
            <Field id="username" name="username" placeholder="Enter your username" type="text" />
            <ErrorMessage name="username" component="div" />
         
            <label>Email:</label>
            <Field id="email" name="email" placeholder="Enter your email" type="email" />
            <ErrorMessage name="email" component="div" />
          
            <label>Password:</label>
            <Field id="password" name="password" placeholder="Enter your password" type="password" />
            <ErrorMessage name="password" component="div" />
          
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}


export default FormikForm;