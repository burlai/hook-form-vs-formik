import React from "react";
import { useForm } from "react-hook-form";

export default function HookGeneatedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("First name", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register("Developer", { required: true })}
        type="radio"
        value="No"
      />
      <input
        type="week"
        placeholder="Week"
        {...register("Week", { max: 1, min: 7 })}
      />
      <input
        type="datetime"
        placeholder="Date time"
        {...register("Date time", { required: true })}
      />
      <input
        type="checkbox"
        placeholder="Checkbox"
        {...register("Checkbox", {})}
      />
      <input
        type="range"
        placeholder="Range"
        {...register("Range", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
