import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/header"
import Herosection from "../components/herosection"
// import Features from "../components/featues"
// import Services from "../components/Services"
import Aboutussection from "../components/aboutussection"
import Services from "../components/Services"
import CTA from "../components/Cta"
import Nextfeatures from "../components/nextfeatures"
import Testimonial from "../components/testimonials"

// import Jumbotron from "../components/jumbotron"
export default function Home(){
  return(
    <>

    <Herosection />
    <Aboutussection />
    <Services />
    <CTA />
    <Nextfeatures />
    <Testimonial />
    {/* <Jumbotron /> */}
    {/* <Services /> */}
    {/* <Features /> */}
    {/* <Footer /> */}

    </>
  )
}