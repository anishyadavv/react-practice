import { useState } from "react";

const useGeneratePassword = () => {
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const generatePassword = (length, checkbox) => {
    let generatedPassword = "",
      charset = "";
    if (length == 0) {
      setError("length must be greater than zero");
      return;
    }
    const options = checkbox.filter((check) => {
      return check.state;
    });

    if (options.length === 0) {
      setError("Please select any one option");
      return;
    }

    options.forEach((item) => {
      switch (item.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!@#$%&*()";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
    setError("");
  };

  return { password, error, generatePassword };
};

export default useGeneratePassword;
