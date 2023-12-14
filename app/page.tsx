import Image from "next/image";
import styles from "./page.module.css";
import Newest from "@/components/Newest/Newest";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import C1 from "@/components/C1/C1";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <C1 />
      <Newest />
    </div>
  );
}
