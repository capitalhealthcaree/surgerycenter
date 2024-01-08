import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";
const faqs = [
  {
    question1: "What does general surgery cover?",
    answer1:
      "General surgery covers a wide range of procedures, primarily focused on the abdominal area, soft tissues, and organs like the gallbladder and liver.",
  },
  {
    question2: "Is recovery after surgery fast?",
    answer2:
      "Recovery time varies, but our advanced techniques and patient care ensure as quick and smooth a recovery as possible following surgery.",
  },
  {
    question3: "Are surgical consultations available?",
    answer3:
      "Yes, we offer comprehensive consultations to discuss surgical options, procedures, and what to expect, ensuring informed and comfortable decision-making.",
  },
];

export default function PainManagement() {
  return (
    <>
      <Layout headerStyle={6} breadcrumbTitle="General Surgery">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">General Surgery Expertise</h2>
                      <p>
                        General surgery at our clinic encompasses a wide array
                        of procedures primarily focusing on soft tissue
                        surgeries and abdominal organs.
                      </p>
                      <div className="services-details-thumb-two">
                        <img src="/assets/img/general-surgery.jpg" alt="" />
                      </div>
                      <p>
                        Our expert surgeons adeptly handle surgeries ranging
                        from skin lesions and cyst removal to complex procedures
                        involving the bowel, liver, and gallbladder. We
                        specialize in surgeries of the esophagus, stomach, small
                        and large intestines, liver, pancreas, gallbladder,
                        appendix, bile ducts, and thyroid gland when necessary.
                        Our approach combines precision, advanced surgical
                        techniques, and comprehensive pre-and post-operative
                        care. We are dedicated to ensuring optimal outcomes,
                        minimal discomfort, and rapid recovery for our patients,
                        making us a trusted choice for general surgical needs.
                      </p>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Advanced Surgical Care</h4>
                        <p>
                          Our general surgery services focus on advanced care,
                          encompassing a range of abdominal and soft tissue
                          procedures. We offer meticulous attention to detail
                          and patient safety, employing the latest surgical
                          methods to ensure effective and efficient treatment
                          for various conditions requiring surgical
                          intervention.
                        </p>
                      </div>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Patient-Centered Approach</h4>
                        <p>
                          We prioritize patient-centered care in general
                          surgery, offering tailored treatments to meet
                          individual health needs. Our team emphasizes clear
                          communication, compassionate care, and a commitment to
                          patient comfort and satisfaction, ensuring a positive
                          and supportive surgical experience from start to
                          finish.
                        </p>
                      </div>
                      <div className="industrial-working-wrap">
                        <h4 className="title-two">
                          Other specialties under this category include:
                        </h4>
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/urology.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Urology</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/gynecology.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Gynecology</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/Ophthalmology.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Ophthalmology</h4>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/oral-surgery.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Oral & Maxillofacial surgery</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/plastic-surgery.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Plastic, Cosmetic and Reconstructive</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-benefit-wrap">
                        <h4 className="title-two">Any questions find here</h4>

                        <div className="accordion-wrap-three">
                          <Accordion data={faqs} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-29">
                  <ProcedureDetailPage slug={"general-surgery"}/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
