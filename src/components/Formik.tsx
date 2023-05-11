import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormValues } from "../interfaces";

const initialValues: FormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  zipCode: "",
};

const validate = (values: FormValues): Partial<FormValues> => {
  const errors: Partial<FormValues> = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  }

  if (!values.zipCode) {
    errors.zipCode = "ZIP code is required";
  }

  return errors;
};

const FormComponent: React.FC = () => {
  const handleSubmit = (data: FormValues) => {
    console.log("Formik data:");
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="container mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className={`form-control ${
                errors.name && touched.name ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={`form-control ${
                errors.email && touched.email ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className={`form-control ${
                errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">
              ZIP Code
            </label>
            <Field
              type="text"
              id="zipCode"
              name="zipCode"
              className={`form-control ${
                errors.zipCode && touched.zipCode ? "is-invalid" : ""
              }`}
            />
            <ErrorMessage
              name="zipCode"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
