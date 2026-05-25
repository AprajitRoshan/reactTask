import { useContext } from "react";
import { FormContext } from "../App";
import InputFields from "./InputFields";

function Form() {
    const { handleSubmit, isDarkMode, toggleTheme } = useContext(FormContext);

    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <h1>Student Registration Form</h1>

            <button type="button" className="theme-btn" onClick={toggleTheme}>
                {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            </button>

            <InputFields />

            <button type="submit" className="submit-btn">
                Submit
            </button>
        </form>
    );
}

export default Form;