import React, { useEffect, useState } from 'react';

function Queries() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/queries')
      .then((res) => res.json())
      .then((data) => {
        // Fix: Target the 'val' property from your response
        if (data && data.val) {
          setTodo(data.val);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

 

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading queries...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="border-bottom pb-2 mb-4">
        <h2 className="fw-bold text-dark">Student Queries</h2>
        <p className="text-muted">Review and respond to recent messages</p>
      </div>

      <div className="row">
        {todo.length > 0 ? (
          todo.map((item) => (
            <div className="col-md-6 mb-4" key={item._id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title fw-bold text-primary">{item.name}</h5>
                    <small className="text-muted">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                  <h6 className="card-subtitle mb-3 text-muted">{item.email}</h6>
                  <div className="p-3 bg-light rounded">
                    <p className="card-text mb-0 italic">"{item.message}"</p>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pb-3">
                  <a href={`mailto:${item.email}`} className="btn btn-sm btn-outline-primary">
                    Reply via Email
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <div className="alert alert-light border">No queries found.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Queries;