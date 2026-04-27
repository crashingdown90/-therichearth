import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter-box glass-panel" style={{ marginBottom: '60px', textAlign: 'center', padding: '40px' }}>
          <h2 style={{ marginBottom: '10px', color: 'var(--color-primary)' }}>Join Our Green Community</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px' }}>
            Get the latest high-authority insights on sustainable living and green tech delivered straight to your inbox.
          </p>
          <form style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{
                padding: '12px 20px',
                borderRadius: '30px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg)',
                color: '#fff',
                width: '100%',
                maxWidth: '350px',
                fontFamily: 'var(--font-body)'
              }}
              required
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: '20px', display: 'inline-block' }}>
              <span style={{ color: "var(--color-primary)" }}>✦</span> The Rich Earth
            </Link>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
              Empowering global communities with sustainable practices, ecological insights, and green technology solutions for a prosperous future. 
              Together, we are cultivating a wealthier, healthier planet.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Categories</h3>
            <div className="footer-links">
              <Link href="/category/green-tech">Green Tech</Link>
              <Link href="/category/sustainable-living">Sustainable Living</Link>
              <Link href="/category/eco-agriculture">Eco-Agriculture</Link>
              <Link href="/category/climate-action">Climate Action</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Editorial</h3>
            <div className="footer-links">
              <Link href="/about">About Us</Link>
              <Link href="/authors">Our Authors</Link>
              <Link href="/editorial-guidelines">Editorial Guidelines</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Legal</h3>
            <div className="footer-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} The Rich Earth. All rights reserved. Built with ❤️ for the Earth.
        </div>
      </div>
    </footer>
  );
}
