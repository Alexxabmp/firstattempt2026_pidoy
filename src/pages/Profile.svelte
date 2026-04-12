<script>
  import { currentPage } from '../store.js';

  function logout() {
    currentPage.set('landing');
  }
</script>

<div class="scroll-container bg-color">
  <div class="profile-header">
    <div class="header-bg"></div>
    <button class="edit-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
    </button>
    
    <div class="user-info">
      <div class="avatar-container">
        <img src="https://i.pravatar.cc/150?img=5" alt="Stephany" class="avatar" />
      </div>
      <h2>Stephany</h2>
      <p class="subtitle">Class of 2026 • Information Technology</p>
      <div class="verified-pill">Verified Alumni</div>
    </div>
  </div>

  <div class="content-body">
    <h3 class="section-label">Account Management</h3>
    
    <div class="settings-list">
      <button class="setting-item">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="setting-text">
          <h4>Personal Information</h4>
          <p>Manage your contact details</p>
        </div>
         <div class="chevron">›</div>
      </button>

      <button class="setting-item">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div class="setting-text">
          <h4>Academic Records</h4>
          <p>Degree and graduation details</p>
        </div>
         <div class="chevron">›</div>
      </button>

      <button class="setting-item">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        </div>
        <div class="setting-text">
          <h4>Alumni ID</h4>
          <p>View digital alumni card</p>
        </div>
         <div class="chevron">›</div>
      </button>

      <button class="setting-item">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div class="setting-text">
          <h4>Job Preferences</h4>
          <p>Career opportunities & interests</p>
        </div>
         <div class="chevron">›</div>
      </button>
    </div>

    <h3 class="section-label">App Settings</h3>
    
    <div class="settings-list">
      <button class="setting-item">
        <div class="icon-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        </div>
        <div class="setting-text">
          <h4>Settings</h4>
          <p>Privacy, security, & notifications</p>
        </div>
         <div class="chevron">›</div>
      </button>

      <button class="setting-item" on:click={logout}>
        <div class="icon-box danger">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </div>
        <div class="setting-text">
          <h4 class="text-danger">Logout</h4>
          <p>Sign out of your account</p>
        </div>
         <div class="chevron">›</div>
      </button>
    </div>
    <div style="height: 40px;"></div>
  </div>
</div>

<style>
  .bg-color {
    background-color: var(--color-bg);
  }

  .profile-header {
    position: relative;
    height: 300px;
    background: var(--color-primary-dark);
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 20px rgba(10, 28, 104, 0.2);
    overflow: hidden;
  }

  .header-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(10, 28, 104, 0.4), rgba(0, 11, 51, 1));
    z-index: 1;
  }
  
  /* Adding a building-like pattern to background */
  .header-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.15;
    background-image: 
      linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
      linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px);
    background-size: 20px 40px;
  }

  .edit-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    background: none;
    color: white;
    z-index: 10;
    padding: 8px;
  }

  .edit-btn svg {
    width: 20px;
    height: 20px;
  }

  .user-info {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .avatar-container {
    width: 90px;
    height: 90px;
    background: #FFAD99;
    border-radius: 50%;
    padding: 4px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0 2px rgba(255,255,255,0.2) inset;
  }

  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-info h2 {
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 12px;
  }

  .verified-pill {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 6px 16px;
    border-radius: 16px;
    font-size: 11px;
    font-weight: 500;
  }

  .content-body {
    padding: 24px;
    position: relative;
    z-index: 10;
  }

  .section-label {
    font-size: 12px;
    color: var(--color-text-light);
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 8px;
    padding-left: 8px;
  }

  .settings-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }

  .setting-item {
    background: white;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    box-shadow: var(--card-shadow);
    text-align: left;
    transition: transform 0.1s;
  }

  .setting-item:active {
    transform: scale(0.98);
  }

  .icon-box {
    width: 44px;
    height: 44px;
    background: var(--color-bg);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  .icon-box svg {
    width: 20px;
    height: 20px;
  }

  .icon-box.danger {
    background: #FFF1F1;
    color: #E02424;
  }

  .setting-text {
    flex: 1;
  }

  .setting-text h4 {
    font-size: 14px;
    color: var(--color-text-main);
    margin-bottom: 4px;
  }

  .setting-text p {
    font-size: 11px;
    color: var(--color-text-light);
  }

  .text-danger {
    color: #E02424 !important;
  }

  .chevron {
    color: #D1D5DB;
    font-size: 24px;
    padding-left: 8px;
  }
</style>
