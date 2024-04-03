import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeScreen from "@/components/HomeScreen";
import Icons from "@/components/Icons";
import NewsLetter from "@/components/NewsLetter";
import Slider from "@/components/Slider";



export default function Home() {
  return (
    // <div className="bg-gradient-to-45 from-green-100  via-white to-green-900  h-[1050px] ">
    <div>
    
      <Header />
      <HomeScreen />
      <Icons/>
      <Slider/>
      <Card/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
