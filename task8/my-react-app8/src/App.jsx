import { createContext, useState } from "react";
import Form from "./components/Form";
import "./App.css";

export const FormContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  }

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        isDarkMode,
        toggleTheme,
      }}
    >
      <div className={isDarkMode ? "app dark" : "app light"}>
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;