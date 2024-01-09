import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function PatientResources() {
  return (
    <>
      <Layout
        headerStyle={6}
        breadcrumbTitle="Preparing for Surgery
"
      >
        <div>
          <section className="services-details-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-100 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <div className="speed-optimized-wrap">
                        <p>
                          Thank you for selecting{" "}
                          <b className="text-dark">
                            Advanced Care Surgery Center
                          </b>
                          . We are committed to making your stay as comfortable
                          and stress-free as possible. We recognize that surgery
                          day can be daunting and unsettling, but rest assured,
                          our dedicated team is here to ensure everything goes
                          smoothly. To begin, we'll assist you with the
                          pre-registration process, setting the stage for a
                          seamless and reassuring experience.
                        </p>
                      </div>
                      <div className="industrial-working-wrap">
                        <div className="row justify-content-center">
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <Link href="/pre-register/">
                              <div className="services-thumb-three">
                                <img
                                  src="/assets/img/patient-resources/step-1.jpg"
                                  alt=""
                                  style={{ marginBottom: "10px" }}
                                />
                              </div>
                              <div className="d-flex justify-content-center align-items-center flex-column">
                                <h4>Step 1</h4>
                                <p>How Do I Pre-Register?</p>
                              </div>
                            </Link>
                          </div>

                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <Link href="/step-2-faqs-and-what-you-need-to-know/">
                              <div className="services-thumb-three">
                                <img
                                  src="/assets/img/patient-resources/step-2.jpg"
                                  alt=""
                                  style={{ marginBottom: "10px" }}
                                />
                              </div>
                              <div className="d-flex justify-content-center align-items-center flex-column">
                                <h4>Step 2</h4>
                                <p>FAQs and What You Need to Know</p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <Link href="/more-information/">
                              <div className="services-thumb-three">
                                <img
                                  src="/assets/img/patient-resources/step-3.jpg"
                                  alt=""
                                  style={{ marginBottom: "10px" }}
                                />
                              </div>{" "}
                              <div className="d-flex justify-content-center align-items-center flex-column">
                                <h4>Step 3</h4>
                                <p>More Information</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
