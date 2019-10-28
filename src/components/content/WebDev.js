import React from "react";
import posted from "../../images/posted-logo.png";
import {
  Card,
  Row,
  Col,
  Media,
  Container,
  Jumbotron,
  Button
} from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

export default function WebDev() {
  return (
    <section class="blog-me pt-100 pb-100" id="blog">
      <div>
        <div class="row"></div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <div class="blog-img">
                <img
                  src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg"
                  alt=""
                />
                <div class="post-category">
                  <a href="#">WebDev</a>
                </div>
              </div>
              <div class="blog-content">
                <div class="blog-title">
                  <h4>
                    <a href="#">Jobs Now</a>
                  </h4>
                  <div class="meta">
                    <ul>
                      <li>04 June 2018</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque.
                </p>
                <Link to="/jobs-now" class="box_btn">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <div class="blog-img">
                <img
                  src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog2.jpg"
                  alt=""
                />
                <div class="post-category">
                  <a href="#">WebDev</a>
                </div>
              </div>
              <div class="blog-content">
                <div class="blog-title">
                  <h4>
                    <a href="#">NYX News</a>
                  </h4>
                  <div class="meta">
                    <ul>
                      <li>23 June 2018</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque.
                </p>
                <a href="#" class="box_btn">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-blog">
              <div class="blog-img">
                <img
                  src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog3.jpg"
                  alt=""
                />
                <div class="post-category">
                  <a href="#">WebDev</a>
                </div>
              </div>
              <div class="blog-content">
                <div class="blog-title">
                  <h4>
                    <a href="#">Mobilies UX Treend</a>
                  </h4>
                  <div class="meta">
                    <ul>
                      <li>31 July 2018</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque.
                </p>
                <a href="#" class="box_btn">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
