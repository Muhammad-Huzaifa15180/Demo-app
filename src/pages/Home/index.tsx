import Header from "../../components/header";
import AboutSection from "./about";
import Banner from "./banner";
import Objective from "./objective";


const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <AboutSection/>
      <Objective/>
    </div>
  );
};

export default Home;
