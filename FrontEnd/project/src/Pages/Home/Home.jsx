import Banner from "../../Components/Banner/Banner"
import  Categories  from "../../Components/Categories/Categories"
import Companies from "../../Components/Companies/Companies"
import  Footer  from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Heroarea from "../../Components/Hero/Heroarea"
import Logo from "../../Components/LOGO/Logo"
import Offers from "../../Components/Offers/offers"
import Section from "../../Components/Sectionarea/Section"

import "./Home.css"


export const Home = () => {
  return (
    <>
        <div className="home">
            <Header />
            <Logo />
            <Categories />
            <Section />
            <Companies />
            <Banner />
            <Heroarea />
            <Offers />
            <Footer />
        </div>
    </>
  )
}

export default Home;
