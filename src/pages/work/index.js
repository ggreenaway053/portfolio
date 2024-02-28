import React from "react";
import Popup from "reactjs-popup";
// import 'reactjs-popup/dist/index.css';

import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
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
          <Col lg="6"></Col>
        </Row>

        <Row className="portfolio_items">
        {dataportfolio.map((data, i) => {
          return (
            <Col lg="6" className="mb-5 item">
              <img src={data.img} alt={data.title} className="w-100" />
              <div className="content mt-4">
                <h4>{data.title}</h4>
                <p>{data.type}</p>

                <Popup trigger={<button className="btn"><span>Read More</span></button>} modal nested>
                  <div className="header mb-4">
                    <h3>{data.title}</h3>
                    <p>{data.type}</p>
                    <hr/>
                  </div>
                  <div className="row">
                    <Col lg="6" className="mb-4">
                      <h5>Who?</h5>
                      <p>{data.who}</p>
                    </Col>

                    <Col lg="6" className="mb-4">
                      <h5>Tech Stack</h5>
                      <p>{data.tech}</p>
                    </Col>

                    <Col lg="12">
                      <a href={data.link} target="_blank" className="btn"><span>View Project</span></a>
                    </Col>
                  </div>
                </Popup>
              </div>
            </Col>
          );
        })}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
