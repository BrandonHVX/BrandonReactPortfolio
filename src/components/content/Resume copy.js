import React from 'react'
import { Container, Col, Row, Badge } from 'react-bootstrap'
import res from '../../images/res.svg'

const styles = {
  position: {
    fontSize: '1.3rem'
  },
  company: {
    fontSize: '0.9rem'
  },
  date: {
    textAlign: 'right'
  },
  expertise: {
    fontSize: '1.0rem'
  },
  name: {
    fontSize: '3.0rem',
    fontFamily: 'Arial Black,Charcoal,sans-serif'
  },
  title: {
    fontSize: '2.0rem'
  }
}

export default function Resume() {
  return (
    <div className="resume-page">
      <Container>
        <h1 style={styles.name}>BRANDON GINES</h1>
        <h1 style={styles.title}>Full Stack Web Developer</h1>
        <br />
        <Row>
          {' '}
          <Col>
            <h5>
              <Badge pill variant="primary">
                Summary
              </Badge>
            </h5>
            Summary Driven professional with broad technical understanding of
            full stack web development. . Excellent communicator experienced in
            interpreting and implementing client and staff visions of new
            websites. Known for ability to multitask and juggle multiple
            pressing projects simultaneously meeting all deadlines. Strong
            background in project management and customer relations.
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>
              <Badge pill variant="primary">
                Goals & Objectives
              </Badge>
            </h5>
            Interested in opportunities that will allow me to utilize and
            enhance existing skills. Self motivated individual with potential
            for career advancement.
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h5>
              <Badge pill variant="primary">
                Technical & Design Skills
              </Badge>
            </h5>
            Interested in opportunities that will allow me to utilize and
            enhance existing skills. Self motivated individual with potential
            for career advancement.
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={12} md={12} lg={6}>
            <h3>EXPERIENCE</h3>
            <Row>
              <Col>
                {' '}
                <h2 style={styles.position}>Web Developer</h2>
                <h2 style={styles.company}>1st Take Youth Film Program</h2>
              </Col>
              <Col style={styles.date}> October 2017-Present</Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>
            <Row>
              {' '}
              <Col>
                {' '}
                <h2 style={styles.position}>Multimedia Producer</h2>
                <h2 style={styles.company}>Florida Film House</h2>
              </Col>
              <Col style={styles.date}> October 2017-Present</Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>

            <Row>
              <Col>
                {' '}
                <h2 style={styles.position}>Videographer/Editor</h2>
                <h2 style={styles.company}>Rum Bum Film & HD Studios</h2>
              </Col>
              <Col style={styles.date}> October 2017-Present</Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>
            <br />
            <h3>EDUCATION</h3>

            <Row>
              <Col>
                {' '}
                <h2 style={styles.position}>
                  Full-Stack Web Developer Program
                </h2>
                <h2 style={styles.company}>Wyncode Academy</h2>
              </Col>
              <Col style={styles.date}> October 2017-Present</Col>
            </Row>
            <br />
            <Row>
              <Col>
                {' '}
                <h2 style={styles.position}>Web Developer</h2>
                <h2 style={styles.company}>1st Take Youth Film Program</h2>
              </Col>
              <Col style={styles.date}> October 2017-Present</Col>
            </Row>
          </Col>

          <Col xs={12} md={12} lg={6}>
            <h3>EXPERTISE</h3>
            <Row>
              {' '}
              <Col>
                {' '}
                <h2 style={styles.expertise}>Web Development</h2>
              </Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>

            <Row>
              {' '}
              <Col>
                {' '}
                <h2 style={styles.expertise}>Video Prodcution</h2>
              </Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>
            <Row>
              {' '}
              <Col>
                {' '}
                <h2 style={styles.expertise}>Design & Motion Graphics</h2>
              </Col>
            </Row>
            <ul className="job-duties">
              <li>
                Designed and developed user friendly website including optimized
                check out page that increased user clicks which led to increase
                of service products purchases by 20%.{' '}
              </li>
              <li>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.{' '}
              </li>

              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
              <li>
                Worked successfully with designers and other team developers to
                prepare complex user interfaces and data interactions within a
                determined timeline and budget completing projects on time and
                under budget.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
