<script>
  import { currentPage } from '../store.js';

  function goToRegister() {
    currentPage.set('register');
  }

  function goToDashboard() {
    currentPage.set('dashboard');
  }
</script>

<div class="scroll-container landing-container">
  <div class="logo-section">
    <!-- Placeholder for logo using CSS shape -->
    <div class="shield">
      <div class="inner-shield"></div>
    </div>
    <h1 class="logo-text">BLUE LINKS</h1>
    <h2 class="tagline">Rediscover. Reunite. Reconnect.</h2>
  </div>

  <div class="hero-text">
    <p>Step into the alumni portal with a Magis welcome. Rekindle the connections that defined your journey and keep your network alive with fellow blue graduates.</p>
  </div>

  <div class="info-cards">
    <div class="info-card">
      <div class="icon">👥</div>
      <div>
        <div class="card-title">Your Global Circle</div>
        <div class="card-desc">Connect with fellow alumni across the globe.</div>
      </div>
    </div>
    <div class="info-card">
      <div class="icon">🎓</div>
      <div>
        <div class="card-title">Blue Graduates United</div>
        <div class="card-desc">Stay linked to the Ateneo community worldwide.</div>
      </div>
    </div>
  </div>

  <div class="action-section">
    <button class="btn-primary" on:click={goToRegister}>
      Get Started <span>&rarr;</span>
    </button>
    <div class="login-link">
      Already have an account? <button class="link-btn" on:click={goToDashboard}>Log In</button>
    </div>
  </div>
</div>

<style>
  .landing-container {
    background-color: var(--color-card-bg);
    padding: 60px 24px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-section {
    margin-bottom: 32px;
  }

  .shield {
    width: 100px;
    height: 120px;
    background-color: var(--color-primary);
    clip-path: polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%);
    margin: 0 auto 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
  
  .inner-shield {
    width: 100%;
    height: 100%;
    background-color: white;
    clip-path: polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .inner-shield::after {
    content: "🛡️";
    font-size: 40px;
  }

  .logo-text {
    font-size: 32px;
    color: var(--color-primary);
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .tagline {
    font-family: 'Brush Script MT', cursive, serif;
    font-style: italic;
    color: var(--color-accent-gold);
    font-size: 24px;
    font-weight: 400;
  }

  .hero-text {
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-text-main);
    margin-bottom: 40px;
    padding: 0 16px;
  }

  .info-cards {
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 48px;
  }

  .info-card {
    background-color: #E6E8F2;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
  }

  .info-card .icon {
    font-size: 24px;
    color: var(--color-primary);
  }

  .card-title {
    font-weight: 700;
    color: var(--color-primary);
    font-size: 14px;
    margin-bottom: 4px;
  }

  .card-desc {
    font-size: 11px;
    color: var(--color-text-muted);
  }

  .action-section {
    width: 100%;
    max-width: 400px;
    margin-top: auto;
  }

  .btn-primary span {
    margin-left: 8px;
  }

  .login-link {
    margin-top: 24px;
    font-size: 14px;
    font-weight: 600;
  }

  .link-btn {
    background: none;
    color: var(--color-primary);
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
  }
</style>
