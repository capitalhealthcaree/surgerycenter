import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section
        className="banner-area-four banner-bg-four"
        data-background="/assets/img/banner/banner_bg_1.jpg"
        style={{ opacity: "" }}
      >
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="banner-img-four text-end">
                {/* <img src="/assets/img/banner/h4_banner_img.png" alt="" data-aos="fade-left" data-aos-delay={400} /> */}
              </div>
            </div>{" "}
            <div className="col-xl-5 col-lg-6">
              <div className="banner-content-four">
                <span
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  Excellence in Surgery
                </span>
                <h2
                  className="title"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  style={{ color: "white" }}
                >
                  Ensuring Comfort and Safety
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay={400}
                  style={{ color: "white" }}
                >
                  {" "}
                  Specializing in advanced anesthetic techniques for all
                  surgical procedures, ensuring patient comfort and optimal
                  outcomes.
                </p>
                <Link
                  href="/appointment/"
                  className="btn btn-three"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Reserve Your Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap-four">
          <img src="/assets/img/banner/h4_banner_shape01.png" alt="" />
        </div>
      </section>
    </>
  );
}
