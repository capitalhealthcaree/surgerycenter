import Link from "next/link";

export default function About() {
  return (
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
                  src="/assets/img/aboutus/right-two.png"
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay={150}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-seven">
                <div className="section-title mb-30">
                  <span className="sub-title">About Us</span>
                  <h2
                    className="title"
                    style={{ color: "black", fontSize: "39px" }}
                  >
                    Compassionate Surgical Care
                  </h2>
                </div>
                <p style={{ color: "black", fontSize: "16px" }}>
                  At Encore Surgery Center, we prioritize your comfort and
                  well-being. Our dedicated team offers superior care, ensuring
                  a stress-free surgical experience. Utilizing the latest
                  medical technology and high-standard protocols, we are
                  committed to making your procedure successful and your
                  experience as comfortable as possible.
                </p>

                <p
                  className="info-two"
                  style={{ color: "black", fontSize: "16px" }}
                >
                  Understanding the emotional impact of surgery, our
                  compassionate staff provides unwavering support throughout
                  your journey. Our expert physicians are devoted to your care,
                  focusing on achieving long-term results that meet your
                  expectations. We're honored to be trusted with your health and
                  are dedicated to delivering outstanding care at every step.
                </p>
                <Link href="/medical-procedures/" className="btn btn-three">
                  Our Medical Procedures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
