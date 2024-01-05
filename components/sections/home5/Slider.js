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
          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg_1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Pioneers in Anesthesiology
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Ensuring Comfort and Safety
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Specializing in advanced anesthetic techniques for all
                      surgical procedures, ensuring patient comfort and optimal
                      outcomes.
                    </p>

                    <Link
                      href="/appointment/"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      Reserve Your Slot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>
          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg_2.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Excellence in General Surgery
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Comprehensive Surgical Care
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Our skilled surgeons provide a wide range of general
                      surgical procedures with precision and care.
                    </p>

                    <Link
                      href="/appointment/"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      Reserve Your Slot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>
          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg_3.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Advanced Orthopedic Surgery
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Revolutionizing Joint and Bone Care
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Offering state-of-the-art orthopedic treatments and
                      surgeries to restore mobility and enhance quality of life.
                    </p>

                    <Link
                      href="/appointment/"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      Reserve Your Slot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>
          <div
            className="single-slider slider-bg"
            data-background="/assets/img/banner/banner_bg_4.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider-content">
                    <span
                      className="sub-title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Expertise in Pain Management
                    </span>
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      Personalized Pain Relief Solutions
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      At our center, we specialize in innovative pain management
                      techniques. Our approach is tailored to each patient,
                      utilizing the latest advancements in pain relief
                      treatments.
                    </p>
                    <Link
                      href="/appointment/"
                      className="btn"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                    >
                      Reserve Your Slot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-shape">
              <img
                src="/assets/img/banner/banner_shape.png"
                alt=""
                data-animation="zoomIn"
                data-delay=".8s"
              />
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
