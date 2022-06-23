import "./dashboard.css";

function Dashboard() {
  return (
    <div class="dashboard">
      <div class="dashboard-nav">
        <header>
          <a href="/" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </a>
          <a href="#" class="brand-logo">
            <i class="fas fa-anchor"></i>
            <span>Paragonix</span>
          </a>
        </header>
        <nav class="dashboard-nav-list">
          <a href="/" class="dashboard-nav-item">
            <i class="fas fa-home"></i>Dashboard
          </a>
          <div class="nav-item-divider"></div>
          <a href="/upload" class="dashboard-nav-item">
            <i class="fas fa-file-upload"></i> Upload
          </a>
        </nav>
      </div>
      <div class="dashboard-app">
        <header class="dashboard-toolbar">
          <a href="#!" class="menu-toggle">
            <i class="fas fa-bars"></i>
          </a>
        </header>

        <div class="chart">
          <canvas id="myChart"></canvas>
        </div>
        <div id="dane"></div>
      </div>
    </div>
  );
}

export default Dashboard;
