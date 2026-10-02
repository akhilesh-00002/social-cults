import Header from '../component/header.jsx'
import Hero from '../component/home/Hero'
import BlogSection from '../component/home/Bloog.jsx'
import Testimonials from '../component/home/Testimonal'
import DigitalServices from '../component/home/Service'
import Clients from '../component/home/client'
import FAQ from '../component/home/Faq'
import Project from '../component/home/Projectcomp'
import Slider from '../component/home/slider'
import LetsTalk from '../component/lets.jsx'
import Footer from '../component/footer.jsx'
import Testimonialsec from './../component/Testim'
import PopUp from './../component/PopUp.jsx'





const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <Hero />
            <Slider />
            <DigitalServices />
            <Project />
            <Testimonialsec />
            {/* <Testimonials /> */}
            <Clients />
            <BlogSection />
            <FAQ />
            {/* <Testimonialsec /> */}
            
            <PopUp />
           





        </>
    )
}

export default Home