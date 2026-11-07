import { Banner, Nav, Footer } from "../components/SiteChrome";

export const metadata = {
  title: "Solar Ladder",
  description: "Solar Ladder is the all-in-one operating system for solar businesses. Manage customers, proposals, projects, finances and more — all in one place.",
};

const states = [
  "Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh",
  "Dadar and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
  "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

const features = [
  { t: "Projects", d: "Organize, track, and search for every part of your business at a single place.", h: "/feature/crm/" },
  { t: "Proposals", d: "The best Solar Proposal software on the planet. Create the most beautiful and customized proposals in 1 minute flat.", h: "/feature/proposals/" },
  { t: "Design", d: "The easiest Solar Design software out there. Increase conversions and add a touch of amazing to your customer experience.", h: "/design/" },
  { t: "Tasks", d: "Never miss out on anything important with reminders and calendar integrations.", h: "#" },
  { t: "Project Management", d: "Manage every aspect of your projects from start to finish, track and increase employee productivity.", h: "#" },
  { t: "Books", d: "Find and eliminate hidden costs completely from your projects, eliminate pen and paper for tracking.", h: "#" },
  { t: "O&M", d: "The most thorough Operations and Maintenance software in the Solar Industry, used by veterans in the space.", h: "#" },
  { t: "Site Surveys and Forms", d: "Make the process of surveying your sites effortless with simple plug-and-play forms.", h: "#" },
  { t: "Customer Dashboard", d: "Keep your customer engaged throughout your project with interactive updates and seamless onboarding.", h: "#" },
  { t: "Integrations", d: "Google Calendar, Google Forms, Zoho, IndiaMart, you name it, we have it.", h: "#" },
];

const testimonials = [
  { q: "Solar ladder is a Complete One-Point Solution for a Solar Installer.", who: "Kalyan Chatterjee", role: "Director" },
  { q: "Solar Ladder helped us decrease our cash conversion cycle by 30 days that helped us to do more projects and give better payment terms to our customers.", who: "Sagar Saxena", role: "Head of Channel Partner" },
  { q: "I’m using Solar Ladder since 4 years and it helped me a lot in giving quotations and getting orders in a minute. I can track my payments, orders and quotations with the click of a button.", who: "Naveen Rajashekar", role: "Owner" },
  { q: "Solar Ladder's CRM and 3D design features have been a game-changer for our business. Managing projects has never been this efficient.", who: "Ved Prakash", role: "CEO", pre: "VP" },
  { q: "Solar Ladder's rooftop Loan financing has been very helpful for our business growth. The process is fast, and their finance manager provides exceptional support every step of the way.", who: "Sandeep Sonkar", role: "Director", pre: "SS" },
];

export default function Home() {
  return (
    <main className="home-page">
      <Banner />
      <Nav variant="home" />

      <section className="hero-home">
        <div className="hero-home-inner">
          <div className="hero-left">
            <h1>Grow Your Solar Business From X To 10X</h1>
            <p>Everything you need to grow your solar business. In one place.</p>
            <form className="hero-form" action="" method="get">
              <input type="text" name="companyName" placeholder="Enter your Company Name" required />
              <input type="tel" name="phone" placeholder="Mobile Number" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <select name="state" defaultValue="" aria-label="Select A State">
                <option value="">Select A State</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <button className="btn btn-primary" type="submit">Get Started Now</button>
            </form>
          </div>
          <div className="hero-right">
            <img src="/placeholders/blob.svg" alt="Gradient Blob" className="hero-blob" />
            <img src="/placeholders/shot.svg" alt="" className="hero-shot" />
            <video className="hero-video" controls playsInline preload="metadata"><source src="" type="video/mp4" /></video>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Trusted by companies">
        <div className="logo-strip-inner">
          <div className="logo-strip-text">Trusted by 600+ companies <span>Atria Power</span> <span>Luxsun Energy</span></div>
          <div className="logo-row">
            {["Atria Power","Luxsun Energy","Atria Power","Luxsun Energy","Atria Power","Luxsun Energy"].map((n,i)=>(
              <span key={i} className="logo-pill"><img src="/placeholders/logo.svg" alt={n} /><span className="sr-only">{n}</span></span>
            ))}
          </div>
        </div>
      </section>

      <section className="software-section">
        <div className="software-inner">
          <h2>The Best Software in Solar<br/>Everything You Need. In One Solution.</h2>
          <div className="features-grid home-features" aria-label="Software features">
            {features.map((c, i) => (
              <article key={c.t} className="feature-card">
                <div className="feature-visual"><img src="/placeholders/shot.svg" alt={c.t} /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                <a href={c.h}>Explore</a>
              </article>
            ))}
          </div>
          <div className="software-promo">
            <button type="button" className="carousel-btn" aria-label="Previous slide">Previous slide</button>
            <div className="software-promo-text">
              <p><a href="#">On-Demand Demo</a> <span>99.99% Uptime</span> <span>Privacy and Security</span></p>
              <h2>Introducing. The Fastest Design Software!</h2>
              <p>Create Solar Designs in 2 minutes flat!</p>
              <p>Seamlessly integrate Designs into your Proposals and share with your customers.</p>
              <a className="btn btn-primary" href="/design/">Check It Out</a>
            </div>
            <button type="button" className="carousel-btn" aria-label="Next slide">Next slide</button>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Impact">
        <div className="stats-grid">
          <div className="stat"><h3>70,000+</h3><p>Projects Managed On Solar Ladder</p></div>
          <div className="stat"><h3>500+ MW</h3><p>Size Of Projects Managed On Solar Ladder</p></div>
          <div className="stat"><h3>85,000+</h3><p>Proposals Made On Solar Ladder</p></div>
          <div className="stat"><h3>7.5+ Years</h3><p>Time Saved with Solar Ladder</p></div>
        </div>
      </section>

      <section className="procurement">
        <div className="container-narrow">
          <h2>Solar Ladder Procurement</h2>
          <p className="proc-sub">Raw Materials at the Lowest Prices guaranteed.<br/><strong>35+ MW</strong> worth of Raw Material Procured. <strong>10M+</strong> Trees Saved.</p>
          <div className="procurement-icons" aria-hidden="true">
            {Array.from({length:10}).map((_,i)=><span key={i} className="proc-icon"><img src="/placeholders/logo.svg" alt="" /></span>)}
          </div>
        </div>
      </section>

      <section className="finance">
        <div className="container-narrow">
          <h2>Solar Ladder Finance</h2>
          <p className="finance-sub">Financing Made Easy</p>
          <div className="finance-top"><a className="btn btn-light" href="#">Calculate EMI</a></div>
          <div className="finance-grid">
            <article className="finance-card">
              <h3>Housing Solar Loan</h3>
              <ul><li>Collateral Free Loan</li><li>Loan Approval within 24-48 Hrs</li></ul>
              <button type="button" className="btn btn-primary">GET LOAN NOW</button>
            </article>
            <article className="finance-card">
              <h3>Commercial Solar Loan</h3>
              <ul><li>Collateral Free Loan</li><li>Save your cost on Electricity Bills</li></ul>
              <button type="button" className="btn btn-primary">GET LOAN NOW</button>
            </article>
            <article className="finance-card">
              <h3>Residential Solar Loan</h3>
              <ul><li>Collateral Free Loan</li><li>Loan Approval within 24-48 Hrs</li></ul>
              <button type="button" className="btn btn-primary">GET LOAN NOW</button>
            </article>
            <article className="finance-card">
              <h3>Working Capital Solar Loan</h3>
              <ul><li>Working Capital Upto ₹ 1 Cr</li><li>Fast Turn Around Time</li></ul>
              <button type="button" className="btn btn-primary">GET WORKING CAPITAL NOW</button>
            </article>
          </div>
          <div className="finance-controls">
            <button type="button" className="btn btn-light" aria-label="Previous slide">Previous slide</button>
            <button type="button" className="btn btn-light" aria-label="Next slide">Next slide</button>
          </div>
        </div>
      </section>

      <section className="backed-by">
        <div className="backed-inner">
          <h2>Backed By The Best</h2>
          <div className="backed-logos" aria-hidden="true">
            {[1,2,3,4].map((i)=><img key={i} src="/placeholders/logo.svg" alt="" />)}
          </div>
        </div>
      </section>

      <section className="clients-section testimonials">
        <div className="clients-inner">
          <h2>Our Clients Love Us</h2>
          <div className="clients-grid">
            {testimonials.map((t, i) => (
              <article key={i} className="quote">
                <img src="/placeholders/logo.svg" alt="" className="quote-logo" />
                <p>&quot;{t.q}&quot;</p>
                <div className="quote-who">
                  {t.pre ? <span className="initials">{t.pre}</span> : <img src="/placeholders/person.svg" alt={t.who} className="quote-avatar" />}
                  <div>
                    <div className="who">{t.who}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="clients-links"><a href="#">Book A Demo</a> · <a href="#">LinkedIn</a> · <a href="#">Facebook</a> · <a href="#">Instagram</a></p>
        </div>
      </section>

      <Footer variant="default" />
    </main>
  );
}
