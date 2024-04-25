import { useState } from "react";

export function useForm(opt?: any) {
  const [data, setData] = useState(opt?.initialState || null);

  const handleForm = (propName: string, callBack?: Function) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [propName]: e.target?.value });

      if (callBack) callBack(data);
    };
  };

  return [data, handleForm, setData];
}
