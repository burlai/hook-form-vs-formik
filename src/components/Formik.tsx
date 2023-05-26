import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import { FormValues } from "../interfaces";

const CustomInput: React.FC<{
  fieldId: string;
  label: string;
  errorMessage: string;
}> = ({ fieldId, label, errorMessage }) => {
  const [field, meta] = useField(fieldId); // fieldId is a field identifier in Formik

  return (
    <>
      <label htmlFor={fieldId} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className={`form-control ${
          meta.error && meta.touched ? "is-invalid" : ""
        }`}
        {...field}
      />
      {meta.error && meta.touched && (
        <ErrorMessage name={fieldId}>
          {() => <div className="invalid-feedback">{errorMessage}</div>}
        </ErrorMessage>
      )}
    </>
  );
};

const initialValues: FormValues = {
  nameCustom: "",
  email: "",
  phoneNumber: "",
  zipCode: "",
};

const validate = (values: FormValues): Partial<FormValues> => {
  const errors: Partial<FormValues> = {};

  if (!values.nameCustom) {
    errors.nameCustom = "Name is required";
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
        <Form className="mt-4">
          <div className="mb-3">
            <CustomInput
              fieldId="nameCustom"
              label="Name - custom with useField() hook"
              errorMessage="Custom name field is required"
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
