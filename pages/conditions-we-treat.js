import Layout from "@/components/layout/Layout";
import Conditions from "@/components/sections/home/Conditions";
import Appointment from "@/components/sections/home/Appointment";

export default function BlogDetails() {
  return (
    <Layout breadcrumbTitle="Conditions We Treat">
      <Conditions />
      <Appointment />
    </Layout>
  );
}
