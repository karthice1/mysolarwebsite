export function Banner() {
  return (
    <div className="top-banner">
      Solar Ladder raises 1.3 Million USD in Seed Funding 🎉 <a href="#">Read Now</a>
    </div>
  );
}

export function Nav({ variant = "default" }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <a className="brand" href="/" aria-label="Solar Ladder">Solar Ladder</a>
        <div className="nav-links">
          {variant === "design" ? (
            <>
              <a href="/">Software</a>
              <a href="#benefits">Benefits</a>
              <a href="#features">Features</a>
            </>
          ) : (
            <>
              <a href="/">Software</a>
              <a href="#">Procurement</a>
              <a href="#">Finance</a>
              <a href="#">Blogs</a>
            </>
          )}
        </div>
        <div className="nav-actions">
          {variant === "home" ? <a className="btn btn-primary hide-mobile" href="#">Live Demo</a> : null}
          {variant === "design" ? <a className="btn btn-primary hide-mobile" href="#demo">Live Demo</a> : null}
          <a className="btn btn-ghost hide-mobile" href="/login/">Login</a>
          <button className="mobile-menu" type="button" aria-label="Menu">Menu</button>
        </div>
      </nav>
    </header>
  );
}

export function Footer({ variant = "default" }) {
  if (variant === "design") {
    return (
      <footer className="design-footer">
        <div className="design-footer-brand">Solar Ladder</div>
        <div><a href="mailto:sales@solarladder.com">sales@solarladder.com</a></div>
        <div className="design-footer-links">
          <a href="#">Terms and Conditions</a>
          <span> · </span>
          <a href="#">Privacy Policy</a>
          <span> · </span>
          <a href="#">Cancellation and Refund Policy</a>
          <span> · </span>
          <a href="#">Corporate Governance</a>
        </div>
        <div className="design-footer-copy">© 2026 . Solar Ladder. All rights reserved.</div>
      </footer>
    );
  }
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col">
          <div className="footer-brand">Solar Ladder</div>
          <p className="footer-tagline">Helping Solar Installers Grow from X to 10X</p>
          <h3 className="footer-follow">Follow us</h3>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/">Software</a></li>
            <li><a href="#">Finance</a></li>
            <li><a href="#">Procurement</a></li>
          </ul>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Terms And Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cancellation and Refund Policy</a></li>
            <li><a href="#">Corporate Governance</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:sales@solarladder.com">sales@solarladder.com</a></li>
            <li><a href="tel:+918291665909">+91 8291665909</a></li>
            <li>NIBR Corporate Park 1 Aerocity, Andheri East, Saki Naka, Mumbai, India - 400072</li>
          </ul>
        </div>
        <div className="footer-bottom">© 2026 . Solar Ladder. All rights reserved.</div>
      </div>
    </footer>
  );
}
