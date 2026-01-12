import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../components/Navbar';

function ApplyForm() {
  const [name, setName] = useState('');
  const [regno, setRegno] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [reason, setReason] = useState('');
  const [todo, setTodo] = useState([]);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Prevents page reload
    
    fetch('http://localhost:3000/outpass', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, regno, email, mobileno, fromDate, toDate, hostelName, reason })
    }).then(res => res.json())
      .then(data => {
        setTodo([...todo, data]);
        // Reset fields
        setName(''); setRegno(''); setEmail(''); setMobileno('');
        setFromDate(''); setToDate(''); setHostelName(''); setReason('');
        
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      });
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-primary text-white text-center py-4">
                <h2 className="mb-0">Outpass Application</h2>
                <small className="opacity-75">Please fill in the details below</small>
              </div>
              <div className="card-body p-4">
                <form onSubmit={submit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Full Name</label>
                      <input required value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="John Doe" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Register No</label>
                      <input required value={regno} onChange={(e) => setRegno(e.target.value)} type="number" className="form-control" placeholder="123456" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Email Address</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="name@college.edu" />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Mobile Number</label>
                      <input required value={mobileno} onChange={(e) => setMobileno(e.target.value)} type="number" className="form-control" placeholder="9876543210" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Hostel</label>
                      <select required value={hostelName} onChange={(e) => setHostelName(e.target.value)} className="form-select">
                        <option value="">Select Hostel</option>
                        <option value="Hostel A">Hostel A</option>
                        <option value="Hostel B">Hostel B</option>
                        <option value="Hostel C">Hostel C</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">From Date</label>
                      <input required value={fromDate} onChange={(e) => setFromDate(e.target.value)} type="date" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">To Date</label>
                      <input required value={toDate} onChange={(e) => setToDate(e.target.value)} type="date" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Reason for Outpass</label>
                    <textarea required rows="3" value={reason} onChange={(e) => setReason(e.target.value)} className="form-control" placeholder="Provide a brief explanation..."></textarea>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-lg shadow-sm">
                      Submit Application
                    </button>
                  </div>

                  {success && (
                    <div className="alert alert-success mt-3 text-center border-0 shadow-sm" role="alert">
                      ✅ Outpass Applied Successfully!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;