import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Impact from "../components/Impact";
import YouthCentres from "../components/YouthCentres";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Journey />
                <Impact />
                <YouthCentres />
                <TestimonialsSection />
                <ContactSection />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}

export default Home;