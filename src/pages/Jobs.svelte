<script>
  import PatternHeader from '../components/PatternHeader.svelte';
  import { currentPage } from '../store.js';

  function goToApplications() {
    currentPage.set('applications');
  }
</script>

<div class="scroll-container bg-color">
  <div class="jobs-header-wrap">
    <div class="pattern-bg"></div>
    <div class="tabs-container">
      <div class="tabs">
        <button class="tab active">Job Board</button>
        <button class="tab" on:click={goToApplications}>Applications</button>
      </div>
    </div>
  </div>

  <div class="content-body">
    <!-- Search Bar -->
    <div class="search-bar">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" placeholder="Search roles, companies, or keywords" />
      <button class="filter-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6"/></svg>
      </button>
    </div>

    <!-- Active Filters -->
    <div class="filters">
      <span class="filter-label">Filters:</span>
      <div class="filter-pill">Information Technology <span>×</span></div>
      <div class="filter-pill">Davao City <span>×</span></div>
    </div>

    <!-- Partner Firms -->
    <h3 class="section-title">Partner Firms in Davao</h3>
    <div class="partner-scroll">
      <div class="partner-card">
        <h4 class="company-name">SkyTech Davao</h4>
        <p class="role-name">Junior Full Stack Developer</p>
        <span class="priority-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:2px;display:inline-block;vertical-align:middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Blue Knight Priority
        </span>
        <div class="card-footer">
          <span class="salary">🗋 ₱90k - ₱110k</span>
          <span class="location">📍 Davao City</span>
        </div>
      </div>
      <div class="partner-card">
        <h4 class="company-name">Shinsen Davao</h4>
        <p class="role-name">Senior Full Stack Developer</p>
        <span class="priority-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:2px;display:inline-block;vertical-align:middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Blue Knight Priority
        </span>
        <div class="card-footer">
          <span class="salary">🗋 ₱100k - ₱150k</span>
          <span class="location">📍 Davao City</span>
        </div>
      </div>
    </div>

    <!-- Jobs For You -->
    <div class="section-title-wrap">
      <h3 class="section-title">Jobs For You</h3>
      <button class="text-btn">View all</button>
    </div>
    
    <div class="job-list">
      <div class="job-card">
        <h4 class="job-title">Senior Software Engineer</h4>
        <p class="job-company">Davao Tech Solutions</p>
        <p class="job-desc">Join our growing team building innovative web applications for local businesses.</p>
        
        <div class="tags-row">
          <span class="priority-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:2px;display:inline-block;vertical-align:middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Blue Knight Priority</span>
          <span class="category-tag">&lt;&gt; Information Technology</span>
        </div>
        
        <div class="job-details-grid">
          <div class="detail-item">📍 Davao City</div>
          <div class="detail-item">💼 Full-time</div>
          <div class="detail-item">📅 Posted 1/15/2024</div>
        </div>

        <div class="job-card-footer">
          <span class="job-salary">🗋 ₱60k - ₱90k</span>
          <button class="apply-btn">Apply Now</button>
        </div>
      </div>

      <div class="job-card">
        <h4 class="job-title">Systems Analyst</h4>
        <p class="job-company">Global Engineering Corp</p>
        <p class="job-desc">Join our growing team building innovative web applications for local businesses.</p>
        
        <div class="tags-row">
          <span class="priority-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:2px;display:inline-block;vertical-align:middle;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Blue Knight Priority</span>
          <span class="category-tag">&lt;&gt; Information Technology</span>
        </div>
        
        <div class="job-details-grid" style="visibility: hidden;">
          <!-- Using hidden to just keep spacing if needed or just omitted since it's cut off in design -->
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
    padding: 0 24px;
    margin-top: -24px;
    position: relative;
    z-index: 10;
  }

  .search-bar {
    background: white;
    border-radius: 16px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: var(--card-shadow);
    margin-bottom: 16px;
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

  .filter-btn {
    background: var(--color-primary);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .filter-btn svg {
    width: 16px;
    height: 16px;
  }

  .filters {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .filter-label {
    font-size: 11px;
    color: var(--color-text-light);
    font-weight: 600;
  }

  .filter-pill {
    background: var(--color-primary);
    color: white;
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
  }

  .filter-pill span {
    font-size: 14px;
    cursor: pointer;
    line-height: 1;
  }

  .section-title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .section-title {
    font-size: 15px;
    color: var(--color-text-main);
  }
  
  h3.section-title {
    margin-bottom: 12px;
  }

  .text-btn {
    background: none;
    color: var(--color-primary);
    font-size: 12px;
    font-weight: 600;
  }

  .partner-scroll {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .partner-card {
    background: white;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid var(--color-primary-light);
    box-shadow: 0 4px 12px rgba(26, 52, 160, 0.08);
  }

  .company-name {
    font-size: 14px;
    color: var(--color-text-main);
    margin-bottom: 4px;
  }

  .role-name {
    font-size: 12px;
    font-weight: 600;
    color: var(--color-text-main);
    margin-bottom: 12px;
  }

  .priority-tag {
    display: inline-block;
    background: var(--color-status-blue-bg);
    color: var(--color-status-blue-text);
    font-size: 10px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .job-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
  }

  .job-card {
    background: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: var(--card-shadow);
  }

  .job-title {
    font-size: 16px;
    color: var(--color-text-main);
    margin-bottom: 4px;
  }

  .job-company {
    font-size: 12px;
    color: var(--color-text-muted);
    margin-bottom: 12px;
  }

  .job-desc {
    font-size: 12px;
    color: var(--color-text-main);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .tags-row {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .category-tag {
    display: inline-block;
    background: var(--color-status-yellow-bg);
    color: var(--color-status-yellow-text);
    font-size: 10px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .job-details-grid {
    display: flex;
    gap: 16px;
    font-size: 11px;
    color: var(--color-text-muted);
    margin-bottom: 20px;
  }

  .job-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    padding-top: 16px;
  }

  .job-salary {
    font-size: 12px;
    font-weight: 700;
    color: var(--color-primary);
  }

  .apply-btn {
    background: var(--color-primary);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
  }
</style>
