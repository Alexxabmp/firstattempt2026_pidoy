<script>
  import PatternHeader from '../components/PatternHeader.svelte';
  import { currentPage } from '../store.js';

  function goToJobs() {
    currentPage.set('jobs');
  }
</script>

<div class="scroll-container bg-color">
  <PatternHeader 
    title="Welcome back, Stephany!" 
    subtitle="Class of 2018 • Information Technology"
    avatar="https://i.pravatar.cc/150?img=5"
  >
    <div class="header-buttons">
      <button class="header-btn">Update Profile</button>
      <button class="header-btn secondary">Digital ID</button>
    </div>
  </PatternHeader>

  <div class="content-body">
    <!-- Dashboard Card overlapping header -->
    <div class="dashboard-card">
      <h3 class="card-title">Dashboard</h3>
      <div class="dashboard-grid">
        <button class="grid-item">
          <div class="icon">📄</div>
          <span>Documents</span>
        </button>
        <button class="grid-item" on:click={goToJobs}>
          <div class="icon">💼</div>
          <span>Job Board</span>
        </button>
        <button class="grid-item">
          <div class="icon">💝</div>
          <span>Donation</span>
        </button>
        <button class="grid-item">
          <div class="icon">👥</div>
          <span>Network</span>
        </button>
      </div>
    </div>

    <!-- Latest News -->
    <div class="section-title-wrap">
      <h3>Latest News</h3>
      <button class="text-btn">View All</button>
    </div>
    <div class="news-scroll">
      <div class="news-card">
        <div class="news-img" style="background-color: #F8E6C8"></div>
        <div class="news-content">
          <span class="news-tag">Campus Update</span>
          <h4 class="news-title">Grand Alumni Homecoming 2024: Registration Now Open</h4>
          <p class="news-desc">Join thousands of Blue Knights this...</p>
        </div>
      </div>
      <div class="news-card">
        <div class="news-img" style="background-color: #E6E8F2"></div>
        <div class="news-content">
          <span class="news-tag">Infrastructure</span>
          <h4 class="news-title">Inauguration of the Martinez Sports Co...</h4>
          <p class="news-desc">A new chapter for student athletics...</p>
        </div>
      </div>
    </div>

    <!-- Upcoming Events -->
    <div class="section-title-wrap">
      <h3>Upcoming Events</h3>
      <button class="text-btn">Calendar</button>
    </div>
    <div class="event-list">
      <div class="event-card">
        <div class="event-date">
          <span class="month">Dec</span>
          <span class="day">07</span>
        </div>
        <div class="event-details">
          <h4>Alumni Webinar: Tech Trends</h4>
          <p>🕔 6:00 PM • Zoom</p>
        </div>
        <div class="event-arrow">›</div>
      </div>
    </div>
    <div style="height: 40px"></div>
  </div>
</div>

<style>
  .bg-color {
    background-color: var(--color-bg);
  }

  .header-buttons {
    display: flex;
    gap: 12px;
    margin-top: 16px;
    position: relative;
    z-index: 10;
  }

  .header-btn {
    background: white;
    color: var(--color-primary);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }

  .header-btn.secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255,255,255,0.4);
  }

  .content-body {
    padding: 0 24px;
    margin-top: -30px;
    position: relative;
    z-index: 2;
  }

  .dashboard-card {
    background: white;
    border-radius: 24px;
    padding: 24px;
    box-shadow: var(--card-shadow);
    margin-bottom: 32px;
  }

  .card-title {
    color: var(--color-primary);
    font-size: 16px;
    margin-bottom: 20px;
  }

  .dashboard-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .grid-item {
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--color-text-main);
  }

  .grid-item .icon {
    width: 48px;
    height: 48px;
    background: var(--color-bg);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: var(--color-primary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }

  .grid-item span {
    font-size: 11px;
    font-weight: 500;
  }

  .section-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .section-title-wrap h3 {
    color: var(--color-primary);
    font-size: 16px;
  }

  .text-btn {
    background: none;
    color: var(--color-primary);
    font-size: 12px;
    font-weight: 600;
  }

  .news-scroll {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 32px;
  }

  .news-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    display: flex;
    flex-direction: column;
  }

  .news-img {
    height: 120px;
    width: 100%;
  }

  .news-content {
    padding: 16px;
  }

  .news-tag {
    color: var(--color-primary);
    font-size: 10px;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
  }

  .news-title {
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 8px;
    color: var(--color-text-main);
  }

  .news-desc {
    font-size: 11px;
    color: var(--color-text-muted);
  }

  .event-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 16px;
  }

  .event-card {
    background: white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: var(--card-shadow);
  }

  .event-date {
    background: var(--color-bg);
    border-radius: 12px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.05);
  }

  .event-date .month {
    font-size: 10px;
    color: var(--color-text-muted);
    font-weight: 600;
    text-transform: uppercase;
  }

  .event-date .day {
    font-size: 16px;
    color: var(--color-primary);
    font-weight: 700;
  }

  .event-details {
    flex: 1;
  }

  .event-details h4 {
    font-size: 13px;
    margin-bottom: 4px;
    color: var(--color-text-main);
  }

  .event-details p {
    font-size: 11px;
    color: var(--color-text-muted);
  }

  .event-arrow {
    color: var(--color-primary);
    font-size: 20px;
    font-weight: 300;
  }
</style>
