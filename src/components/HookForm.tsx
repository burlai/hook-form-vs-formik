import React from "react";
import { useForm, SubmitHandler, useController } from "react-hook-form";
import { FormValues } from "../interfaces";

const FormComponent: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { field: nameField } = useController({
    name: "nameCustom",
    control,
    rules: { required: "Name is required" },
    defaultValue: "",
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log("React Hook Form data:");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="nameCustom" className="form-label">
          Name - custom with useController() hook
        </label>
        <input
          type="text"
          id="nameCustom"
          className={`form-control ${errors.nameCustom ? "is-invalid" : ""}`}
          {...nameField}
        />
        {errors.nameCustom && (
          <span className="invalid-feedback">{errors.nameCustom.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="invalid-feedback">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`}
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        {errors.phoneNumber && (
          <span className="invalid-feedback">{errors.phoneNumber.message}</span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="zipCode" className="form-label">
          ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
          {...register("zipCode", { required: "ZIP code is required" })}
        />
        {errors.zipCode && (
          <span className="invalid-feedback">{errors.zipCode.message}</span>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
