import React from "react";
import { Row, Col } from "react-materialize";
import Card from "./card";
export default function Choose() {
  return (
    <div id="feature">
      <Row>
        <Col
        m={4}
        s={12}>
          <Card>
          <div className="icon">
        <img src="icon.png" alt="Icon" />
      </div>
            <h5 className="black-text"> Fast Processing</h5>
            <p className="black-text">
              {" "}
              hi bg girh sio ghsousguv sfh sh guhsf sh sif gvsk gusfkvgsu
              ksgsufksfus ifshfdf gsuf gik gsf gsk sfksjfgfmsssjfsj sgsg s gsjf
              sfsg ff sj gs fgs fg sm f fgsjgsfjgsf sfgfjsfgfsfhkfsf sfg gf
            </p>
          </Card>
        </Col>
        <Col m={4}
        s={12}>
          <Card>
          <div className="icon">
        <img src="icon.png" alt="Icon" />
      </div>
            <h5 className="black-text"> Secure Transactions</h5>
            <p className="black-text">
              {" "}
              hi bg girh sio ghsousguv sfh sh guhsf sh sif gvsk gusfkvgsu
              ksgsufksfus ifshfdf gsuf gik gsf gsk sfksjfgfmsssjfsj sgsg s gsjf
              sfsg ff sj gs fgs fg sm f fgsjgsfjgsf sfgfjsfgfsfhkfsf sfg gf
            </p>
          </Card>
        </Col>
        <Col m={4}
        s={12}>
          <Card>
          <div className="icon">
        <img src="icon.png" alt="Icon" />
      </div>
            <h5 className="black-text"> Profile Confidentilality</h5>
            <p className="black-text">
              {" "}
              hi bg girh sio ghsousguv sfh sh guhsf sh sif gvsk gusfkvgsu
              ksgsufksfus ifshfdf gsuf gik gsf gsk sfksjfgfmsssjfsj sgsg s gsjf
              sfsg ff sj gs fgs fg sm f fgsjgsfjgsf sfgfjsfgfsfhkfsf sfg gf
            </p>
          </Card>
        </Col>
      </Row>
      
    </div>
  );
}
