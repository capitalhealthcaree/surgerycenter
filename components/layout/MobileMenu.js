import Link from "next/link";
import { useState } from "react";
export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
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
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="active menu-item-has-children">
          <Link href="#">Medical Procedures</Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li>
              <Link href="/anesthesiology/">Anesthesiology</Link>
            </li>
            <li>
              <Link href="/general-surgery/">General Surgery</Link>
            </li>
            <li>
              <Link href="/orthopedic-surgery/">Orthopedic Surgery</Link>
            </li>
            <li>
              <Link href="/otorhinolaryngology-ent/">
                Otorhinolaryngology (ENT)
              </Link>
            </li>
            <li>
              <Link href="/pain-management/">Pain Management</Link>
            </li>
            {/* <li><Link href="/">Anesthesiology</Link></li>
                <li><Link href="/index-2">General Surgery</Link></li>
                <li><Link href="/index-3">Orthopedic Surgery</Link></li>
                <li><Link href="/index-4">Otorhinolaryngology (ENT)</Link></li>
                <li><Link href="/index-5">Pain Management</Link></li> */}
          </ul>
          <div
            className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleToggle(1)}
          >
            <span className="fas fa-angle-down" />
          </div>
        </li>
        <li>
          <Link href="/contact">Patient Resources</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Blogs</Link>
        </li>
      </ul>
    </>
  );
}
