import { useState } from "react";
import axios from "axios";

type ConfigType = {};

export const UseAxios = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
    
  const sendEmail = async (data: Object): Promise<void> => {
    console.log(data);
    const response = await axios.post(
      "//localhost:3000/api/v1/sendemail",
      data,
    );
  };

  return {
    sendEmail,
  };
};
