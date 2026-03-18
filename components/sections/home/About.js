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
                <img src="/assets/img/aboutus/right-one.jpg" />
                <img src="/assets/img/aboutus/right-two.png" />
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
                    Excellence in Advanced Surgery Center and Pain Management
                  </h2>
                </div>
                <p style={{ color: "black", fontSize: "16px" }}>
                  AdvancedCare Surgery Center provides exceptional surgical care
                  with a priority on patient safety, comfort, and well-being.
                  AdvancedCare brings together a team of dedicated surgeons,
                  anesthesiologists, nurses, and support staff to provide
                  advanced medical treatments in a caring and individualized
                  environment. We provide high-quality treatment tailored to
                  each patient’s needs for both routine and complex surgeries.
                  At AdvancedCare Surgery Center, we believe that excellent care
                  should be available.
                </p>

                <p
                  className="info-two"
                  style={{ color: "black", fontSize: "16px" }}
                >
                  Our pre-surgical consultations and care reflect our
                  patient-centric approach. Our dedication to continuous
                  progress and medical advancement enables us to provide our
                  patients with the most advanced therapies and compassionate
                  care, ensuring a speedy recovery and optimal results. Trust
                  AdvancedCare Surgery Center to be your health partner, with
                  every detail geared to improve your surgery and wellness.
                </p>
                <Link href="/appointment" className="btn btn-three">
                  Schedule Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
