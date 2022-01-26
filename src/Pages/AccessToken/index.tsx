import React, { useState } from "react";

import "./styles.css";

import HomeIcon from "../../assets/img/home_icon.jpg";


import MobileIcon from "../../assets/img/fa-mobile-phone.png";
import EnvelopeIcon from "../../assets/img/fa-envelope.png";

export const AccessToken: React.FC = () => {


 // The selected
 const [selectedTipo, setSelectedTipo] = useState<String>();


   // This function will be triggered when a radio button is selected
   const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTipo(event.target.value);
  };


  const [loginForm, setLoginForm] = useState({
    hasError: false,
    password: "",
    username: ""
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [ev.target.name]: ev.target.value
    });
  };

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={HomeIcon} />
        </div>  
        <div className="login-content">
            <fieldset>
				      <h2 className="title">Confirme sua identidade</h2>
              <p>Como quer receber o código?</p>
                <p>
                  <input
                    type="radio"
                    name="TokenCode"
                    value="telephone"
                    id="telephone"
                    onChange={radioHandler}
                    style={{width:"20px", height:"20px"}}
                  />
                  <label htmlFor="coffee">
                    <img src={MobileIcon} style={{width:"16px", height:"36px", marginLeft: "20px", verticalAlign: "middle"}} alt="Mobile Icon" />
                    {" "}(21) 9*******00
                  </label>
                </p>  
           	
                <p>
                  <input
                    type="radio"
                    name="TokenCode"
                    value="email"
                    id="email"
                    onChange={radioHandler}
                    style={{width:"20px", height:"20px"}}
                  />
                  <label htmlFor="email">
                    <img src={EnvelopeIcon} style={{width:"24px", height:"24px", marginLeft: "20px", verticalAlign: "middle"}} alt="Mobile Icon" />
                    {" "}m*******@gmail.com
                  </label>
                </p>   

                <button className="btn" value="Confirmar"> Confirmar</button>
            </fieldset>   
        </div>
    </div>
    </>
  );
};