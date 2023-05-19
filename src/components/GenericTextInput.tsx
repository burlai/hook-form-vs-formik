import React from "react";

const GenericTextInput: React.FC<{
  fieldId: string;
  fieldName: string;
  errorMessage: string;
  useFormHook: any;
}> = ({
  fieldId,
  fieldName,
  errorMessage,
  useFormHook, // Pass either `useFormik` or `useForm` from the respective library
}) => {
  const { register, errors } = useFormHook();

  return (
    <>
      <label htmlFor={fieldId} className="form-label">
        {fieldName}
      </label>
      <input
        type="text"
        className={`form-control ${errors[fieldId] ? "is-invalid" : ""}`}
        id={fieldId}
        name={fieldId}
        ref={register} // useFormik: {ref: register}, useForm: {register}
      />
      {errors[fieldId] && (
        <div className="invalid-feedback">{errorMessage}</div>
      )}
    </>
  );
};

export default GenericTextInput;
