import { Footer } from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Heroarea from "../../Components/Hero/Heroarea"
import "./Home.css"


export const Home = () => {
  return (
    <>
        <div className="home">
            <Header />
            <Heroarea />
            <Footer />
        </div>
    </>
  )
}
