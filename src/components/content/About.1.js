import React from 'react'
import ae from '../../images/ae.svg'
import ps from '../../images/ps.svg'
import ai from '../../images/ai.svg'
import xd from '../../images/xd.svg'
import pr from '../../images/Pr.svg'
import rails from '../../images/rails.svg'
import sass from '../../images/sass.svg'
import node from '../../images/node.svg'
import slack from '../../images/slack.svg'
import git from '../../images/git.svg'
import npm from '../../images/npm.png'
import vue from '../../images/vuejs.svg'
import js from '../../images/js.svg'
import ruby from '../../images/ruby.png'
import html5 from '../../images/html5.svg'
import bootstrap from '../../images/bootstrap.svg'
import animationData from '../../images/greeting.json'
import Lottie from 'react-lottie'
import Brandonpic from '../../images/BrandonPic.jpg'
import { Card, Row, Col, Container, Jumbotron, Button } from 'react-bootstrap'
import reactsvg from '../../images/react.svg'

const text = {
  fontSize: '12px',
  marginTop: '20px'
}

const col = {
  marginTop: '20px'
}

const jumbo = {
  backgroundColor: 'transparent '
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: ''
  }
}
export default function About() {
  return (
    <div>
      <Col>
        {' '}
        <Jumbotron style={jumbo}>
          <p>
            <Lottie options={defaultOptions} width={400} />
          </p>
          <p>
            I'm a software engineer in frontend and backend development for
            complex scalable web apps. I write about software development on my
            blog. Want to know how I may help your project? Check out my project
            portfolio and online resume.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </Col>
      {/* <Col sm={4}>
      {" "}
      <img src={Brandonpic} width={250} />{" "}
    </Col> */}

      <h1>About Me</h1>
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
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor.
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
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor.
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
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor.
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
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor.
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
          List skills/technologies here. You can change the icon above to any of
          the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula
          eget dolor.
        </Col>
      </Row>
    </div>
  )
}
