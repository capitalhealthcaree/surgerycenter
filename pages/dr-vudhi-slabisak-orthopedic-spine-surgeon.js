import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ShortProfile from "@/components/doctor/ShortProfile";
import SlabisakDoctorProfile from "@/components/doctor/SlabisakDoctorProfile";
import ConditionsAndProcedures from "@/components/doctor/ConditionsAndProcedures";
import Appointment from "@/components/sections/home/Appointment";

export default function ChristopherCreighton() {
  const profileData = {
    name: "Dr. Vudhi Slabisak, MD",
    paragraph:
      "Vudhi Slabisak, MD, is a board-certified orthopaedic surgeon at The OrthoSpine Doc in Plano, Texas. For over 20 years, Dr. Slabisak has treated patients in the Dallas area and counseled them throughout their care with attentiveness and a high level of dedication. Dr. Slabisak specializes in the diagnosis and treatment of conditions of the lumbar, cervical, and thoracic spine, as well as general orthopedic conditions. He is dedicated to providing personalized care to help patients return to their active lifestyles.",
    img: "/assets/img/team/dr-vudhi-slabisak-md.png",
    link: "/dr-christopher-creighton",
    certified: "Board Certified Orthopaedic Surgeon",
  };

  const conditionsAndProcedures = [
    {
      title: "Conditions Treated",
      points: [
        "Spondylitis",
        "Spine Deformities",
        "Osteoarthritis of Spine",
        "Degenerative Disc Disease",
        "Intervertebral Disc Disease",
        "Nerve Root Injury and Plexus Disorders",
        "Facet Blocks",
        "Spinal Cord Stimulation",
        "Spinal Nerve Block",
        "Spinal Stenosis",
        "Steroid Injection",
        "Low Back Pain",
        "Cervical Radiculopathy",
        "Herniated Disc",
        "Lumbar Spinal Stenosis",
        "Sciatica",
        "Chronic Neck Pain",
        "Spinal Fusion",
        "Scoliosis",
        "Lumbar Radiculopathy",
        "Spondylolisthesis",
        "Back Pain",
        "Post-Laminectomy Syndrome",
      ],
    },
    {
      title: "Specialties & Procedures",
      points: [
        "Spinal Fusion",
        "Disc Replacement",
        "Kyphoplasty",
        "Vertebroplasty",
        "Spinal Discectomy",
        "Anterior Interbody Lumbar Fusion (ALIF)",
        "Posterior Interbody Lumbar Fusion",
        "Laminectomy and Laminoplasty",
        "Laminoforaminotomy",
        "Percutaneous Vertebroplasty",
        "Percutaneous Kyphoplasty",
        "Spinal Compression Fracture Repair",
        "Cervical Spine Surgery",
        "Minimally Invasive Spine Surgery",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Dr. Vudhi Slabisak Orthopedic Spine Surgeon in Dallas</title>
        <meta
          name="description"
          content="Meet Dr. Vudhi Slabisak, orthopedic spine surgeon in Dallas at AdvancedCare Surgery Center. Book an appointment for expert spine and orthopedic care today."
        />
        <link
          rel="canonical"
          href="https://advancedcaresurgerycenter.com/dr-vudhi-slabisak-orthopedic-spine-surgeon"
        />
      </Head>
      <Layout breadcrumbTitle="Board Certified Orthopaedic Surgeon">
        <ShortProfile profileData={profileData} />
        <SlabisakDoctorProfile />
        <ConditionsAndProcedures data={conditionsAndProcedures} />
        <Appointment />
      </Layout>
    </>
  );
}
