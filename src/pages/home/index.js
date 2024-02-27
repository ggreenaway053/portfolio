import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | Full Stack Developer</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <section id="home" className="home container-fluid">
        <div className="intro_sec row">

          <div className="col-12 col-lg image order-lg-2 d-flex justify-content-center align-items-center">
            <svg className="svg svg-circle" viewBox="0 0 500 500" style={{maxWidth: "500px"}} >
              <path d="M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z" fill="#65B7EF">
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z;
                    M400.5,317.5Q328,385,231,418Q134,451,110,350.5Q86,250,116,159.5Q146,69,241,85Q336,101,404.5,175.5Q473,250,400.5,317.5Z;
                    M428.5,355Q371,460,252.5,455.5Q134,451,100,350.5Q66,250,106,160Q146,70,241.5,85Q337,100,411.5,175Q486,250,428.5,355Z;
              M377.5,327.5Q340,405,244,416Q148,427,115,338.5Q82,250,114.5,161Q147,72,255,63.5Q363,55,389,152.5Q415,250,377.5,327.5Z;                                                                                          M406,333Q346,416,240.5,432.5Q135,449,73.5,349.5Q12,250,87.5,174.5Q163,99,268.5,67Q374,35,420,142.5Q466,250,406,333Z;
                    M405.5,323Q334,396,231,428.5Q128,461,97,355.5Q66,250,119.5,183.5Q173,117,266.5,88Q360,59,418.5,154.5Q477,250,405.5,323Z;"></animate>
                <animateTransform attributeName="transform" type="rotate" dur="20s" repeatCount="indefinite" from="0,250,250" to="360,250,250"></animateTransform>
              </path>
            </svg>
          </div>

          <div className="col-12 col-lg content order-lg-1 d-lg-flex align-items-center justify-content-center">
            <div className="inner">
              <h2 className="mb-1x">{introdata.title}</h2>
              <h1 className="fluidz-48 mb-1x">
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third,
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p className="mb-1x">{introdata.description}</p>
              <div className="intro_btn-action pb-5 pb-lg-0">
                <Link to="/portfolio" className="ac_btn btn">Recent Work</Link>
                <Link to="/contact" className="btn ac_btn">Let's Chat</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
