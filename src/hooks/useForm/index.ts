import { useState } from "react";

/**
 * Custom React hook for managing form data.
 * @param {Object} [opt] - Optional configuration options.
 * @param {*} [opt.initialState] - Initial state for the form data.
 * @returns {[Object, Function, Function]} - An array containing the form data state, form handler function, and setter function.
 */
export function useForm(opt?: any) {
  const [data, setData] = useState(opt?.initialState || null);

  /**
   * Handles form input changes and updates the form data state.
   * @param {string} propName - The name of the property being updated.
   * @param {Function} [callBack] - Optional callback function to execute after updating the form data.
   * @returns {Function} - Event handler function for form input changes.
   */
  const handleForm = (propName: string, callBack?: Function) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [propName]: e.target?.value });

      if (callBack) callBack(data);
    };
  };

  return [data, handleForm, setData];
}
