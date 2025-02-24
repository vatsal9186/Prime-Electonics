import Banner from "../../Components/Banner/Banner"
import  Categories  from "../../Components/Categories/Categories"
import  Footer  from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Heroarea from "../../Components/Hero/Heroarea"
import Section from "../../Components/Sectionarea/Section"

import "./Home.css"


export const Home = () => {
  return (
    <>
        <div className="home">
            <Header />
            <Categories />
            <Section />
            <Banner />
            <Heroarea />
            <Footer />
        </div>
    </>
  )
}

export default Home;
