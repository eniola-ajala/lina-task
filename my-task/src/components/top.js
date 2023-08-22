import React from "react";
import 'materialize-css';
import { Navbar, Icon} from "react-materialize";


export default function Top() {
  return (
    <div>
      <Navbar
        alignLinks="right"
        brand={<b>
          <a className="brand-logo blue-text" href="/">
            Lina.
          </a>
          </b>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      fixed={true}
        className="white z-depth-0"
      >
        <a href="#about" className="black-text"> About Us</a>
        <a href="#feature" className="black-text"> Process</a>
        <a href="#testimonial" className="black-text"> Downloads</a>
        <a href="#testimonial" className="black-text"> Contact Us</a>
        <button className="rounded-button">Hello Admin</button>
        
      </Navbar>
    </div>
  );
}
