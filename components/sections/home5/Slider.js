import Link from "next/link";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  dots: false,
  fade: true,
  arrows: false,
  responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
};

export default function MainSlider() {
  return (
    <>
      <section className="slider-area">
        <Slider {...settings} className="slider-active">
          <section
            className="banner-area-four banner-bg-four"
            data-background="/assets/img/banner/banner_bg_1.jpg"
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
          </section>{" "}
          <section
            className="banner-area-four banner-bg-four"
            data-background="/assets/img/banner/banner_bg_2.jpg"
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
                      Pioneers in Anesthesiology
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
          </section>{" "}
          <section
            className="banner-area-four banner-bg-four"
            data-background="/assets/img/banner/banner_bg_3.jpg"
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
                      Advanced Orthopedic Surgery
                    </span>
                    <h2
                      className="title"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      style={{ color: "white" }}
                    >
                      Revolutionizing Joint and Bone Care
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={400}
                      style={{ color: "white" }}
                    >
                      {" "}
                      Offering state-of-the-art orthopedic treatments and
                      surgeries to restore mobility and enhance quality of life.
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
          <section
            className="banner-area-four banner-bg-four"
            data-background="/assets/img/banner/banner_bg_4.jpg"
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
                      Expertise in Pain Management
                    </span>
                    <h2
                      className="title"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      style={{ color: "white" }}
                    >
                      Personalized Pain Relief Solutions
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={400}
                      style={{ color: "white" }}
                    >
                      {" "}
                      At our center, we specialize in innovative pain management
                      techniques. Our approach is tailored to each patient,
                      utilizing the latest advancements in pain relief
                      treatments.
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
        </Slider>
      </section>
    </>
  );
}
