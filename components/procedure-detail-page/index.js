import Link from "next/link";

export default function MedicalProceduresSideBar({ slug }) {
  return (
    <>
      <aside className="services-sidebar">
        <div className="services-cat-list services-cat-list-two mb-30">
          <ul className="list-wrap">
            <li className={`${"anesthesiology" === slug ? "active" : ""}`}>
              <Link href="/anesthesiology/">
                Anesthesiology <i className="flaticon-right-arrow" />
              </Link>
            </li>
            <li className={`${"general-surgery" === slug ? "active" : ""}`}>
              <Link href="/general-surgery/">
                General Surgery <i className="flaticon-right-arrow" />
              </Link>
            </li>
            <li className={`${"orthopedic-surgery" === slug ? "active" : ""}`}>
              <Link href="/orthopedic-surgery/">
                Orthopedic Surgery <i className="flaticon-right-arrow" />
              </Link>
            </li>
            <li className={`${"otorhinolaryngology-ent" === slug ? "active" : ""}`}>
              <Link href="/otorhinolaryngology-ent/">
                Otorhinolaryngology (ENT) <i className="flaticon-right-arrow" />
              </Link>
            </li>
            <li className={`${"pain-management" === slug ? "active" : ""}`}>
              <Link href="/pain-management/">
                Pain Management <i className="flaticon-right-arrow" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="services-widget">
          <h4 className="sw-title">Reserve Your Slot</h4>
          <div className="services-widget-form">
            <form action="#">
              <div className="form-grp">
                <input type="text" placeholder="Name*" />
              </div>
              <div className="form-grp">
                <input type="email" placeholder="Email*" />
              </div>
              <div className="form-grp">
                <input type="email" placeholder="Phone*" />
              </div>
              <div className="form-grp">
                <input type="email" placeholder="DOB*" />
              </div>
              <div className="form-grp">
                <textarea name="message" placeholder="Message*" />
              </div>

              <button type="submit" className="submit-btn">
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="services-widget services-sidebar-contact">
          <h4 className="title">If You Need Any Help Contact With Us</h4>
          <Link href="tel:0123456789">
            <i className="flaticon-phone-call" /> +91 705 2101 786
          </Link>
        </div>
      </aside>
    </>
  );
}
