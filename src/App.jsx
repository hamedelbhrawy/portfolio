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

function AnimatedRoutes() {
    const location = useLocation()
    const { i18n } = useTranslation()

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        // Set text direction based on language
        document.dir = i18n.dir();
        document.documentElement.lang = i18n.language;
    }, [i18n, i18n.language]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col flex-1 overflow-x-hidden relative">
                <MouseSpotlight />
                <Navbar />
                <div className="flex-1 pt-16 md:pt-18 z-10 relative">
                    <AnimatedRoutes />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
