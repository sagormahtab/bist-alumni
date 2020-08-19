import React from "react";
import communities from '../../images/04.png';
import falgunImg from '../../images/probable-23.jpg';
import pujaImg from '../../images/probable-26.jpg';

const BlogArea = () => {
  return (
    <section id="blog-area" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="section-title">
              <h2>Recent News</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <article class="single-blog-post">
              <figure class="blog-thumb">
                <div class="blog-thumbnail">
                  <img
                    src={communities}
                    alt="Blog"
                    class="img-fluid"
                  />
                </div>
                <figcaption class="blog-meta clearfix">
                  <a href="single-blog.html" class="author">
                    <div class="author-pic">
                      {/* <img src="assets/img/blog/author.jpg" alt="Author" /> */}
                      <i class="fa fa-user-circle" style={{color: 'white', fontSize: '20px'}}></i>
                    </div>
                    <div class="author-info">
                      <h5>Daney williams</h5>
                      <p>2 hours Ago</p>
                    </div>
                  </a>
                  <div class="like-comm pull-right">
                    <a href="/">
                      <i class="fa fa-comment-o"></i>77
                    </a>
                    <a href="/">
                      <i class="fa fa-heart-o"></i>12
                    </a>
                  </div>
                </figcaption>
              </figure>

              <div class="blog-content">
                <h3>
                  <a href="single-blog.html">
                    BIST Alumni registration is going on
                  </a>
                </h3>
                <p>
                  This is a happy moment for our association, we are happy to
                  organize this type events which are beneficial for BIST
                </p>
                <a href="single-blog.html" class="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>

          <div class="col-lg-4 col-md-6">
            <article class="single-blog-post">
              <figure class="blog-thumb">
                <div class="blog-thumbnail">
                  <img
                    src={falgunImg}
                    alt="Blog"
                    class="img-fluid"
                  />
                </div>
                <figcaption class="blog-meta clearfix">
                  <a href="single-blog.html" class="author">
                    <div class="author-pic">
                      {/* <img src="assets/img/blog/author.jpg" alt="Author" /> */}
                      <i class="fa fa-user-circle" style={{color: 'white', fontSize: '20px'}}></i>
                    </div>
                    <div class="author-info">
                      <h5>Myra Hindley</h5>
                      <p>1 Day Ago</p>
                    </div>
                  </a>
                  <div class="like-comm pull-right">
                    <a href="/">
                      <i class="fa fa-comment-o"></i>77
                    </a>
                    <a href="/">
                      <i class="fa fa-heart-o"></i>12
                    </a>
                  </div>
                </figcaption>
              </figure>

              <div class="blog-content">
                <h3>
                  <a href="single-blog.html">
                    BIST organized Pahela Falgun program in its premises
                  </a>
                </h3>
                <p>
                  This is a happy moment for our association, we are happy to
                  organize this type events which are beneficial for BIST
                </p>
                <a href="single-blog.html" class="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>

          <div class="col-lg-4 col-md-6">
            <article class="single-blog-post">
              <figure class="blog-thumb">
                <div class="blog-thumbnail">
                  <img
                    src={pujaImg}
                    alt="Blog"
                    class="img-fluid"
                  />
                </div>
                <figcaption class="blog-meta clearfix">
                  <a href="single-blog.html" class="author">
                    <div class="author-pic">
                      {/* <img src="assets/img/blog/author.jpg" alt="Author" /> */}
                      <i class="fa fa-user-circle" style={{color: 'white', fontSize: '20px'}}></i>
                    </div>
                    <div class="author-info">
                      <h5>Aileen Wuornos</h5>
                      <p>3 mins Ago</p>
                    </div>
                  </a>
                  <div class="like-comm pull-right">
                    <a href="/">
                      <i class="fa fa-comment-o"></i>77
                    </a>
                    <a href="/">
                      <i class="fa fa-heart-o"></i>12
                    </a>
                  </div>
                </figcaption>
              </figure>

              <div class="blog-content">
                <h3>
                  <a href="single-blog.html">
                    BIST organized Puja for the students following Hinduism
                  </a>
                </h3>
                <p>
                  This is a happy moment for our association, we are happy to
                  organize this type events which are beneficial for BIST
                </p>
                <a href="single-blog.html" class="btn btn-brand">
                  More
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
