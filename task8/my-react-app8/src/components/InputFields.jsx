import { useContext } from "react";
import { FormContext } from "../App";

function InputFields() {
    const { formData, handleChange } = useContext(FormContext);

    return (
        <div className="input-container">
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                />
            </div>

            <div className="form-group">
                <label>City</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                />
            </div>
        </div>
    );
}

export default InputFields;