<script>
  import { currentPage } from '../store.js';

  function setPage(page) {
    currentPage.set(page);
  }

  const icons = {
    jobs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6M16 9V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v4M22 9H2v4h20V9z"/></svg>',
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    notifications: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  };

  $: isActive = (page) => $currentPage === page || ($currentPage === 'applications' && page === 'jobs');
</script>

<div class="sidebar">
  <div class="logo-area">
    <div class="logo-shield"></div>
    <h3>Blue Links</h3>
  </div>

  <nav class="nav-menu">
    <button class="nav-item" class:active={isActive('dashboard')} on:click={() => setPage('dashboard')}>
      <div class="icon">{@html icons.home}</div>
      <span>Home</span>
    </button>
    <button class="nav-item" class:active={isActive('jobs')} on:click={() => setPage('jobs')}>
      <div class="icon">{@html icons.jobs}</div>
      <span>Jobs</span>
    </button>
    <button class="nav-item" class:active={isActive('network')} on:click={() => {}}>
      <div class="icon">{@html icons.network}</div>
      <span>Network</span>
    </button>
    <button class="nav-item" class:active={isActive('notifications')} on:click={() => {}}>
      <div class="icon">{@html icons.notifications}</div>
      <span>Notifications</span>
    </button>
    <button class="nav-item" class:active={isActive('profile')} on:click={() => setPage('profile')}>
      <div class="icon">{@html icons.profile}</div>
      <span>Profile</span>
    </button>
  </nav>

  <div class="sidebar-footer">
    <p>© 2026 Ateneo Knights</p>
  </div>
</div>

<style>
  .sidebar {
    width: 280px;
    height: 100vh;
    background-color: var(--color-primary-dark);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    box-shadow: 4px 0 24px rgba(0,0,0,0.1);
    z-index: 100;
  }

  .logo-area {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 32px;
    margin-bottom: 48px;
  }

  .logo-shield {
    width: 40px;
    height: 48px;
    background-color: white;
    clip-path: polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-area h3 {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    padding: 0 16px;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 16px;
    background: none;
    border: none;
    color: var(--color-text-light);
    font-size: 15px;
    font-weight: 500;
    padding: 16px;
    border-radius: 12px;
    transition: all 0.2s;
    text-align: left;
    width: 100%;
  }

  .nav-item:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }

  .nav-item.active {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-weight: 600;
  }

  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .sidebar-footer {
    padding: 0 32px;
    font-size: 12px;
    color: var(--color-text-light);
    opacity: 0.5;
  }
</style>
