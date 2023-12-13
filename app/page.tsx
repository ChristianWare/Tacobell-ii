import Image from "next/image";
import styles from "./page.module.css";
import Newest from "@/components/Newest/Newest";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Newest /> */}
    </div>
  );
}
