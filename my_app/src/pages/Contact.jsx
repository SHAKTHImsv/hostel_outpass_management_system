import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[submitted,setSubmitted]=useState(false);
  const [formData, setFormData] = useState([])

  const handleSubmit = () => {
    fetch('http://localhost:3000/queries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,message}),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      setSubmitted(true);
      setName("")
      setEmail("")
      setMessage("")
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                
                {/* Left Side: Contact Info */}
                <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-center">
                  <h2 className="fw-bold mb-4">Contact Information</h2>
                  <p className="mb-4">Fill out the form and our team will get back to you within 24 hours.</p>
                  
                  <div className="d-flex mb-3 align-items-center">
                    <i className="bi bi-geo-alt-fill fs-4 me-3"></i>
                    <span>123 Hostel Street, University Campus, India</span>
                  </div>
                  <div className="d-flex mb-3 align-items-center">
                    <i className="bi bi-telephone-fill fs-4 me-3"></i>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="d-flex mb-3 align-items-center">
                    <i className="bi bi-envelope-fill fs-4 me-3"></i>
                    <span>support@hostelmanage.com</span>
                  </div>

                  <div className="mt-5">
                    <div className="d-flex gap-3">
                      <i className="bi bi-facebook fs-4 pointer"></i>
                      <i className="bi bi-twitter fs-4 pointer"></i>
                      <i className="bi bi-instagram fs-4 pointer"></i>
                    </div>
                  </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="col-md-7 bg-white p-5">
                  <h2 className="fw-bold text-dark mb-4">Send us a Message</h2>
                  {submitted && (
                    <div className="alert alert-success">Thank you! Your message has been sent.</div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input 
                        type="text" 
                        className="form-control form-control-lg bg-light border-0" 
                        placeholder="John Doe"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input 
                        type="email" 
                        className="form-control form-control-lg bg-light border-0" 
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea 
                        className="form-control form-control-lg bg-light border-0" 
                        rows="4" 
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg w-100 shadow-sm" onClick={handleSubmit}>
                      Send Message
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;