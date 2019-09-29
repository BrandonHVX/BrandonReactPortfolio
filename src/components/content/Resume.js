import React from "react";
import { Container, Col, Row, Badge, Media } from "react-bootstrap";
import twitter from "../../images/twitter.svg";

const styles = {
  position: {
    fontSize: "1.3rem"
  },
  company: {
    fontSize: "0.9rem"
  },
  date: {
    textAlign: "right"
  },
  expertise: {
    fontSize: "1.0rem"
  },
  name: {
    fontSize: "3.0rem",
    fontFamily: "Arial Black,Charcoal,sans-serif"
  },
  title: {
    fontSize: "2.0rem"
  },
  icons: {
    color: "red",
    fontSize: "2em"
  }
};

export default function Resume() {
  return (
    <main class="CV-page">
      <h1 class="CV-primaryHeading">
        <span class="CV-primaryHeading-name">Brandon Gines </span>
      </h1>

      <h4 class="CV-secondaryHeading CV-skills-heading">Career Profile</h4>
      <p>
        I am a Melbourne-based User Experience and Front-End Designer with more
        than 15 years experience across various industries. I am passionate
        about simplifying complexity and modular design systems. I believe in
        designing and building interfaces that excel for the user, owner and
        those maintaining it. I am always keen to push technology to its limits
        where it can enhance the user experience.
      </p>
      <hr />

      <div class="CV-grid-column CV-grid-column--right">
        <div class="CV-skills">
          <h4 class="CV-secondaryHeading CV-skills-heading">
            Skills & Expertise
          </h4>
          <Row>
            <Col xs={6} md={4}>
              <h6 class="CV-tertiaryHeading">Core Specialty</h6>

              <h6 class="CV-tertiaryHeading">Extensive Experience</h6>

              <h6 class="CV-tertiaryHeading">Proficient</h6>
            </Col>
            <Col xs={6} md={4}>
              <h6 class="CV-tertiaryHeading">Core Specialty</h6>

              <h6 class="CV-tertiaryHeading">Extensive Experience</h6>

              <h6 class="CV-tertiaryHeading">Proficient</h6>
            </Col>
            <Col xs={6} md={4}>
              <h6 class="CV-tertiaryHeading">Core Specialty</h6>

              <h6 class="CV-tertiaryHeading">Extensive Experience</h6>

              <h6 class="CV-tertiaryHeading">Proficient</h6>
            </Col>
          </Row>
        </div>
      </div>

      <Row>
        <Col lg={true}>
          <div>
            <div>
              <h4 class="CV-secondaryHeading CV-jobs-heading">
                Employment history
              </h4>
              <ul class="timeline">
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>{" "}
                  <h5 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Senior UX Designer (Styleguide Specialist){" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">
                      Suncorp Group{" "}
                    </span>
                    <small class="CV-timeline-heading-duration">
                      2012 to current
                    </small>
                  </h5>
                  <small class="CV-timeline-heading-duration">
                    2012 to current
                  </small>
                  <p class="text-small mt-2 font-weight-normal">
                    <ul class="CV-timeline-details">
                      <li class="CV-timeline-details-item">
                        Founder and curator of the Suncorp Web Styleguide - a
                        living multi-brand front-end framework. This Design
                        System supports more than 15 brands, 20 components and
                        multiple backend platforms including <em>React</em>,{" "}
                        <em>Angular</em>, <em>Java</em>, <em>AEM</em> and{" "}
                        <em>hybrid native apps</em>. It is the backbone of
                        interface development at the{" "}
                        <a href="https://www.suncorpgroup.com.au/">
                          <span>Suncorp group</span>
                        </a>{" "}
                        and is implemented in all of Suncorp’s primary websites
                        and web apps.
                      </li>
                      <li class="CV-timeline-details-item">
                        Extensive experience in front-end design and integration
                        with <em>Adobe Experience Manager</em> (AEM) content
                        management suite.
                      </li>
                      <li class="CV-timeline-details-item">
                        Specialist in technical design, form design for
                        eCommerce and collaboration between design and
                        development teams.
                      </li>
                      <li class="CV-timeline-details-item">
                        Curator of the Suncorp icon library with thousands of
                        unique icons per brand in multiple colours and formats.
                      </li>
                      <li class="CV-timeline-details-item">
                        Evangelizing the merits of best practice front-end
                        techniques such as responsive design, reusable patterns
                        and accessibility.
                      </li>
                      <li class="CV-timeline-details-item">
                        Interface design and development for some of Australia’s
                        largest insurance and banking brands, including{" "}
                        <a href="https://www.aami.com.au">
                          <span>AAMI</span>
                        </a>
                        ,{" "}
                        <a href="https://www.gio.com.au">
                          <span>GIO</span>
                        </a>
                        ,{" "}
                        <a href="https://www.suncorp.com.au">
                          <span>Suncorp</span>
                        </a>
                        ,{" "}
                        <a href="https://www.apia.com.au">
                          <span>APIA</span>
                        </a>
                        ,{" "}
                        <a href="https://www.bingle.com.au">
                          <span>Bingle</span>
                        </a>{" "}
                        and many more.
                      </li>
                    </ul>
                  </p>
                </li>
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                  <div class="timeline-arrow"></div>
                  <h2 class="h5 mb-0">Title of section 2</h2>
                  <span class="small text-gray">
                    <i class="fa fa-clock-o mr-1"></i>5 April, 2019
                  </span>
                  <p class="text-small mt-2 font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper.
                  </p>
                  <p class="text-small mt-2 font-weight-light">
                    Libero expedita explicabo eius fugiat quia aspernatur autem
                    laudantium error architecto recusandae natus sapiente sit
                    nam eaque, consectetur porro molestiae ipsam! Deleniti.
                  </p>
                </li>
              </ul>

              <div class="CV-jobs">
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Senior UX Designer (Styleguide Specialist){" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">
                      Suncorp Group{" "}
                    </span>
                    <small class="CV-timeline-heading-duration">
                      2012 to current
                    </small>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Founder and curator of the Suncorp Web Styleguide - a
                      living multi-brand front-end framework. This Design System
                      supports more than 15 brands, 20 components and multiple
                      backend platforms including <em>React</em>,{" "}
                      <em>Angular</em>, <em>Java</em>, <em>AEM</em> and{" "}
                      <em>hybrid native apps</em>. It is the backbone of
                      interface development at the{" "}
                      <a href="https://www.suncorpgroup.com.au/">
                        <span>Suncorp group</span>
                      </a>{" "}
                      and is implemented in all of Suncorp’s primary websites
                      and web apps.
                    </li>
                    <li class="CV-timeline-details-item">
                      Extensive experience in front-end design and integration
                      with <em>Adobe Experience Manager</em> (AEM) content
                      management suite.
                    </li>
                    <li class="CV-timeline-details-item">
                      Specialist in technical design, form design for eCommerce
                      and collaboration between design and development teams.
                    </li>
                    <li class="CV-timeline-details-item">
                      Curator of the Suncorp icon library with thousands of
                      unique icons per brand in multiple colours and formats.
                    </li>
                    <li class="CV-timeline-details-item">
                      Evangelizing the merits of best practice front-end
                      techniques such as responsive design, reusable patterns
                      and accessibility.
                    </li>
                    <li class="CV-timeline-details-item">
                      Interface design and development for some of Australia’s
                      largest insurance and banking brands, including{" "}
                      <a href="https://www.aami.com.au">
                        <span>AAMI</span>
                      </a>
                      ,{" "}
                      <a href="https://www.gio.com.au">
                        <span>GIO</span>
                      </a>
                      ,{" "}
                      <a href="https://www.suncorp.com.au">
                        <span>Suncorp</span>
                      </a>
                      ,{" "}
                      <a href="https://www.apia.com.au">
                        <span>APIA</span>
                      </a>
                      ,{" "}
                      <a href="https://www.bingle.com.au">
                        <span>Bingle</span>
                      </a>{" "}
                      and many more.
                    </li>
                  </ul>
                </section>
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Internet Team Leader{" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">
                      The Just Group{" "}
                    </span>
                    <small class="CV-timeline-heading-duration">
                      2006 to 2012
                    </small>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Manager of The Just Group Web Design team responsible for
                      web maintenance and email campaigns to hundreds of
                      thousands of customers each week across 7 brands.
                    </li>
                    <li class="CV-timeline-details-item">
                      Implemented front-end integration of{" "}
                      <em>WebSphere Commerce</em>,{" "}
                      <a href="https://www.jayjays.com.au/">
                        <span>Jay Jays</span>
                      </a>{" "}
                      &{" "}
                      <a href="https://www.dotti.com.au">
                        <span>Dotti</span>
                      </a>{" "}
                      (2010),{" "}
                      <a href="https://www.portmans.com.au/">
                        <span>Portmans</span>
                      </a>{" "}
                      &{" "}
                      <a href="https://www.jacquie.com.au">
                        <span>Jacqui E</span>
                      </a>{" "}
                      (2011),{" "}
                      <a href="https://www.smiggle.com.au">
                        <span>Smiggle</span>
                      </a>{" "}
                      &{" "}
                      <a href="https://www.peteralexander.com.au">
                        <span>Peter Alexander</span>
                      </a>{" "}
                      (2012).
                    </li>
                    <li class="CV-timeline-details-item">
                      Sole interface developer and front-end programmer for The
                      Just Group websites, including{" "}
                      <a href="https://www.justjeans.com.au">
                        <span>Just Jeans</span>
                      </a>{" "}
                      (2006 & 2009),{" "}
                      <a href="https://www.dotti.com.au">
                        <span>Dotti</span>
                      </a>{" "}
                      (2007),{" "}
                      <a href="https://www.jacquie.com.au">
                        <span>Jacqui E</span>
                      </a>{" "}
                      (2007),{" "}
                      <a href="https://www.justgroup.com.au">
                        <span>The Just Group</span>
                      </a>{" "}
                      (2007),{" "}
                      <a href="https://www.smiggle.com.au">
                        <span>Smiggle</span>
                      </a>{" "}
                      (2008) and{" "}
                      <a href="https://www.peteralexander.com.au">
                        <span>Peter Alexander</span>
                      </a>{" "}
                      (2009).
                    </li>
                    <li class="CV-timeline-details-item">
                      Overhaul of The Just Group eCommerce platform front-end on
                      the Interworld eCommerce platform. Comprehensive work on
                      customer registration, online product catalogues and
                      checkout systems with Credit Card, PayPal and Gift Voucher
                      payments.
                    </li>
                    <li class="CV-timeline-details-item">
                      Animation and game design. Pioneered technique for{" "}
                      <em>Progressive Enhanced Flash site</em> for Dotti.
                    </li>
                    <li class="CV-timeline-details-item">
                      Animation and game design. Pioneered technique for
                      progressive enhanced Flash sites.
                    </li>
                  </ul>
                </section>
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Lead Web Designer{" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">
                      ANZ Bank (anz.com){" "}
                    </span>
                    <small class="CV-timeline-heading-duration">
                      2004 to 2005
                    </small>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Full responsibility for ANZ website graphics (
                      <a href="https://www.anz.com.au">
                        <span>anz.com</span>
                      </a>
                      ), including homepage, promotions, banners, landing pages,
                      animations and games.
                    </li>
                    <li class="CV-timeline-details-item">
                      Management of design standards for anz.com, including the
                      creation of an online Web Styleguide.
                    </li>
                    <li class="CV-timeline-details-item">
                      Management and mentoring of web designers located in
                      India.
                    </li>
                  </ul>
                </section>
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Usability and Web Designer{" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">ANZ Bank </span>
                    <small class="CV-timeline-heading-duration">
                      2002 to 2004
                    </small>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Graphical production and image support for ANZ Internet
                      and Intranet,{" "}
                      <a href="https://www.anz.com.au/personal/private-bank/">
                        <span>ANZ Private</span>
                      </a>
                      , ANZ Pacific and{" "}
                      <a href="http://www.anzroyal.com/en/Personal/">
                        <span>ANZ Royal Cambodia</span>
                      </a>{" "}
                      websites
                    </li>
                    <li class="CV-timeline-details-item">
                      Construction of Flash applications and Screensavers,
                      Product demos, CD ROM applications and ATM screens.
                    </li>
                  </ul>
                </section>
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Publishing administrator{" "}
                    </span>
                    –{" "}
                    <span class="CV-timeline-heading-location">
                      INT Press educational bookshop{" "}
                    </span>
                    <small class="CV-timeline-heading-duration">
                      1996 – 2000
                    </small>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Desktop publishing educational language books.
                    </li>
                    <li class="CV-timeline-details-item">
                      Mail order picker and packer.
                    </li>
                    <li class="CV-timeline-details-item">
                      Data entry and invoicing using <em>MYOB</em>.
                    </li>
                  </ul>
                </section>
                <section class="CV-timeline CV-job">
                  <h3 class="CV-timeline-heading">
                    <span class="CV-timeline-heading-title">
                      Freelance work
                    </span>
                  </h3>
                  <ul class="CV-timeline-details">
                    <li class="CV-timeline-details-item">
                      Site design and development for the{" "}
                      <a href="http://juliuscaesar.niccolaigroup.com/">
                        <span>Da Vinci Machines</span>
                      </a>{" "}
                      and{" "}
                      <a href="http://juliuscaesar.niccolaigroup.com/">
                        <span>Ancient Rome</span>
                      </a>{" "}
                      exhibitions. A dedicated responsive website for
                      prospective patrons wanting information on exhibitions
                      around Australia. (2008, 2009, 2011)
                    </li>
                    <li class="CV-timeline-details-item">
                      <a href="https://www.abstractcreative.com.au/">
                        <span>Abstract Creative</span>
                      </a>{" "}
                      full development of a fluid, progressive enhanced and
                      content managed website in Flash. (2006)
                    </li>
                    <li class="CV-timeline-details-item">
                      <a href="http://www.shantaram.com/">
                        <span>Shantaram</span>
                      </a>{" "}
                      website design and development, to support stories and
                      essays from the author of the best selling Australian
                      novel. (2004)
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={true}>
          <div class="CV-education">
            <h4 class="CV-secondaryHeading CV-education-heading">
              Education history
            </h4>
            <section class="CV-timeline CV-education-group">
              <h3 class="CV-timeline-heading">
                <span class="CV-timeline-heading-title">
                  Bachelor of Computer Science{" "}
                </span>
                <span class="CV-timeline-heading-location">
                  Melbourne University{" "}
                </span>
                <small class="CV-timeline-heading-duration">1999 – 2003</small>
              </h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">
                  Study areas included: Programming, Software lifecycle and
                  development, Artificial Intelligence, Database management,
                  Usability, Interface Design, Classics, History, Photography.
                </li>
              </ul>
            </section>
            <section class="CV-timeline CV-education-group">
              <h3 class="CV-timeline-heading">
                <span class="CV-timeline-heading-title">
                  Victorian Certificate of Education{" "}
                </span>
                <span class="CV-timeline-heading-location">
                  Strathmore Secondary College{" "}
                </span>
                <small class="CV-timeline-heading-duration">
                  Completed 1998
                </small>
              </h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">
                  TER Score of 92.5, received straight A+ in Mathematical
                  Methods, Information Process and Management, and Information
                  Systems.
                </li>
                <li class="CV-timeline-details-item">
                  Graphics Common Assessment Task (CAT) was nominated for entry
                  in Scienceworks Top CATs exhibition.
                </li>
              </ul>
            </section>
            <section class="CV-timeline CV-education-group">
              <h3 class="CV-timeline-heading">
                <span class="CV-timeline-heading-title">
                  Professional training
                </span>
              </h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">
                  2016: CSSConf Australia, Melbourne
                </li>
                <li class="CV-timeline-details-item">
                  2015: UX Australia, Brisbane (Presenting)
                </li>
                <li class="CV-timeline-details-item">
                  2015: CSSConf Australia, Melbourne (Presenting)
                </li>
                <li class="CV-timeline-details-item">
                  2014: 1st CSS & JS Conference Melbourne
                </li>
                <li class="CV-timeline-details-item">
                  2013: UX Australia conference + workshops, Melbourne
                </li>
                <li class="CV-timeline-details-item">
                  2009: eCommerce & Marketing conference, Sydney
                </li>
                <li class="CV-timeline-details-item">
                  2008: WACAG 2.0 Accessibility standards seminar
                </li>
                <li class="CV-timeline-details-item">
                  2006: Vision Australia, Web Accessibility Training
                </li>
                <li class="CV-timeline-details-item">
                  2006: Max Design, Advanced CSS Programming course
                </li>
                <li class="CV-timeline-details-item">
                  2005: Semi-Permanent Design conference, Sydney
                </li>
                <li class="CV-timeline-details-item">
                  2004: Macromedia certified course, Advanced application
                  development
                </li>
                <li class="CV-timeline-details-item">
                  2002: ANZ Breakout performance and culture 2 day workshop
                </li>
              </ul>
            </section>
          </div>
        </Col>
      </Row>
    </main>
  );
}
