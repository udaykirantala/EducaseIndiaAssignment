import { useState } from "react";
import {
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    Typography,
} from "@mui/material";
import { MobileContainer } from "../../components/MobileContainer/MobileContainer";
import './Register.css'
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        companyName: "",
        agency: "Yes",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        const newErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log(formData);
            alert("Account Created Successfully");
        }
        setFormData({
            fullName: "",
            email: "",
            password: "",
            companyName: "",
            agency: "Yes",
        });
        setErrors({});
        navigate('/account-settings');
    };
    return (
        <MobileContainer>
            <div>
                <div className="registaion-heding">
                    <h2>Create your PopX account</h2>
                </div>
                <div>
                    <TextField
                        fullWidth
                        required
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={Boolean(errors.fullName)}
                        helperText={errors.fullName}
                        className="custom-textfield"
                    />

                    <TextField
                        fullWidth
                        required
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        className="custom-textfield"
                    />

                    <TextField
                        fullWidth
                        required
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                        className="custom-textfield"
                    />

                    <TextField
                        fullWidth
                        label="Company Name"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        error={Boolean(errors.companyName)}
                        className="custom-textfield"
                    />

                    <Typography className="agency-label">
                        Are you an Agency? <span>*</span>
                    </Typography>

                    <RadioGroup
                        row
                        name="agency"
                        value={formData.agency}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="Yes"
                            control={<Radio className="custom-radio" />}
                            label="Yes"
                        />

                        <FormControlLabel
                            value="No"
                            control={<Radio className="custom-radio" />}
                            label="No"
                        />
                    </RadioGroup>
                </div>
                <div className="create-account-btn-continer">
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        className="create-account-btn"
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        </MobileContainer>
    );
};