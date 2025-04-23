import AboutMe from "../about_me/about_me"
import Proyects from "../proyects/projects"
import Services from "../services/services"
import Banner from "./components/banner"

function Home() {

  return (
    <>
      <Banner/>      
      <AboutMe/>
      <Proyects/>
      <Services/>
    </>
  )
}

export default Home
