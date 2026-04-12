<script>
  import { currentPage } from '../store.js';

  function setPage(page) {
    currentPage.set(page);
  }

  // Generic SVG icons since we don't have the assets
  const icons = {
    jobs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6M16 9V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v4M22 9H2v4h20V9z"/></svg>',
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>',
    notifications: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>',
    profile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  };

  $: isActive = (page) => $currentPage === page || ($currentPage === 'applications' && page === 'jobs');
</script>

<div class="nav-container">
  <button class="nav-item" class:active={isActive('jobs')} on:click={() => setPage('jobs')}>
    <div class="icon">{@html icons.jobs}</div>
    <span>Jobs</span>
  </button>
  <button class="nav-item" class:active={isActive('network')} on:click={() => {}}>
    <div class="icon">{@html icons.network}</div>
    <span>Network</span>
  </button>
  <button class="nav-item home-btn" class:active={isActive('dashboard')} on:click={() => setPage('dashboard')}>
    <div class="icon">{@html icons.home}</div>
    <span>Home</span>
  </button>
  <button class="nav-item" class:active={isActive('notifications')} on:click={() => {}}>
    <div class="icon">{@html icons.notifications}</div>
    <span>Notifications</span>
  </button>
  <button class="nav-item" class:active={isActive('profile')} on:click={() => setPage('profile')}>
    <div class="icon">{@html icons.profile}</div>
    <span>Profile</span>
  </button>
</div>

<style>
  .nav-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: var(--color-primary-dark);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 0 16px 16px;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
    z-index: 100;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: var(--color-text-light);
    font-size: 11px;
    transition: all 0.2s;
    opacity: 0.6;
    padding-top: 16px;
  }

  .nav-item.active {
    color: white;
    opacity: 1;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .nav-item.active .icon {
    transform: translateY(-2px);
  }
</style>
