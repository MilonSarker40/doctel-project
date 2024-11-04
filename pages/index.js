import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import ChooseDoctel from "@/components/ChooseDoctel/ChooseDoctel";
import DoctelWork from "@/components/DoctelWork/DoctelWork";




export default function Home() {
  return (
    <>
      <Banner />
      <ChooseDoctel />
      <DoctelWork />
    </>
  );
}



