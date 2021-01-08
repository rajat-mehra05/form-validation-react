import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img
            className="form-img"
            src="data:image/png;base64,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"
            alt="signup"
          />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
