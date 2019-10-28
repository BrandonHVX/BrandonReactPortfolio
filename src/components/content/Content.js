import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import NavBar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import About from "../content/About";
import WebDev from "../content/WebDev";
import Video from "../content/Video";
import Design from "../content/Design";
import Motion from "../content/Motion";
import Contact from "../content/Contact";
import Resume from "../content/Resume";
import Projects from "../content/Projects";
import JobsNow from "../content/projectsPages/JobsNow";

export default props => (
  <div>
    {" "}
    <NavBar toggle={props.toggle} />
    <div className="content">
      <Switch>
        <Route exact path="/" component={() => <About />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/projects" component={() => <Projects />} />
        <Route exact path="/WebDev" component={() => <WebDev />} />
        <Route exact path="/Video" component={() => <Video />} />
        <Route exact path="/Design" component={() => <Design />} />
        <Route exact path="/Motion" component={() => <Motion />} />
        <Route exact path="/Resume" component={() => <Resume />} />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route exact path="/contact" component={() => <Contact />} />

        {/* projects pages */}
        <Route exact path="/jobs-now" component={() => <JobsNow />} />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route exact path="/Page-1" component={() => "Page-1"} />
        <Route exact path="/Page-2" component={() => "Page-2"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "page-2"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
      </Switch>
    </div>
  </div>
);
