import AboutSaction from "@/components/about section/AboutSaction";
import Carousel from "@/components/carousel/Carousel";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import OurService from "@/components/ourService/OurService";


export default function Home() {
  return (
    <div>
    <Carousel/>
    <AboutSaction/>
    <OurService/>
    <ContactInfo/>
    </div>
  )
}
