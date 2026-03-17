import Layout from "@/components/layout/Layout";
import ShortProfile from "@/components/doctor/ShortProfile";
import Education from "@/components/doctor/Education";
import Leadership from "@/components/doctor/Leadership";
import WhyChoose from "@/components/doctor/WhyChoose";
import Appointment from "@/components/sections/home/Appointment";

export default function RaoKAli() {
  const profileData = {
    name: "Rao K. Ali MD",
    paragraph:
      "Dr. Rao Ali is a dual fellowship-trained, double board-certified Physiatrist and Interventional Pain Management physician providing expert care as a leading Pain Physician in Dallas and nearby areas including Richardson, Desoto, Gun Barrel City, Waxahachie, Cleburne, Plano, Ennis, Mesquite, Kaufman, and other parts of North Texas. With over eight years of experience running a state-of-the-art interventional pain management practice, Dr. Ali has become one of the most respected Dallas pain doctors near me, known for treating complex spine and nerve pain with precision and compassion.",
    img: "/assets/img/team/rao-k-ali.png",
    link: "/rao-k-ali-md-surgical-specialist-in-dallas",
  };

  const educationData = {
    title: "Education & Specialized Training",
    paragraph1:
      "Dr. Ali completed his medical school in 2000, followed by a General Surgery Internship in 2006, and a Physical Medicine and Rehabilitation Residency in 2009 at the prestigious Montefiore Medical Center, NY. He later completed two advanced fellowships, Interventional Spine Fellowship (2010) and Anesthesia-based Pain Medicine Fellowship (2011) at Case Western University Hospitals.",
    paragraph2:
      "His training and experience make him a top-rated pain doctor in Dallas and one of the most trusted pain management doctors near me for long-term pain relief and minimally invasive care.",
  };

  const whyChoose = {
    heading: "Why Choose Dr. Rao Ali",
    desc: "Patients trust Dr. Rao K. Ali for his exceptional skill, compassion, and commitment to helping them live pain-free. With extensive experience in interventional pain management, he provides innovative, minimally invasive treatments that target the source of pain and promote lasting recovery.",
    points: [
      "Board-Certified in Pain Medicine and Anesthesiology",
      "Fellowship-Trained in Interventional Pain Management",
      "Specialist in Advanced Spine and Joint Procedures",
      "Trusted Pain Doctor in Dallas & North Texas",
      "Dedicated to Compassionate, Patient-Focused Care",
    ],
    image:
      "http://res.cloudinary.com/dngmflrpx/image/upload/v1767721891/doctors/o4whbcjqlgr9y8msuqwc.jpg",
  };
  return (
    <Layout breadcrumbTitle="Interventional Pain Management Physician">
      <ShortProfile profileData={profileData} />
      <Education educationData={educationData} />
      <Leadership />
      <WhyChoose whyChoose={whyChoose} />
      <Appointment />
    </Layout>
  );
}
