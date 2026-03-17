import Layout from "@/components/layout/Layout";
import Team from "@/components/sections/home/Team";
import Appointment from "@/components/sections/home/Appointment";

export default function Procedure() {
  return (
    <Layout breadcrumbTitle="Top Surgical Specialties">
      <Team />
      <Appointment />
    </Layout>
  );
}
