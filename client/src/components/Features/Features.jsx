import "./Features.css";

function Features() {
  return (
    <section className="features">

      <div className="section-title">

        <h2>Why Choose LeadDesk Mini?</h2>

        <p>
          Everything you need to manage leads in one place.
        </p>

      </div>

      <div className="feature-grid">

        <div className="feature-card">

          <div className="icon">📋</div>

          <h3>Lead Management</h3>

          <p>
            Store and organize customer information easily.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon">⚡</div>

          <h3>Fast Performance</h3>

          <p>
            Manage leads quickly with a simple interface.
          </p>

        </div>

        <div className="feature-card">

          <div className="icon">📈</div>

          <h3>Sales Tracking</h3>

          <p>
            Track customer progress and improve conversions.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;