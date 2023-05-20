import { useState } from "react";

import api from "../@api/api";

const useAxios = (onSuccess, onError) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (config) => {
    try {
      setIsLoading(true);
      const res = await api.request(config);
      setResponse(res.data);
      setError(null);
      setIsLoading(false);

      // onSuccess 함수 인수가 전달됐을 때만 호출
      if (typeof onSuccess === "function") {
        onSuccess(res.data);
      }
    } catch (err) {
      setError(err);
      setIsLoading(false);

      // onError 함수가 인수가 전달됐을 때만 호출
      if (typeof onError === "function") {
        onError(err);
      }
    }
  };

  return { response, error, isLoading, sendRequest };
};

export default useAxios;
