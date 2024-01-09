import { useState } from "react";
import Contact from "@/components/sections/home5/Contact";
import Layout from "@/components/layout/Layout";

export default function PreRegister({ data = [] }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={6} breadcrumbTitle="FAQs and What You Need to Know">
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
                  <div className="company-benefit-wrap">
                    <div className="accordion-wrap-three">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(1)}
                          >
                            <button
                              className={
                                isActive.key == 1
                                  ? "accordion-button"
                                  : "accordion-button collapsed"
                              }
                              type="button"
                            >
                              When Do I Need to Contact my Physician?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className={
                              isActive.key == 1
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                There's a possibility that you might be
                                pregnant.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                You are unsure of your scheduled time of
                                arrival.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                They are unaware of conditions such as heart
                                issues, kidney or liver failure, diabetes, or
                                latex allergies.
                              </p>

                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                You haven't discussed with your physician or
                                surgeon your regular medications and which ones,
                                if any, to skip on surgery day.
                              </p>
                              <p>
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Since your last visit to your physician and
                                before the day of your scheduled procedure, you
                                have noticed any changes in your health. This
                                includes symptoms like a temperature, cough,
                                rash, cold, or any overall sense of feeling
                                unwell.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(2)}
                          >
                            <button
                              className={
                                isActive.key == 2
                                  ? "accordion-button"
                                  : "accordion-button collapsed"
                              }
                              type="button"
                            >
                              Are There Any Steps to Take the Evening Prior to
                              Your Arrival?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className={
                              isActive.key == 2
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Please refrain from smoking after midnight on
                                the day of your surgery.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                To avoid complications from undigested food in
                                the stomach, which could delay your procedure,
                                please refrain from eating anything (including
                                gum, mints, or hard candy) after midnight on the
                                day of your surgery.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(3)}
                          >
                            <button
                              className={
                                isActive.key == 3
                                  ? "accordion-button"
                                  : "accordion-button collapsed"
                              }
                              type="button"
                            >
                              What About the Morning of Your Surgery?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className={
                              isActive.key == 3
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Ensure you shower or take a bath and brush your
                                teeth.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Choose to wear clothing that is loose and
                                comfortable, which can easily fit over a
                                bandage, cast, or any kind of dressing.
                              </p>

                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Please take off any makeup, jewelry, and contact
                                lenses. If you need contacts, bring along your
                                contact case to use during your procedure.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(4)}
                          >
                            <button
                              className={
                                isActive.key == 4
                                  ? "accordion-button"
                                  : "accordion-button collapsed"
                              }
                              type="button"
                            >
                              Is There Anything I Should Bring with Me on the
                              Day of My Surgery?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className={
                              isActive.key == 4
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Please bring all insurance cards with you.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                If you need insulin, please bring your insulin
                                bottle and syringes.
                              </p>{" "}
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Bring along a copy of your consent forms and an
                                Advance Directive, if you possess one.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Ensure you bring a government-issued photo
                                identification, like a driver's license or
                                passport.
                              </p>
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                To adhere to health protocols and space
                                limitations, please restrict the number of
                                individuals accompanying you to the center.
                              </p>{" "}
                              <p>
                                {" "}
                                <img
                                  src="/assets/img/icons/check_icon.svg"
                                  alt=""
                                  className="p-2"
                                />
                                Ensure you are accompanied by a responsible
                                adult to the center, who can also receive
                                discharge instructions and drive you home. It's
                                advisable to have someone stay with you during
                                the first 24 hours after your surgery.
                              </p>
                            </div>
                          </div>
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
