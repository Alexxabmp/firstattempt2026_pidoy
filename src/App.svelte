<script>
  import { currentPage } from './store.js';
  import Sidebar from './components/Sidebar.svelte';
  
  import Landing from './pages/Landing.svelte';
  import Register from './pages/Register.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Jobs from './pages/Jobs.svelte';
  import Applications from './pages/Applications.svelte';
  import Profile from './pages/Profile.svelte';

  $: isGuest = $currentPage === 'landing' || $currentPage === 'register';
</script>

<div class="app-container" class:guest={isGuest}>
  {#if !isGuest}
    <Sidebar />
  {/if}

  <div class="main-content-area">
    {#if $currentPage === 'landing'}
      <Landing />
    {:else if $currentPage === 'register'}
      <Register />
    {:else if $currentPage === 'dashboard'}
      <Dashboard />
    {:else if $currentPage === 'jobs'}
      <Jobs />
    {:else if $currentPage === 'applications'}
      <Applications />
    {:else if $currentPage === 'profile'}
      <Profile />
    {/if}
  </div>
</div>

<style>
  .main-content-area {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>
