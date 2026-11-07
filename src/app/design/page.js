import { Banner, Nav, Footer } from "../../components/SiteChrome";

export const metadata = {
  title: "Solar Ladder",
  description: "Create stunning 3D solar proposals in minutes. Close more deals with Solar Ladder's fast, browser-based solar design software for installers.",
};

const states = [
  "Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh",
  "Dadar and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry","Goa","Gujarat","Haryana",
  "Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra",
  "Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal"
];

export default function Design() {
  return (
    <main className="design-page">
      <Banner />
      <Nav variant="design" />

      <section className="design-hero">
        <div className="wrap">
          <h1>The Fastest Solar Design Software!</h1>
          <p>Close More Solar Deals with Stunning 3D Proposals - in Just Minutes</p>
          <p>Share designs with your customers and increase conversion multi-fold. All from your <a href="#">Browser</a> and <a href="#">Solar Ladder&apos;s Mobile app</a>.</p>
          <form className="design-hero-form" action="" method="get">
            <input type="text" name="companyName" placeholder="Enter Your Company Name" required />
            <input type="tel" name="phone" placeholder="Enter Your Phone Number" required />
            <input type="email" name="email" placeholder="Enter Your Email" required />
            <select name="state" defaultValue="" aria-label="Select A State">
              <option value="">Select A State</option>
              {states.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <button className="btn btn-primary" type="submit">Get Started</button>
          </form>
        </div>
      </section>

      <section className="design-metrics" aria-label="Highlights">
        <div className="wrap design-metrics-inner">
          <div className="metric"><strong>Unlimited</strong><span>Create Unlimited Solar Proposals</span></div>
          <div className="metric"><strong>2 Min</strong><span>Average Time to Create a Solar Design</span></div>
          <div className="metric"><strong>3X Conversion</strong><span>In Sales with our Design</span></div>
        </div>
      </section>

      <section id="benefits" className="design-benefits">
        <div className="wrap design-benefits-inner">
          <div className="design-benefits-copy">
            <h2>Craft Beautiful Designs. Close More Sales.</h2>
            <p>Instantly share Solar Designs with your customers.</p>
            <p>Seamlessly integrate Designs into your Proposals.</p>
            <p>Try Playing around with our 360° 3D Preview:</p>
          </div>
          <div className="design-benefits-media">
            <img src="/placeholders/shot.svg" alt="" />
            <video controls playsInline preload="metadata"><source src="" type="video/mp4" /></video>
            <video controls playsInline preload="metadata"><source src="" type="video/mp4" /></video>
          </div>
        </div>
      </section>

      <section className="design-trusted">
        <div className="design-trusted-inner">
          <p>Trusted by 600+ companies</p>
          <div className="design-trusted-logos">
            {["Atria Power","Luxsun Energy","Atria Power","Luxsun Energy","Atria Power","Luxsun Energy"].map((n,i)=>(
              <span key={i}><img src="/placeholders/logo.svg" alt={n} /><span>{n}</span></span>
            ))}
          </div>
        </div>
      </section>

      <section className="design-clients">
        <div className="design-clients-wrap">
          <h2>Our Clients Love Us</h2>
          <div className="design-quote-grid">
            {[
              ["Solar ladder is a Complete One-Point Solution for a Solar Installer.","Kalyan Chatterjee","Director"],
              ["Solar Ladder helped us decrease our cash conversion cycle by 30 days that helped us to do more projects and give better payment terms to our customers.","Sagar Saxena","Head of Channel Partner"],
              ["I’m using Solar Ladder since 4 years and it helped me a lot in giving quotations and getting orders in a minute. I can track my payments, orders and quotations with the click of a button.","Naveen Rajashekar","Owner"],
              ["Solar Ladder's CRM and 3D design features have been a game-changer for our business. Managing projects has never been this efficient.","Ved Prakash","CEO"],
              ["Solar Ladder's rooftop Loan financing has been very helpful for our business growth. The process is fast, and their finance manager provides exceptional support every step of the way.","Sandeep Sonkar","Director"],
            ].map(([q,n,r],i)=>(
              <article key={i} className="mini-quote">
                <p>&quot;{q}&quot;</p>
                <div className="who">{n}</div>
                <div className="role">{r}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features-block">
        <div className="wrap">
          <h2>Amazing Features</h2>
          <div className="feat-cards">
            {["3D Visualization","Accurate Layouts","Browser Based","Mobile App","Fast Proposals","Easy Sharing"].map((f)=>(
              <div key={f} className="feat">
                <div className="feat-icon" aria-hidden="true" />
                <h3>{f}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="demo" />
      <Footer variant="design" />
    </main>
  );
}
