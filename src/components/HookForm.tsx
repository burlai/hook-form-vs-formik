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

  const CustomInput: React.FC<{
    fieldId: "nameCustom" | "email" | "phoneNumber" | "zipCode";
    label: string;
    errorMessage: string;
    rules?: any;
  }> = ({ fieldId, label, errorMessage, rules }) => {
    const {
      field: { ref, ...inputProps },
      fieldState: { invalid, error, isTouched, isDirty },
      formState: { touchedFields, dirtyFields },
    } = useController({
      name: fieldId, // name is a field identifier in Hook Form, it is required
      control,
      rules,
    });

    return (
      <>
        <label className="form-label">{label}</label>
        <input
          type="text"
          className={`form-control ${invalid ? "is-invalid" : ""}`}
          ref={ref}
          {...inputProps}
        />
        {invalid && <div className="invalid-feedback">{errorMessage}</div>}
      </>
    );
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log("React Hook Form data:");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-4">
      <CustomInput
        fieldId="nameCustom"
        label="Name - custom with useController() hook"
        errorMessage="Custom name field is required"
        rules={{
          required: true,
        }}
      />
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
