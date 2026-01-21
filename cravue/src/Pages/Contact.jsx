const Contact = () => {
  const handlesubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const patterns = {
      fname: /^[A-Za-z]{2,20}$/,
      lname: /^[A-Za-z]{2,20}$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\d{10}$/,
      msg: /^.{5,500}$/,
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

    // try {
    //   const response = await fetch(
    //     "https://cravue-server.vercel.app/api/contact",
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(data),
    //     },
    //   );

    //   if (!response.ok) {
    //     const result = await response.json().catch(() => ({}));
    //     throw new Error(result.error || "Request failed");
    //   }

    //   alert("Form submitted successfully!");
    //   form.reset();
    // } catch (err) {
    //   alert(err.message || "Failed to submit form");
    // }
  };
  return (
    <div className="contact">
      <p className="title">Contact</p>
      <h1>Get in touch with us</h1>
      <p>
        Have a question or need solutions? Let’s us know by filling out the
        form, and we’ll be in touch!
      </p>
      <div className="gradient-background">
        <p>
          <img src="" alt="" /> Email
        </p>
        <p>cravue@gmail.com</p>
      </div>
      <div className="gradient-background">
        <p>
          <img src="" alt="" /> Phone
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
            name="msg"
            id="msg"
            placeholder="Hi, I am John I need help with..."
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;
