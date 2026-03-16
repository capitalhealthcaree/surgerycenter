import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home/Banner";
import About from "@/components/sections/home/About";
import Appointment from "@/components/sections/home/Appointment";
import Conditions from "@/components/sections/home/Conditions";
import WhyChoose from "@/components/sections/home/WhyChoose";
import Procedures from "@/components/sections/home/Procedures";
import Doctor from "@/components/sections/home/Doctor";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Conditions />
      <WhyChoose />
      <Doctor />
      <Procedures />
      <Appointment />
    </Layout>
  );
}
