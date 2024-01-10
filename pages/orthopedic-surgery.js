import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";
const faqs = [
  {
    question1: "What is orthopedic surgery?",
    answer1:
      "Orthopedic surgery focuses on diagnosing and treating conditions related to the musculoskeletal system, including bones, joints, and muscles.",
  },
  {
    question2: "Do you offer joint replacements?",
    answer2:
      "Yes, we offer joint replacement surgeries, including hip, knee, and shoulder replacements, using the latest techniques for optimal results.",
  },
  {
    question3: "Is recovery time long?",
    answer3:
      "Recovery times vary, but our advanced surgical techniques and comprehensive rehabilitation plans aim to expedite and ease the recovery process.",
  },
];

export default function PainManagement() {
  return (
    <>
      <Layout breadcrumbTitle="Orthopedic Surgery">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">Orthopedic Surgical Precision</h2>
                      <p>
                        Orthopedic surgery at our facility encompasses a
                        comprehensive range of procedures targeting the
                        musculoskeletal system. From treating simple fractures
                        to performing complex joint replacements, our expertise
                        covers major areas like the spine, hand, hip and knee,
                        foot and ankle, and shoulder and elbow.
                      </p>
                      <div className="services-details-thumb-two">
                        <img
                          src="/assets/img/orthopedic-surgery/main.jpg"
                          alt=""
                        />
                      </div>
                      <p>
                        We specialize in various advanced techniques such as
                        arthroscopy, meniscectomy, decompression, and release
                        procedures. Our team is equipped with the latest
                        technology and skills to address a variety of orthopedic
                        conditions, ensuring precision and care in each
                        treatment. We focus on restoring functionality and
                        mobility, providing personalized care that caters to
                        each patient’s specific orthopedic needs.
                      </p>
                      <div className="industrial-working-wrap">
                        <p>
                          This includes everything from broken bones to joint
                          replacement in the following major areas:
                        </p>
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/orthopedic-surgery/spine.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Spine</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/orthopedic-surgery/hand.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Hand</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/orthopedic-surgery/knee.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Hip and knee</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/orthopedic-surgery/foot.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Foot and ankle</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/orthopedic-surgery/elbow.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Shoulder and Elbow</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">
                          Comprehensive Orthopedic Care
                        </h4>
                        <p>
                          Our orthopedic services offer comprehensive care, from
                          diagnosis to post-surgery rehabilitation. We address a
                          wide spectrum of musculoskeletal issues, ensuring each
                          patient receives the most effective, personalized
                          treatment for their specific condition, with a focus
                          on long-term health and mobility.
                        </p>
                      </div>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">
                          Advanced Treatment Methods
                        </h4>
                        <p>
                          We utilize advanced orthopedic surgical methods for
                          optimal patient outcomes. Our focus is on minimally
                          invasive techniques, reducing recovery time and
                          enhancing the effectiveness of procedures, from joint
                          repair to spine surgeries, ensuring high-quality care
                          and improved quality of life for our patients.
                        </p>
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
                  <ProcedureDetailPage slug={"orthopedic-surgery"}/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
