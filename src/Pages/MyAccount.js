import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Image,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import Heading from "../component/Heading";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import profilepicture from "../İmages/1.png";
import { FaClipboardList, FaUser } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import "./my-account.css";
import OrderCart from "./OrderCart"

const MyAccount = () => {
  const [theme] = useThemeHook();

  return (
    <Container className="py-5 mt-5">
      <Heading heading="My Account" />
      <Tab.Container>
        <Row className="justify-content-evenly mt-4 p-1">
          <Col
            sm={3}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded h-100 mb-3 user-menu`}
          >
            <Row className="mb-3 py-2">
              <Col xs={3} className="pe-0">
                <Image
                  src={profilepicture}
                  thumbnail
                  fluid
                  roundedCircle
                  className="p-0"
                />
              </Col>
              <Col xs={9} className="pt-1">
                <span>Hello,</span>
                <h4>Code With yd</h4>
              </Col>
            </Row>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="mb-3">
                <Nav.Link eventKey={"my-orders"}>
                  My Orders <FaClipboardList size={"1.4rem"} />
                </Nav.Link>
                <Nav.Link eventKey={"account-details"}>
                  Account Details <FaUser size={"1.4rem"} />
                </Nav.Link>
                <Nav.Link eventKey={"addres"}>
                  Address <IoLocationSharp size={"1.4rem"} />
                </Nav.Link>
                <Nav.Link eventKey={"wallet"}>
                  Wallet <GiWallet size={"1.4rem"} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            sm={8}
            className={`${
              theme ? "text-light bg-dark" : "text-black bg-light"
            } p-2 rounded `}
          >
            <Tab.Content>
            <Tab.Pane eventKey="my-orders">
            <Heading heading="My Orders" size="h3"/>
            <OrderCart deliveredDate="05 July, 2022" orderDate="24 Jun , 2022" orderId="1234" title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" Image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"/>
           
            <OrderCart deliveredDate="05 July, 2022" orderDate="24 Jun , 2022" orderId="1234" title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet" Image="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"/>
           
            </Tab.Pane>
            <Tab.Pane eventKey="account-details">
            <Heading heading="Account details" size="h3"/>
            <OrderCart/>
            </Tab.Pane>
            <Tab.Pane eventKey="addres">
            <Heading heading="Address" size="h3"/>
            <OrderCart/>
            </Tab.Pane>
            <Tab.Pane eventKey="wallet">
            <Heading heading="Wallet" size="h3"/>
            <OrderCart/>
            </Tab.Pane>
               
              
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default MyAccount;
