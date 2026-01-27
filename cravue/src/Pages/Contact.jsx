import { useState } from "react";
import email from "./../assets/ic_baseline-email.svg";
import phone from "./../assets/line-md_phone-filled.svg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Cravue",
    description:
      "Get in touch with Cravue for creative strategy and brand development services.",
    url: "https://cravue.com/contact",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@cravue.com",
      availableLanguage: "en",
    },
    organization: {
      "@type": "Organization",
      name: "Cravue",
      url: "https://cravue.com",
    },
  };
  const [loading, setLoading] = useState(false);
  const handlesubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    const data = {
      firstName: formData.fname,
      lastName: formData.lname,
      email: formData.email,
      phone: formData.phone,
      message: formData.msg,
    };

    // Validation
    const patterns = {
      firstName: /^[A-Za-z]{2,20}$/,
      lastName: /^[A-Za-z]{2,20}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\d+\s]{7,20}$/,
      message: /^.{5,500}$/,
    };

    const errors = [];
    for (const key in patterns) {
      if (!patterns[key].test(data[key] || "")) {
        errors.push(`Invalid ${key}`);
      }
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      const response = await fetch(
        "https://cravue-server.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Request failed");
      }

      alert("Form submitted successfully!");
      e.target.reset();
    } catch (err) {
      alert(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      {" "}
      <Helmet>
        <title>Contact Us | CRAVUE - Get in Touch</title>
        <meta
          name="description"
          content="Contact CRAVUE for creative strategy and brand development services. Reach out via email, phone, or our contact form."
        />
        <meta
          name="keywords"
          content="contact, get in touch, inquiry, email, phone, support"
        />
        <meta property="og:title" content="Contact CRAVUE" />
        <meta
          property="og:description"
          content="Get in touch with Cravue for creative strategy and brand development solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cravue.com/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact CRAVUE" />
        <meta
          name="twitter:description"
          content="Have a question? Let's get in touch!"
        />
        <link rel="canonical" href="https://cravue.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>{" "}
      <p className="title">Contact</p>
      <h1>Get in touch with us</h1>
      <p>
        Have a question or need solutions? Let’s us know by filling out the
        form, and we’ll be in touch!
      </p>
      <a
        style={{ display: "block", cursor: "pointer" }}
        href="mailto:cravue@gmail.com"
        className="gradient-background"
      >
        <p>
          <img src={email} alt="Email" /> E-mail
        </p>
        <p>cravue@gmail.com</p>
      </a>
      <div className="gradient-background">
        <p>
          <img src={phone} alt="Phone" /> Phone
        </p>
        <p>+234 567 8900</p>
      </div>
      <form id="form" onSubmit={handlesubmit}>
        <div className="fname">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="John"
            required
          />
        </div>
        <div className="lname">
          {" "}
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Doe"
            required
          />
        </div>
        <div className="email">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+234 567 8900"
          />
        </div>
        <div className="msg">
          <label htmlFor="msg">Message</label>
          <textarea
            style={{ resize: "none" }}
            name="msg"
            id="msg"
            placeholder="Hi, I am John I need help with..."
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Form"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
