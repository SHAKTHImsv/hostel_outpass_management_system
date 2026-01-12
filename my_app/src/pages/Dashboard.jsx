import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Mock data - in a real app, these would come from your database
  const stats = [
    { title: "Active Outpasses", count: 12, color: "primary", icon: "bi-card-checklist" },
    { title: "Students in Hostel", count: 145, color: "success", icon: "bi-people-fill" },
    { title: "Pending Requests", count: 5, color: "warning", icon: "bi-clock-history" },
    { title: "Complaints", count: 2, color: "danger", icon: "bi-exclamation-triangle" }
  ];

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      
      <div className="container py-5">
        {/* Welcome Section */}
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold text-dark">Hostel Dashboard</h1>
            <p className="lead text-muted">Welcome back, Admin. Here is what's happening today.</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row g-4 mb-5">
          {stats.map((stat, index) => (
            <div className="col-md-3" key={index}>
              <div className={`card border-0 shadow-sm border-start border-${stat.color} border-4`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted text-uppercase small fw-bold">{stat.title}</h6>
                      <h2 className="fw-bold mb-0">{stat.count}</h2>
                    </div>
                    <div className={`fs-1 text-${stat.color}`}>
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions Section */}
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-white py-3">
                <h5 className="mb-0 fw-bold">Management Overview</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <button 
                      onClick={() => navigate('/apply')} 
                      className="btn btn-outline-primary w-100 py-3 d-flex flex-column align-items-center"
                    >
                      <i className="bi bi-file-earmark-plus fs-3"></i>
                      New Outpass Request
                    </button>
                  </div>
                  <div className="col-sm-6">
                    <button 
                      onClick={() => navigate('/hostelA')} 
                      className="btn btn-outline-dark w-100 py-3 d-flex flex-column align-items-center"
                    >
                      <i className="bi bi-building fs-3"></i>
                      View Hostel A
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Info Panel */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 bg-primary text-white p-3">
              <div className="card-body">
                <h4>System Status</h4>
                <hr className="border-white" />
                <p><i className="bi bi-check-circle-fill me-2"></i> Database: Connected</p>
                <p><i className="bi bi-check-circle-fill me-2"></i> Mail Server: Active</p>
                <p><i className="bi bi-info-circle-fill me-2"></i> Next Backup: 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;