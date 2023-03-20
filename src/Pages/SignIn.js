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
import { Link,useNavigate } from "react-router-dom";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { AiOutlineUser } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";


const SignIn = () => {
  const [theme] = useThemeHook();
  const [loding, setLoding] = useState(false);
  const navigate=useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const password = form.password.value;
    if (name && password) {
      setLoding(true);
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => sessionStorage.setItem("token", json.token))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoding(false);
          navigate("/home",{replace:true});
          alert("Login Success");
        });
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
              Sign In{" "}
            </h1>

            <Form onSubmit={handleSumbit}>
              <InputGroup className="mb-4 mt-5">
                <InputGroup.Text>
                  <AiOutlineUser size={"1.7rem"} />
                </InputGroup.Text>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  minLength={3}
                  required
                />
              </InputGroup>
              <InputGroup className="mb-4 ">
                <InputGroup.Text>
                  <VscKey size={"1.7rem"} />
                </InputGroup.Text>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  minLength={6}
                />
              </InputGroup>
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
                  "Sign In"
                )}
              </Button>
              <Form.Group className="mt-3 text-center">
              
                <Form.Text className="text-muted fw-bold">
                    New to E-cart?
                </Form.Text>
                <Row className="py-2 border-bottom mb-3"/>
               <Link to={"/register"} className={`${theme ? "bg-dark-primary text-black" : "bg-light-primary"} btn btn-info rounded-0 border-0`}>
               Create your E-cart account
               </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
