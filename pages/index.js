import Layout from "@/components/layout/Layout";
import AboutTwo from "@/components/sections/home5/AboutTwo";
import Blog from "@/components/sections/home5/Blog";
import Contact from "@/components/sections/home5/Contact";
import Request from "@/components/sections/home5/Request";
import MedicalProcedures from "@/components/sections/home5/MedicalProcedures";
import Slider from "@/components/sections/home5/Slider";

export default function Home() {
  return (
    <>
      <Layout headerStyle={5}>
        <Slider />
        <MedicalProcedures />
        <AboutTwo />
        <Request />
        <Contact />
        <Blog />
      </Layout>
    </>
  );
}
