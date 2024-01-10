import Contact from "@/components/sections/home5/Contact";
import Layout from "@/components/layout/Layout";

export default function PreRegister() {
  return (
    <>
      <Layout breadcrumbTitle="More Information">
        <div>
          <section
            className=""
            style={{ paddingBottom: "50px", paddingTop: "50px" }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
                  <div className="about-content-seven">
                    <p>
                      Having completed your pre-registration and gone through
                      our recommendations for your procedure, please take some
                      time to look over our other informational materials.
                    </p>
                    <h4 className="title-two">Your Health, Our Commitment</h4>
                    <p>
                      At{" "}
                      <b className="text-dark">Advanced Care Surgery Center</b>,
                      the safety and security of our patients, their families,
                      caregivers, and visitors is paramount. We are committed to
                      maintaining a COVID-19 safe environment through constant
                      vigilance and adherence to standard protocols. Here is a
                      list of our measures to ensure a safe and healthy setting
                      for everyone visiting our facility.
                    </p>
                    <h4 className="title-two">Enhanced screening:</h4>
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
                              We conduct daily COVID-19 screenings for everyone
                              entering our facility, which includes checking
                              temperatures and monitoring for signs and
                              symptoms.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              All individuals entering our facility must wear a
                              mask. You are encouraged to bring and wear your
                              own mask for your visit. If you don't have one, we
                              will provide masks for you and your visitor.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              Our facility is equipped with hand sanitizing and
                              handwashing stations for your use.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              Items that are commonly touched, like magazines,
                              toys, vending machines, coffee, and snacks, have
                              been removed from our facility.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              We've intensified the cleaning routine for patient
                              rooms, public and common spaces, restrooms,
                              waiting areas, and surfaces frequently touched.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              We adhere to rigorous control measures,
                              encompassing equipment sterilization, thorough
                              cleaning and disinfecting of patient care areas,
                              and comprehensive terminal cleaning at the end of
                              each day or shift.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              The disinfectants we use are capable of
                              eliminating the virus responsible for COVID-19 and
                              other infectious agents.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              We maintain a sufficient stock of personal
                              protective equipment (PPE) for all our staff and
                              physicians, aiding in the prevention of COVID-19
                              transmission among you and our team.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              We strictly follow and implement social distancing
                              guidelines, including clearly marked lobbies and
                              waiting areas to guide you on where to stand and
                              sit.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              In an effort to minimize exposure, we are
                              presently restricting visitors to one per patient.
                              However, for pediatric patients, we allow up to
                              two visitors at the facility.
                            </li>
                            <li>
                              <img
                                src="/assets/img/icons/check_icon.svg"
                                alt=""
                              />
                              We adhere to the guidelines set by the Centers for
                              Disease Control and Prevention (CDC), Centers for
                              Medicare & Medicaid Services (CMS), and relevant
                              state authorities for conducting surgeries in a
                              COVID-19 safe manner.
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
