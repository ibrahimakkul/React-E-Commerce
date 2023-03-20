import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Spinner,
  InputGroup,
  Form,
} from "react-bootstrap";

import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [theme] = useThemeHook();
  const [loding, setLoding] = useState(false);
  const navigate=useNavigate();

  const [number, setNumber] = useState(null);

  const handleSumbit = (e) => {
    const form=e.target;
    const username=form.username.value
    const password=form.password.value
    const number=form.number.value
    const email=form.email.value
    const firstname=form.firstname.value
    const lastName=form.lastName.value
    e.preventDefault();
 try{
if(username && lastName && email && number && firstname && password && number){
  setLoding(true);
  navigate("/home");
  
}




 }catch(err){
  console.log(err);
 }



  };

  return (
    <>
      <Container className="py-5 mt-5">
        <Row className="justify-content-center mt-5">
          <Col
            xs={11}
            sm={10}
            md={8}
            lg={4}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-4 rounded`}
          >
            <h1
              className={`${
                theme ? "text-dark-primay " : "text-light-primary"
              } text-center  border-bottom pb-3`}
            >
              Create Account{" "}
            </h1>

            <Form onSubmit={handleSumbit}>
              <Row>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    required
                    className=""
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    required
                    className=""
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required
                  className=""
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="User Name"
                  required
                  className=""
                />
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Label>Mobile number</Form.Label>
                <PhoneInput
                  country={"tr"}
                  value={number}
                  onChange={(phone) => setNumber(phone)}
                  className="text-dark"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className=""
                />
              </Form.Group>

              <Button
                type="sumbit"
                disabled={loding}
                className={`${
                  theme ? "bg-dark-primary text-black" : "bg-light-primary"
                } m-auto d-block`}
                style={{ border: 0 }}
              >
                {loding ? (
                  <>
                    <Spinner
                      as={"span"}
                      animation={"grow"}
                      size="sm"
                      role={"status"}
                      aria-hidden="true"
                    />
                    &nbsp;Loading...
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
