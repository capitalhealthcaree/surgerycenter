import Contact from "@/components/sections/home5/Contact";
import Layout from "@/components/layout/Layout";

export default function PreRegister() {
  return (
    <>
      <Layout breadcrumbTitle="Pre Register">
        <div>
          <section style={{ paddingBottom: "50px", paddingTop: "50px" }}>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="about-content-seven">
                    <p>
                      To initiate the pre-surgical assessment, we request that
                      you complete and submit the provided forms as
                      directed.After you have filled out these forms, our
                      Pre-Surgical Assessment nurse will review the information
                      and proceed with the necessary preparations for your
                      surgery.
                    </p>
                    <p>
                      Ensure you have the following details at hand before
                      beginning your pre-registration process:
                    </p>
                  </div>
                  <div className="sd-inner-wrap-five">
                    <div className="row">
                      <div className="col-100">
                        <div className="right-side-content">
                          <ul className="list-wrap">
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              A list of all medications you are taking, their
                              dosage and frequency.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              Your health insurance information.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              The names, addresses and phone numbers of your
                              physicians.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              A list of all previous surgical procedures.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Contact />
        </div>
      </Layout>
    </>
  );
}
