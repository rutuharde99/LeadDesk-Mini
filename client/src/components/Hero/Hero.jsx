import "./Hero.css";
import LeadForm from "../LeadForm/LeadForm";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">CRM • Lead Management • Sales</p>
          <h1>
            Manage Leads <br />
            <span>Smarter</span>
          </h1>
          <p className="hero-text">
            Capture customer information quickly,
            organize leads efficiently,
            and grow your business with LeadDesk Mini.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("lead-form")}
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
            alt="Lead Management"
          />
        </div>
      </section>

      <section id="lead-form" className="lead-form-section">
        <LeadForm />
      </section>

      <section id="about" className="about-section">
        
      </section>
    </>
  );
}

export default Hero;