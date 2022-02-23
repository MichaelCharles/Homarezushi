import Contact from "./Slides/Contact";
import Hero from "./Slides/Hero";
import Welcome from "./Slides/Welcome";
import About from "./Slides/About";
import Photos from "./Slides/Photos";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Welcome />
            <About />
            <Photos />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
