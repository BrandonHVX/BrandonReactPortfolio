import React, { Component } from "react";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import bands from "../../images/bta.svg";

const video = {
  zIndex: 9999
};

const styles = {
  width: "100%",
  zIndex: 9999
};

export default class Videos extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      lightboxOpen: false
    };
  }

  render() {
    return (
      <div>
        {this.state.lightboxOpen && (
          <ReactImageVideoLightbox
            data={[
              {
                url: "https://www.youtube.com/embed/f3nICBZHF2Y",
                type: "video",
                altTag: "placeholder video"
              }
            ]}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => {
              this.setState({ lightboxOpen: false });
            }}
          />
        )}

        <section class="blog-me pt-100 pb-100" id="blog">
          <div>
            <div class="row"></div>
            <div class="row">
              <a
                href="#"
                id="bottle"
                onClick={() => {
                  this.setState({ lightboxOpen: true });
                }}
              >
                or
                <div class="col-lg-4 col-md-6">
                  <div class="single-blog" style={{ zIndex: "-5" }}>
                    <div class="blog-img" style={{ zIndex: "-5" }}>
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
                    </div>
                  </div>
                </div>{" "}
              </a>
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
      </div>
    );
  }
}
