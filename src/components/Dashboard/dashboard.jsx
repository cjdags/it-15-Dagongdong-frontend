import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Vite Dash</h2>
        <nav style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <a href="#" className="nav-item active">Overview</a>
          <a href="#" className="nav-item">Analytics</a>
          <a href="#" className="nav-item">Reports</a>
          <a href="#" className="nav-item">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header>
          <h1>Welcome back, Admin!</h1>
          <p style={{color: '#94a3b8'}}>Here is what's happening today.</p>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p className="value">$24,500</p>
            <span style={{color: '#10b981'}}>+12% from last month</span>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p className="value">1,284</p>
            <span style={{color: '#646cff'}}>Live Now</span>
          </div>
          <div className="stat-card">
            <h3>New Signups</h3>
            <p className="value">48</p>
            <span style={{color: '#61dafb'}}>Today</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;