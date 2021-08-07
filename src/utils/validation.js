import React, { useState } from "react";
import Footer from "../components/footer/footer";

const Validation = () => {
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const onValidation = (e) => {
    let valid;

    switch (e.target.id) {
      case "email":
        setEmail(e.target.valid);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper("invaild email example@email.com");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Footer
        onValidation={onValidation}
        email={email}
        setEmail={setEmail}
        emailHelper={emailHelper}
        setEmailHelper={setEmailHelper}
      />
    </div>
  );
};
