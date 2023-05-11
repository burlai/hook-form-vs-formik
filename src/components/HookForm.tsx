import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
};

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label htmlFor="name" className="me-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="invalid-feedback">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="me-2">
          Email
        </label>
        <input
          type="email"
          id="email"
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
      <div className="mb-2">
        <label htmlFor="phoneNumber" className="me-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          {...register("phoneNumber", { required: "Phone number is required" })}
        />
        {errors.phoneNumber && (
          <span className="invalid-feedback">{errors.phoneNumber.message}</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="zipCode" className="me-2">
          ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          {...register("zipCode", { required: "ZIP code is required" })}
        />
        {errors.zipCode && (
          <span className="invalid-feedback">{errors.zipCode.message}</span>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
