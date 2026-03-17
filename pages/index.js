import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home/Banner";
import About from "@/components/sections/home/About";
import Conditions from "@/components/sections/home/Conditions";
import WhyChoose from "@/components/sections/home/WhyChoose";
import Procedures from "@/components/sections/home/Procedures";
import Team from "@/components/sections/home/Team";
import PathToRecovery from "@/components/sections/home/PathToRecovery";
import Appointment from "@/components/sections/home/Appointment";
import Reviews from "@/components/sections/home/Reviews";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <About />
      <Conditions />
      <WhyChoose />
      <Team />
      <Appointment />
      <Procedures />
      <PathToRecovery />
      <Reviews />
    </Layout>
  );
}
