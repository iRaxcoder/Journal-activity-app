import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setformState] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    setformState(initialForm);
  }, [initialForm]);

  useEffect(() => {
    isFieldError();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(errors)) {
      if (errors[formValue] !== null) return false;
    }
    return true;
  }, [errors]);

  const onResetForm = () => {
    setformState(initialForm);
  };

  const isFieldError = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "This field is required"] =
        formValidations[formField];
      formCheckedValues[`${formField}`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setErrors(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    errors,
    isFormValid,
  };
};
