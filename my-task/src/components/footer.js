import React from "react";
import { Footer } from "react-materialize";

export default function CustomFooter() {
  return (
    <div className="foot"> 
    
    <Footer className="example black" >
  <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
          </form>
          
          </div>
          <div className="foot">
          <h5 className="white-text">Get in touch </h5>
      <p className="grey-text text-lighten-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.
      </p>
      </div>
          
      
    
      
    </Footer>
    </div>
  );
}
