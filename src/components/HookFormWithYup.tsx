import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface HookFormWithYupInterface {
  name: string;
  age: number;
  email: string;
  phone: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z ]*$/, "Use only letters for your name"),
  age: yup
    .number()
    .required("Age is required")
    .min(0, "Age must be at least 0 year")
    .max(150, "Age cannot exceed 150 years"),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(
      /^\d{3}-\d{3}-\d{3}$/,
      "Please provide phone in XXX-XXX-XXX format",
    ),
});

const HookFormWithYup: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HookFormWithYupInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: HookFormWithYupInterface) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
          )}
        />
        {errors.name && (
          <span className="invalid-feedback">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <input
              type="number"
              {...field}
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
            />
          )}
        />
        {errors.age && (
          <span className="invalid-feedback">{errors.age.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <input
              type="email"
              {...field}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
          )}
        />
        {errors.email && (
          <span className="invalid-feedback">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
          )}
        />
        {errors.phone && (
          <span className="invalid-feedback">{errors.phone.message}</span>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default HookFormWithYup;
