import Header from "../../components/header";
import AboutSection from "./about";
import Banner from "./banner";
import Featured from "./feature";
import Objective from "./objective";


const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <AboutSection/>
      <Objective/>
      <Featured/>
    </div>
  );
};

export default Home;
