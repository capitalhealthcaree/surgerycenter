import Blog from "@/components/sections/home5/Blog";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Layout breadcrumbTitle="About Us">
        <div>
          <section
            className=""
            style={{ paddingBottom: "50px", paddingTop: "50px" }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                  <div className="about-img-seven-wrap">
                    <img
                      src="/assets/img/aboutus/right-one.jpg"
                      alt=""
                      data-aos="fade-right"
                      data-aos-delay={0}
                    />
                    <img
                      src="/assets/img/aboutus/right-two.jpg"
                      alt=""
                      data-aos="fade-up"
                      data-aos-delay={300}
                    />
                    <img
                      src="/assets/img/images/inner_about_shape01.png"
                      alt=""
                      className="shape"
                      data-aos="zoom-in"
                      data-aos-delay={500}
                    />
                    <div
                      className="experience-wrap"
                      data-aos="fade-left"
                      data-aos-delay={0}
                    >
                      <h2 className="title">05</h2>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content-seven">
                    <div className="section-title mb-30">
                      <span className="sub-title">About Us</span>
                      <h2 className="title" style={{ fontSize: "39px" }}>
                        Compassionate Surgical Care
                      </h2>
                    </div>
                    <p>
                      At Encore Surgery Center, we prioritize your comfort and
                      well-being. Our dedicated team offers superior care,
                      ensuring a stress-free surgical experience. Utilizing the
                      latest medical technology and high-standard protocols, we
                      are committed to making your procedure successful and your
                      experience as comfortable as possible.
                    </p>

                    <p className="info-two">
                      Understanding the emotional impact of surgery, our
                      compassionate staff provides unwavering support throughout
                      your journey. Our expert physicians are devoted to your
                      care, focusing on achieving long-term results that meet
                      your expectations. We're honored to be trusted with your
                      health and are dedicated to delivering outstanding care at
                      every step.
                    </p>
                    <Link href="/medical-procedures/" className="btn btn-three">
                      Our Medical Procedures
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Blog/>
        </div>
      </Layout>
    </>
  );
}
