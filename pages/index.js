import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner/Banner";
import ChooseDoctel from "@/components/ChooseDoctel/ChooseDoctel";
import DoctelWork from "@/components/DoctelWork/DoctelWork";
import ClientSays from "@/components/ClientSays/ClientSays";
import AppDownload from "@/components/AppDownload/AppDownload";
import SubscriptionPlans from "@/components/SubscriptionPlans/SubscriptionPlans";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";




export default function Home() {
  return (
    <>
      <Banner />
      <ChooseDoctel/>
      <DoctelWork />
      <ClientSays />
      <AppDownload />
      <SubscriptionPlans />
      <ContactUs />
      <Footer />
    </>
  );
}



