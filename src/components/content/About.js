import React, { useState } from "react";
import ae from "../../images/ae.svg";
import ps from "../../images/ps.svg";
import ai from "../../images/ai.svg";
import xd from "../../images/xd.svg";
import pr from "../../images/Pr.svg";
import rails from "../../images/rails.svg";
import sass from "../../images/sass.svg";
import node from "../../images/node.svg";
import slack from "../../images/slack.svg";
import git from "../../images/git.svg";
import npm from "../../images/npm.png";
import vue from "../../images/vuejs.svg";
import js from "../../images/js.svg";
import ruby from "../../images/ruby.png";
import html5 from "../../images/html5.svg";
import bootstrap from "../../images/bootstrap.svg";
import animationData from "../../images/greeting.json";
import Lottie from "react-lottie";
import Brandonpic from "../../images/BrandonPic.jpg";
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap";
import reactsvg from "../../images/react.svg";
import bgheader from "../../images/slide-4.jpg";
import NavBar from "./Navbar";

const text = {
  fontSize: "12px",
  marginTop: "20px"
};

const col = {
  marginTop: "20px"
};

const jumbo = {
  backgroundColor: "transparent "
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};

const header = {
  backgroundImage: `url(${bgheader})`
};
export default function About() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <div>
      <header style={header}>
        <div class="overlay"></div>
        <NavBar toggle={isOpen} />
        <div class="tophead">
          <div>
            <Col>
              {" "}
              <Jumbotron style={jumbo}>
                <p>
                  <Lottie options={defaultOptions} width={300} />
                </p>
                <p class="subtitle-our-team">
                  I'm a software engineer in frontend and backend development
                  for complex scalable web apps. I write about software
                  development on my blog. Want to know how I may help your
                  project? Check out my project portfolio and online resume.
                </p>
              </Jumbotron>
            </Col>
          </div>

          <div class="sesgoabajo"></div>
        </div>
      </header>
      <main>
        <section class="overview-wrap" id="overview">
          <div class="container">
            <div class="contenedor">
              <h2 class="title-our-team wow fadeInUp">About Me</h2>
              <p class="subtitle-our-team wow fadeInUp">
                Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                leo ornare nec vulputate tempus velit nam id purus tellus
                hendrerit mi dapibus
              </p>

              <Row style={text}>
                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={js} width={40} alt="" />
                    </span>
                    <span>
                      <img src={reactsvg} width={40} alt="" />
                    </span>
                    <span>
                      <img src={vue} width={40} alt="" />
                    </span>
                  </p>
                  Vanilla Javascript, React.JS and Vue.js
                </Col>
                <br />
                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={node} width={40} alt="" />
                    </span>
                    <span>
                      <img src={npm} width={40} alt="" />
                    </span>
                  </p>
                  Node.js and npm
                </Col>
                <br />
                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={ruby} width={38} alt="" />
                    </span>
                    <span>
                      <img src={rails} width={38} alt="" />
                    </span>
                  </p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </Col>
                <br />

                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={html5} width={40} alt="" />
                    </span>
                    <span>
                      <img src={reactsvg} width={40} alt="" />
                    </span>
                    <span>
                      <img src={bootstrap} width={40} alt="" />
                    </span>
                    <span>
                      <img src={sass} width={40} alt="" />
                    </span>
                  </p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </Col>
                <br />
                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={ps} width={40} alt="" />
                    </span>
                    <span>
                      <img src={ai} width={40} alt="" />
                    </span>
                    <span>
                      <img src={xd} width={40} alt="" />
                    </span>
                  </p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </Col>

                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={pr} width={40} alt="" />
                    </span>
                    <span>
                      <img src={ae} width={40} alt="" />
                    </span>
                  </p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </Col>
                <Col style={col} xs={6} md={4}>
                  <p>
                    <span>
                      <img src={git} width={40} alt="" />
                    </span>
                    <span>
                      <img src={slack} width={40} alt="" />
                    </span>
                  </p>
                  List skills/technologies here. You can change the icon above
                  to any of the 1500+ FontAwesome 5 free icons available. Aenean
                  commodo ligula eget dolor.
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section class="galeria">
          <div class="sesgoarriba"></div>
          <div class="imagenes">
            <img
              src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt=""
              class="img-fluid"
            />
            <div class="enmica">
              <h2>Dipendra's Design</h2>
              <div></div>
            </div>
          </div>

          <div class="sesgoabajo"></div>
        </section>

        <section class="blog-wrap" id="blog">
          <div class="container-fluid">
            <h2 class="title-blog wow fadeInUp">Latest Posts</h2>
            <p class="subtitle-blog wow fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
              leo ornare nec vulputate tempus velit nam id purus tellus
              hendrerit mi dapibus
            </p>
            <div class="row">
              <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                <div class="card">
                  <figure class="text-center">
                    <img
                      src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="card-body">
                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      proin leo leo ornare nec vulputate tempus.
                    </p>
                    <a href="#" class="">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                <div class="card">
                  <figure class="text-center">
                    <img
                      src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="card-body">
                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      proin leo leo ornare nec vulputate tempus.
                    </p>
                    <a href="#" class="">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                <div class="card">
                  <figure class="text-center">
                    <img
                      src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      class="img-fluid"
                    />
                  </figure>
                  <div class="card-body">
                    <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      proin leo leo ornare nec vulputate tempus.
                    </p>
                    <a href="#" class="">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cta contact-wrap" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto  wow zoomIn">
                <div class="cta-inner text-center rounded">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">
                      Get in Touch With Us
                    </span>
                  </h2>
                  <div class="contactForm">
                    <form>
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="mobile"
                          class="form-control"
                          placeholder="Mobile"
                          required="required"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          rows="4"
                          cols="50"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <div class="col-md-12">
                          <input
                            type="submit"
                            name="submit"
                            value="Send"
                            class="btn-login"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
