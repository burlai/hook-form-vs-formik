import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface HookFormWithYupInterface {
  name: string;
  age: number;
  email: string;
  phone: string;
}

const schema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .regex(/^[A-Za-z]+$/, "Name must contain only letters"),
    age: z
      .string({ required_error: "Age is required" }) // for some reason Zod thinks that input is providing a string here, that's why this is .string(), not .number()
      .min(0)
      .max(150, "You can't be that old"),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    phone: z
      .string({ required_error: "Phone is required" })
      .regex(
        /^\d{3}-\d{3}-\d{3}$/,
        "Phone number must be in the format XXX-XXX-XXX",
      ),
  })
  .required();

const HookFormWithYup: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HookFormWithYupInterface>({
    resolver: zodResolver(schema),
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
