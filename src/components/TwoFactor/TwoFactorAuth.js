import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TwoFactorAuth.css";
import userImg from "../../images/user.png"; // your image

export default function TwoFactorAuth() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate()
  // handle input change
  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // move focus to next box
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }

  const CancelClick = () =>{
    console.log("Cancel");
    navigate("/login")
  }

  return (
    <div className="twofa-container">
      <div className="twofa-card">

        <h2 className="twofa-title">Two-Factor Authenticator</h2>

        <img src={userImg} alt="User" className="twofa-user-img" />

        <p className="twofa-subtext">
          Enter the verification code from your authenticator app
        </p>

        <label className="twofa-label">Verification Code</label>

        <div className="otp-box-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="otp-box"
            />
          ))}
        </div>

        <div className="twofa-buttons">
          <button className="btn-cancel" onClick={CancelClick}>Cancel</button>
          <button className="btn-verify">Verify</button>
        </div>

      </div>
    </div>
  );
}
