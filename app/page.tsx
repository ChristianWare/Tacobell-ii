import Image from "next/image";
import styles from "./page.module.css";
import Newest from "@/components/Newest/Newest";

export default function Home() {
  return (
    <div>
      <Newest />
    </div>
  );
}
