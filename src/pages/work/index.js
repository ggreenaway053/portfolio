import React from "react";
// import 'reactjs-popup/dist/index.css';

import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

import Card from "../../components/Card";
import Popup from "reactjs-popup";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Recent Work | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Recent Work 👨‍💻</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="h4">I really enjoy bringing ideas to life on the web. Below are a range of projects I've worked on, both freelancing and full-time employment!</p>
          </Col>
        </Row>

        <Row className="portfolio_items">
        {dataportfolio.map((data, i) => {
          return (
            <Card key={i} img={data.img} title={data.title} type={data.type} who={data.who} tech={data.tech} link={data.link}/>
          );
        })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
