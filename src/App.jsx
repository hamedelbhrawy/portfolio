import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MouseSpotlight from './components/MouseSpotlight'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Testimonials from './pages/Testimonials'
import Resources from './pages/Resources'
import Media from './pages/Media'
import Contact from './pages/Contact'

// Global page transition variants
const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
}

function MainLayout() {
    return (
        <div className="relative">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="services"><Services /></section>
            <section id="portfolio"><Portfolio /></section>
            <section id="contact"><Contact /></section>
        </div>
    )
}

function AnimatedRoutes() {
    const location = useLocation()
    const { i18n } = useTranslation()

    useEffect(() => {
        // If it's a hash link, scroll to it, otherwise scroll to top
        if (location.hash) {
            const id = location.hash.replace('#', '')
            const element = document.getElementById(id)
            if (element) {
                const navHeight = 80; // Approximate height of fixed navbar
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            }
        } else if (location.pathname === '/') {
            // Keep home scroll position if just navigating to root, 
            // but usually we want to start at the top if it's a fresh visit
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        // Set text direction based on language
        document.dir = i18n.dir();
        document.documentElement.lang = i18n.language;
    }, [i18n, i18n.language]);

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <MainLayout />
                    </motion.div>
                } />
                <Route path="/about" element={<MainLayout />} />
                <Route path="/services" element={<MainLayout />} />
                <Route path="/portfolio" element={<MainLayout />} />
                <Route path="/contact" element={<MainLayout />} />

                <Route path="/case-studies" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <CaseStudies />
                    </motion.div>
                } />
                <Route path="/blog" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <Blog />
                    </motion.div>
                } />
                <Route path="/blog/:slug" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <BlogPost />
                    </motion.div>
                } />
                <Route path="/testimonials" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <Testimonials />
                    </motion.div>
                } />
                <Route path="/resources" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <Resources />
                    </motion.div>
                } />
                <Route path="/media" element={
                    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                        <Media />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col flex-1 overflow-x-hidden relative">
                <MouseSpotlight />
                <Navbar />
                <div className="flex-1 pt-16 md:pt-20 z-10 relative">
                    <AnimatedRoutes />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
