import Link from "next/link";

export default function Blog() {
  return (
    <>
      <section className="blog-post-area">
        <div className="blog-bg" data-background="/assets/img/bg/blog_bg.jpg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">Blogs</span>
                <h2 className="title tg-element-title">
                  Read Our Latest Updates
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {[0, 1, 2].map(() => (
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="blog-post-item">
                  <div className="blog-post-thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog_img03.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="blog-post-content">
                    <h2 className="title">
                      <Link href="/blog-details">
                        Meet AutoManage, the best AI management tools
                      </Link>
                    </h2>
                    <p>
                      Everything you need to start building area atching
                      presence for your business.
                    </p>
                    <Link href="/blog-details" className="link-btn">
                      Read More <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <div className="request-btn">
              <Link href="/blogs/" className="btn">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
