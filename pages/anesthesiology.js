import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";

const faqs = [
  {
    question1: "What does anesthesia involve?",
    answer1:
      "Anesthesia involves administering medications to ensure pain-free surgery. It's tailored to your health and procedure, ensuring safety and comfort throughout the surgical process.",
  },
  {
    question2: "How is anesthesia chosen?",
    answer2:
      "We select anesthesia based on your medical history, surgery type, and personal health. Our goal is to provide the safest, most effective pain management for you.",
  },
  {
    question3: "Is post-surgery care provided?",
    answer3:
      "Yes, we provide comprehensive post-surgery care, focusing on pain management and your overall comfort. Our team ensures a smooth and comfortable recovery.",
  },
];

export default function PainManagement() {
  return (
    <>
      <Layout breadcrumbTitle="Anesthesiology">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">Anesthesia Care Excellence</h2>
                      <p>
                        Our clinic's anesthesiology team excels in patient care,
                        prioritizing safety and comfort at every stage. Our
                        anesthesiologists, highly skilled in evaluating and
                        monitoring patients, provide personalized anesthesia
                        based on individual needs and procedure specifics.
                      </p>
                      <div className="services-details-thumb-two">
                        <img src="/assets/img/anesthesiology.jpg" alt="" />
                      </div>
                      <p>
                        We ensure a pain-free experience, adapting to your
                        body's response and the surgery's duration. Before
                        surgery, we conduct comprehensive consultations to
                        understand your health and address concerns. During the
                        procedure, our continuous presence guarantees your
                        well-being. Post-surgery, we focus on your comfortable
                        recovery, overseeing pain management. Trust in our
                        dedicated professionals for a seamless, worry-free
                        surgical experience where your safety is our top
                        priority.
                      </p>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Pre-Surgery Consultation</h4>
                        <p>
                          Prior to surgery, our anesthesiologists conduct
                          thorough consultations. This process involves
                          discussing your medical history, understanding
                          specific needs, and explaining anesthesia methods.
                          It's an opportunity to address your questions and
                          concerns, ensuring a clear, informed pathway to your
                          successful surgery and recovery.
                        </p>
                      </div>
                      <div className="sd-inner-wrap-five">
                        <div className="row">
                          <div className="col-100">
                            <div className="right-side-content">
                              <h4 className="title-two">
                                Ensuring Post-Surgery Comfort
                              </h4>
                              <ul className="list-wrap">
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Continued care post-surgery with dedicated
                                  monitoring and effective management of any
                                  discomfort experienced.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Our team is committed to a smooth anesthesia
                                  transition, offering personalized attention
                                  and support.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Prioritizing patient care to ensure a
                                  comfortable, safe, and supportive
                                  post-surgical healing process.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Focused on your comfort and well-being during
                                  the critical recovery phase post-procedure.
                                </li>
                              </ul>
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
                  <ProcedureDetailPage slug={"anesthesiology"} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
