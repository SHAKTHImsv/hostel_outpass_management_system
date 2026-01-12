import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function HostelB() {
  const hname = "Hostel B";
  const [filterList, setFilterList] = useState([]);
  const [delMessage, setDelMessage] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/outpass')
      .then(response => response.json())
      .then(data => {
        // Handle both direct array or the { val: [] } structure seen previously
        const sourceData = Array.isArray(data) ? data : data.val || [];
        const filtered = sourceData.filter((item) => item.hostelName === hname);
        setFilterList(filtered);
      })
      .catch(e => console.log("Fetch error: ", e.message));
  }, []);

  // 1. Reusable Delete Function
  const deleteRecord = (id) => {
    fetch(`http://localhost:3000/outpass/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if (res.ok) {
        // Update local UI state
        setFilterList(prev => prev.filter((item) => item._id !== id));
        setDelMessage("Request processed and cleared.");
        setTimeout(() => setDelMessage(""), 3000);
      }
    })
    .catch(err => console.error("Delete error:", err));
  };

  // 2. Updated Email Action to call Delete on success
  const handleEmailAction = async (item, status) => {
    try {
      const response = await fetch('http://localhost:3000/send-outpass-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: item.email,
          name: item.name,
          status: status,
        }),
      });

      if (response.ok) {
        alert(`Email notification sent: Outpass ${status}`);
        // Trigger delete only AFTER email is sent successfully
        deleteRecord(item._id);
      } else {
        alert("Failed to send email. Record will not be deleted.");
      }
    } catch (error) {
      console.error("Error calling backend:", error);
      alert("Server error occurred.");
    }
  };

  return (
    <div className='mt-2'>
      <h2 className='text-center my-4'>{hname} Management</h2>
      
      {/* Toast/Message Notification */}
      {delMessage && (
        <div className="alert alert-success text-center mx-auto w-50" role="alert">
          {delMessage}
        </div>
      )}

      <div className='container-fluid px-4'>
        <table className="table table-bordered table-hover shadow-sm">
          <thead className='table-dark text-center'>
            <tr>
              <th>Student Name</th>
              <th>Register No</th>
              <th>Email</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            {filterList.length > 0 ? (
              filterList.map((item) => (
                <tr key={item._id} className='text-center align-middle'>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.regno}</td>
                  <td>{item.email}</td>
                  <td>{item.fromDate}</td>
                  <td>{item.toDate}</td>
                  <td>{item.reason}</td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <button 
                        className="btn btn-success btn-sm px-3" 
                        onClick={() => handleEmailAction(item, "Approved")}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn btn-danger btn-sm px-3" 
                        onClick={() => handleEmailAction(item, "Rejected")}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">No pending requests for {hname}.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HostelB;