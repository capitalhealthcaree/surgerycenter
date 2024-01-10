import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";

const faqs = [
  {
    question1: "What conditions does ENT treat?",
    answer1:
      "ENT treats conditions of the ears, nose, throat, head, neck, including surgical interventions for chronic diseases, infections, and structural issues.",
  },
  {
    question2: "Are ENT surgeries invasive?",
    answer2:
      "Many ENT surgeries are minimally invasive, utilizing advanced techniques for effective treatment with quicker recovery and fewer complications.",
  },
  {
    question3: "Do you offer ENT diagnostics?",
    answer3:
      "Yes, we provide comprehensive diagnostic services for ENT conditions, using the latest technology to accurately identify and assess various disorders.",
  },
];

export default function PainManagement() {
  return (
    <>
      <Layout breadcrumbTitle="Otorhinolaryngology (ENT)">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">ENT Surgical Expertise</h2>
                      <p>
                        Otorhinolaryngology, commonly known as ENT, is a crucial
                        surgical subspecialty focused on head and neck
                        conditions. This field addresses a broad spectrum of
                        issues related to the ears, nose, throat, and related
                        structures.
                      </p>
                      <div className="services-details-thumb-two">
                        <img
                          src="/assets/img/otorhinolaryngology-ent.jpg"
                          alt=""
                        />
                      </div>
                      <p>
                        Our ENT specialists are adept at diagnosing and treating
                        diseases affecting the external, middle, and inner ear,
                        nasal passages, oral cavity, and neck, including thyroid
                        disorders. We offer comprehensive care encompassing
                        preventative measures, accurate diagnostics, and both
                        treatment and chronic care management. Our approach
                        combines advanced surgical techniques with
                        patient-centered care, ensuring effective treatment for
                        a wide range of ENT conditions, from minor ailments to
                        complex disorders.
                      </p>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Comprehensive ENT Care</h4>
                        <p>
                          Our ENT services extend beyond surgery, covering
                          preventative and chronic condition management.
                          Patients benefit from a holistic approach to ENT
                          health, encompassing all aspects of ear, nose, and
                          throat care. We aim to provide both relief and
                          long-term solutions for various ENT-related health
                          issues.
                        </p>
                      </div>
                      <div className="sd-inner-wrap-five">
                        <div className="row">
                          <div className="col-100">
                            <div className="right-side-content">
                              <h4 className="title-two">
                                Innovative ENT Surgical Care
                              </h4>

                              <ul className="list-wrap">
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Prioritizing minimally invasive techniques for
                                  faster patient recovery and enhanced treatment
                                  outcomes.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Specializing in advanced ENT procedures,
                                  employing the latest technology for superior
                                  patient care.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Expertise in complex ear, nose, and throat
                                  surgeries, focusing on detailed, effective
                                  treatments.
                                </li>

                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Our team is committed to excellence,
                                  delivering high-quality care in all ENT
                                  procedures.
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
                  <ProcedureDetailPage slug={"otorhinolaryngology-ent"} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
