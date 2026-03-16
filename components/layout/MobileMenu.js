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
        <li>
          <Link href="/conditions-we-treat">Conditions We Treat</Link>
        </li>
        <li>
          <Link href="/surgical-procedures">Surgical Procedures</Link>
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
