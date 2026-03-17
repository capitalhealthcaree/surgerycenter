import Layout from "@/components/layout/Layout";
import ShortProfile from "@/components/doctor/ShortProfile";
import Education from "@/components/doctor/Education";
import Appointment from "@/components/sections/home/Appointment";

export default function ChristopherCreighton() {
  const profileData = {
    name: "Christopher P Creighton MD",
    paragraph:
      "Dr. Christopher Creighton, is a highly respected pain doctor in Dallas with nearly 35 years of medical experience in anesthesiology, internal medicine, and pathology. At Premier Pain Centers, he provides advanced interventional treatments designed to restore comfort, improve mobility, and enhance quality of life for patients suffering from chronic pain. As a trusted pain specialist in Dallas, Dr. Creighton focuses on accurate diagnosis and personalized care. His approach blends medical innovation with precision, helping each patient receive the most effective treatment for their unique pain condition.",
    img: "/assets/img/team/dr-christopher-creighton.png",
    link: "/dr-christopher-creighton",
  };

  const educationData = {
    title: "Professional Background and Expertise",
    paragraph1:
      "Dr. Creighton previously served as Assistant Professor of Anesthesiology at West Virginia University School of Medicine, where he co-directed both the Center for Pain Management and its Pain Fellowship Program. Earlier in his career, he was Chairman of the Department of Anesthesiology at Morris Hospital in Morris, Illinois. At our leading pain clinic in Dallas, Dr. Creighton applies a comprehensive and patient-focused approach.",
    paragraph2:
      "He performs a broad range of interventional pain management techniques to treat complex conditions such as spinal pain, nerve pain, back pain, and joint pain, making him a preferred choice for anyone looking for a spine pain doctor near me. Outside of medicine, Christopher P. Creighton MD enjoys a variety of activities including scuba diving, sailing, cycling, hiking, woodworking, and gardening. He and his wife of 35 years are proud parents of two accomplished children, a daughter in computer science and a son who works as an engineer.",
  };

  return (
    <Layout breadcrumbTitle="Interventional Pain Management Physician">
      <ShortProfile profileData={profileData} />
      <Education educationData={educationData} />
      <Appointment />
    </Layout>
  );
}
