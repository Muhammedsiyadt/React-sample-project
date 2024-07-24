import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import Messi from "../../assets/messi.jpg";

const LoginPage = () => {
  return (
    <div className="main">
      <div className="right-side">
        <div className="heading">
          <h1>LOGIN</h1>
        </div>
        <div className="form">
          <img src={Messi} alt="Messi" className="form-img" />
          <form>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                style: { color: "#000" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#555",
                  },
                  "&:hover fieldset": {
                    borderColor: "#007BFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007BFF",
                  },
                },
              }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                style: { color: "#000" },
              }}
              InputProps={{
                style: { color: "#000" },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#555",
                  },
                  "&:hover fieldset": {
                    borderColor: "#007BFF",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#007BFF",
                  },
                },
              }}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </form>
          <br />
          <p>
            If you haven't registered yet <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
