import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";

const faqs = [
  {
    question1: "What are Corticosteroid Injections?",
    answer1:
      "Corticosteroid injections are anti-inflammatory treatments used for conditions like arthritis and sciatica, providing targeted pain relief.",
  },
  {
    question2: "How Do Nerve Blocks Work?",
    answer2:
      "Nerve blocks involve injecting anesthesia near specific nerves to temporarily block pain signals, providing relief.",
  },
  {
    question3: "Are These Treatments Safe?",
    answer3:
      "While generally safe, these treatments have risks like infection or nerve damage, and are performed under medical supervision.",
  },
];

export default function PainManagement() {
  return (
    <>
      <Layout headerStyle={6} breadcrumbTitle="Pain Management">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">
                        Effective Pain Management Strategies
                      </h2>
                      <p>
                        Pain management is essential in healthcare, aiming to
                        reduce discomfort and improve the quality of life for
                        individuals with various conditions. Key to this are
                        image-guided injections and nerve blocks, offering
                        targeted relief and playing a diagnostic role in
                        pinpointing pain sources. Corticosteroid injections are
                        a prime example, used to address conditions like joint
                        pain, arthritis, and sciatica.
                      </p>
                      <div className="services-details-thumb-two">
                        <img
                          src="/assets/img/pain-management/main.jpg"
                          alt=""
                        />
                      </div>
                      <p>
                        These anti-inflammatory agents are administered directly
                        to affected areas, utilizing advanced technology for
                        precision, ensuring effective treatment of inflammation
                        and irritation. Nerve blocks, another significant
                        approach, are particularly effective for pain resulting
                        from inflammatory conditions and nerve compression
                        syndromes. By interrupting pain signals from specific
                        nerves, they provide considerable relief. Pain
                        management specialists integrate these techniques to
                        help patients resume normal activities and enhance their
                        overall well-being. The focus is on a balance between
                        treatment efficacy, safety, and addressing individual
                        patient needs, guaranteeing personalized and effective
                        care for each person's unique health situation.
                      </p>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Corticosteroid injections</h4>
                        <p>
                          Corticosteroid injections, often known as steroid
                          injections, are a pivotal treatment in managing
                          various conditions. Utilizing precise-placement
                          technology, these injections deliver anti-inflammatory
                          medication directly into affected areas, effectively
                          treating symptoms. They are particularly beneficial
                          for conditions like joint pain, arthritis, sciatica,
                          and Inflammatory Bowel Disease (IBD), providing
                          significant relief and improving patients' quality of
                          life.This includes:
                        </p>
                      </div>
                      <div className="industrial-working-wrap">
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/pain-management/joint-pain.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Joint Pain</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/pain-management/arthritis.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Arthritis</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/pain-management/sciatica.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>{" "}
                            <div className="d-flex justify-content-center">
                              <h4>Sciatica</h4>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="services-thumb-three">
                              <img
                                src="/assets/img/pain-management/ibs.jpg"
                                alt=""
                                style={{ marginBottom: "10px" }}
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <h4>Inflammatory Bowel Disease</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sd-inner-wrap-five">
                        <div className="row">
                          <div className="col-100">
                            <div className="right-side-content">
                              <h4 className="title-two">
                                Nerve Blocks for Pain
                              </h4>
                              <p>
                                Nerve blocks provide targeted pain relief by
                                blocking signals from specific nerves,
                                particularly useful in conditions with nerve
                                compression or inflammation. This method
                                significantly reduces pain, improving patients'
                                ability to perform activities. Besides its
                                therapeutic benefits, nerve blocks serve a
                                diagnostic purpose, aiding in identifying the
                                specific nerves responsible for the pain.
                              </p>
                              <ul className="list-wrap">
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Directly block pain signals from particular
                                  nerve groups, providing focused relief.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Especially effective in conditions where
                                  nerves are compressed or inflamed.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Generally a safe, outpatient procedure with
                                  minimal recovery time.
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Offers short-term pain relief, often used
                                  alongside other treatments.
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
                  <ProcedureDetailPage slug={"pain-management"} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
