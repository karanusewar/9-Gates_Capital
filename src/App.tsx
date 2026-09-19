/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import CaseStudies from './components/CaseStudies';
import Advantages from './components/Advantages';
import Sectors from './components/Sectors';
import Team from './components/Team';
import Guarantee from './components/Guarantee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // A simple global interaction to toggle hover state on cursor for a tags and interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-light font-sans antialiased overflow-x-hidden selection:bg-light selection:text-dark">
      <Background />
      <CustomCursor isHovering={isHovering} />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Sectors />
        <Testimonial />
        <CaseStudies />
        <Team />
        <Guarantee />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
