<script>
  import { currentPage } from '../store.js';

  function goToJobs() {
    currentPage.set('jobs');
  }
</script>

<div class="scroll-container bg-color">
  <div class="jobs-header-wrap">
    <div class="pattern-bg"></div>
    <div class="tabs-container">
      <div class="tabs">
        <button class="tab" on:click={goToJobs}>Job Board</button>
        <button class="tab active">Applications</button>
      </div>
    </div>
  </div>

  <div class="content-body">
    <!-- Search Bar -->
    <div class="search-bar">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" placeholder="Search roles, companies, or keywords" />
    </div>

    <!-- Application Status Filters -->
    <div class="status-filters">
      <button class="status-pill active">All</button>
      <button class="status-pill">Under Review</button>
      <button class="status-pill">Interviewing</button>
      <button class="status-pill">Shortlisted</button>
    </div>

    <!-- Applications List -->
    <div class="app-list">
      <!-- Under Review -->
      <div class="app-card border-left-yellow">
        <div class="app-header">
          <div>
            <h4 class="job-title">Senior Software Engineer</h4>
            <p class="job-company">Davao Tech Solutions</p>
          </div>
          <span class="status-badge yellow">• Under Review</span>
        </div>
        
        <div class="tags-row">
          <span class="priority-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:2px;display:inline-block;vertical-align:middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Blue Knight Priority</span>
          <span class="category-tag">&lt;&gt; Information Technology</span>
        </div>
        
        <div class="app-footer">
          <div class="meta-info">
            <span>🕒 Applied 2d ago</span>
            <span>📍 Davao City</span>
          </div>
          <button class="text-btn">View Details</button>
        </div>
      </div>

      <!-- Shortlisted -->
      <div class="app-card border-left-green">
        <div class="app-header">
          <div>
            <h4 class="job-title">Product Designer</h4>
            <p class="job-company">Global Engineering Corp</p>
          </div>
          <span class="status-badge green">• Shortlisted</span>
        </div>
        
        <div class="alert-box green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
          <p>Your profile stood out! The hiring manager would like to schedule an initial screening.</p>
        </div>
        
        <div class="app-footer">
          <div class="meta-info">
            <span>🕒 Applied 5d ago</span>
            <span>🗋 ₱80k - ₱120k</span>
          </div>
          <button class="btn-sm primary">Book Interview</button>
        </div>
      </div>

      <!-- Accepted -->
      <div class="app-card border-left-blue">
        <div class="app-header">
          <div>
            <h4 class="job-title">Junior Full Stack Developer</h4>
            <p class="job-company">SkyTech Davao</p>
          </div>
          <span class="status-badge blue">• Accepted</span>
        </div>
        
        <button class="btn-full primary">View Acceptance Details &rarr;</button>
        
        <div class="app-footer mt-12">
          <div class="meta-info">
            <span>🕒 Applied 1w ago</span>
            <span>💼 Remote</span>
          </div>
          <span class="text-blue font-bold">Pending</span>
        </div>
      </div>

      <!-- Not Selected -->
      <div class="app-card disabled">
        <div class="app-header">
          <div>
            <h4 class="job-title">Junior Systems Analyst</h4>
            <p class="job-company">Build-IT Davao</p>
          </div>
          <span class="status-badge gray">Not Selected</span>
        </div>
        
        <div class="app-footer">
          <div class="meta-info">
            <span>🕒 Applied 2w ago</span>
            <span>📍 Davao City</span>
          </div>
        </div>
      </div>
      
    </div>
    <div style="height: 40px"></div>
  </div>
</div>

<style>
  .bg-color {
    background-color: var(--color-bg);
  }

  .jobs-header-wrap {
    position: relative;
    height: 140px;
    background: var(--color-primary);
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }

  .pattern-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.1;
    background-image: radial-gradient(white 2px, transparent 2px), radial-gradient(white 2px, transparent 2px);
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
    z-index: 1;
    pointer-events: none;
  }

  .tabs-container {
    position: relative;
    z-index: 2;
  }

  .tabs {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 4px;
    display: flex;
    backdrop-filter: blur(10px);
  }

  .tab {
    background: none;
    color: white;
    padding: 6px 16px;
    border-radius: 16px;
    font-size: 13px;
    font-weight: 600;
    opacity: 0.8;
  }

  .tab.active {
    background: white;
    color: var(--color-primary);
    opacity: 1;
  }

  .content-body {
    padding: 0 20px;
    margin-top: -24px;
    position: relative;
    z-index: 10;
  }

  .search-bar {
    background: white;
    border-radius: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: var(--card-shadow);
    margin-bottom: 20px;
  }

  .search-icon {
    width: 20px;
    height: 20px;
    color: var(--color-text-light);
  }

  .search-bar input {
    flex: 1;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 13px;
    color: var(--color-text-main);
  }

  .status-filters {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 8px;
    margin-bottom: 16px;
    scrollbar-width: none;
  }
  
  .status-filters::-webkit-scrollbar {
    display: none;
  }

  .status-pill {
    background: white;
    color: var(--color-text-muted);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    border: 1px solid transparent;
  }

  .status-pill.active {
    background: var(--color-primary-dark);
    color: white;
  }

  .app-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
  }

  .app-card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: var(--card-shadow);
    position: relative;
    overflow: hidden;
  }

  .border-left-yellow::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0; width: 4px;
    background: #F5A623;
  }

  .border-left-green::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0; width: 4px;
    background: #00B368;
  }

  .border-left-blue::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0; width: 4px;
    background: var(--color-primary);
  }

  .app-card.disabled {
    opacity: 0.6;
    background: #F9FAFB;
  }

  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }

  .job-title {
    font-size: 15px;
    color: var(--color-text-main);
    margin-bottom: 4px;
  }

  .job-company {
    font-size: 12px;
    color: var(--color-text-muted);
  }

  .status-badge {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 12px;
  }

  .status-badge.yellow {
    background: var(--color-status-yellow-bg);
    color: var(--color-status-yellow-text);
  }

  .status-badge.green {
    background: var(--color-status-green-bg);
    color: var(--color-status-green-text);
  }

  .status-badge.blue {
    background: var(--color-status-blue-bg);
    color: var(--color-status-blue-text);
  }

  .status-badge.gray {
    background: #F3F4F6;
    color: #9CA3AF;
  }

  .tags-row {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .priority-tag, .category-tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .priority-tag {
    background: var(--color-status-blue-bg);
    color: var(--color-status-blue-text);
  }

  .category-tag {
    background: var(--color-status-yellow-bg);
    color: var(--color-status-yellow-text);
  }

  .alert-box {
    border-radius: 8px;
    padding: 12px;
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    font-size: 11px;
    line-height: 1.4;
    font-weight: 500;
  }

  .alert-box.green {
    background: var(--color-status-green-bg);
    color: var(--color-status-green-text);
  }

  .alert-box svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .app-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .mt-12 {
    margin-top: 12px;
  }

  .meta-info {
    display: flex;
    gap: 16px;
    font-size: 11px;
    color: var(--color-text-muted);
  }

  .text-btn {
    background: none;
    color: var(--color-primary);
    font-size: 12px;
    font-weight: 600;
  }

  .btn-sm {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
  }

  .btn-full {
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 600;
  }

  .primary {
    background: var(--color-primary);
    color: white;
  }

  .text-blue {
    color: var(--color-primary);
  }
  
  .font-bold {
    font-weight: 700;
    font-size: 11px;
  }
</style>
