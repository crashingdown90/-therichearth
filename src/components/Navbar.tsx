"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo">
          <span style={{ color: "var(--color-primary)" }}>✦</span> The Rich Earth
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <div className="dropdown">
            <span className="dropdown-label">Categories ▾</span>
            <div className="dropdown-menu">
              <Link href="/category/green-tech">Green Tech</Link>
              <Link href="/category/sustainable-living">Sustainable Living</Link>
              <Link href="/category/eco-agriculture">Eco-Agriculture</Link>
              <Link href="/category/climate-action">Climate Action</Link>
            </div>
          </div>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Us</Link>
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
