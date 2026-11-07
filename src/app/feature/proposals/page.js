import { Banner, Nav, Footer } from "../../../components/SiteChrome";
import DemoForm from "../../../components/DemoForm";

export const metadata = { title: "Solar Ladder" };

export default function Proposals() {
  return (
    <main className="feature-page">
      <Banner />
      <Nav variant="default" />
      <section className="feature-hero">
        <div className="container">
          <h1>The Fastest Solar Proposal Software In The World</h1>
          <p>Deliver beautiful, fully customised Solar Proposals to Customers in less than 2 minutes from anywhere.</p>
          <div className="actions">
            <a className="btn btn-primary" href="#demo">Get Started</a>
            <a className="btn btn-outline" href="#benefits">See Benefits</a>
          </div>
        </div>
        <div className="feature-shot">
          <div className="shot-ph" aria-hidden="true"><img src="/placeholders/shot.svg" alt="" /></div>
        </div>
      </section>

      <section id="benefits" className="feature-section">
        <div className="feature-benefits-inner">
          <h1>Discover The Power Of Our Proposals</h1>
          <div className="cards3">
            <div className="fcard">
              <div className="fcard-icon" aria-hidden="true" />
              <h1>Customization Options</h1>
              <p>Your Proposal is fully tailored to your needs and your company&apos;s brand, ensuring a delightful customer experience.</p>
            </div>
            <div className="fcard">
              <div className="fcard-icon" aria-hidden="true" />
              <h1>Increase Conversion</h1>
              <p>With a beautiful on-the-spot proposal, increase the chances of converting people into paying customers!</p>
            </div>
            <div className="fcard">
              <div className="fcard-icon" aria-hidden="true" />
              <h1>Everything Else From Solar Ladder Included</h1>
              <p>CRM, 3D Design, Tasks, Invoicing, Project Management. A truly all-in-one software for the Solar Industry.</p>
            </div>
          </div>
          <p className="feature-uptime">On-Demand Demo <span>99.99% Uptime</span> <span>Privacy and Security</span></p>
        </div>
      </section>

      <section id="demo" className="demo-band">
        <div className="inner">
          <div className="demo-copy">
            <h1>Get A Free Demo</h1>
            <p>Explore our product and see if it fits your needs</p>
            <div className="demo-follow">
              <strong>Follow us</strong>
              <div className="socials-inline">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
              </div>
            </div>
          </div>
          <div className="panel"><DemoForm /></div>
        </div>
      </section>
      <Footer variant="default" />
    </main>
  );
}
