<script>
  import { currentPage } from '../store.js';

  function goBack() {
    currentPage.set('landing');
  }

  function createAccount() {
    currentPage.set('dashboard');
  }
</script>

<div class="scroll-container register-container">
  <div class="background-overlay"></div>
  
  <div class="header">
    <button class="back-btn" on:click={goBack}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
    </button>
    <h1 class="title">ALUMNI REGISTRATION</h1>
    <div style="width: 24px"></div> <!-- spacer -->
  </div>

  <div class="profile-placeholder">
    <div class="circle">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
    <p>Register to reconnect with the Ateneo community</p>
  </div>

  <form class="form-container" on:submit|preventDefault={createAccount}>
    <div class="input-group">
      <label>FULL NAME</label>
      <input type="text" placeholder="Juan dela Cruz" />
    </div>

    <div class="input-group">
      <label>GRADUATION YEAR</label>
      <input type="text" placeholder="YYYY" />
    </div>

    <div class="input-group">
      <label>EMAIL</label>
      <input type="email" placeholder="example@addu.edu.ph" />
    </div>

    <div class="input-group">
      <label>PASSWORD</label>
      <input type="password" placeholder="Enter your password" />
    </div>

    <div class="biometric-card">
      <div class="bio-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      </div>
      <div class="bio-text">
        <div class="bio-header">
          <span>Enable Biometrics</span>
          <div class="toggle active"></div>
        </div>
        <p>Secure your identity with FaceID or TouchID to ensure account recovery even without email access.</p>
      </div>
    </div>

    <button type="submit" class="btn-primary">Create Account</button>
  </form>
</div>

<style>
  .register-container {
    background-color: var(--color-primary-dark);
    color: white;
    position: relative;
    padding: 24px;
    min-height: 100vh;
  }

  .background-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(to bottom, rgba(10, 28, 104, 0.8), rgba(0, 11, 51, 1));
    z-index: 0;
  }

  .header {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-top: 20px;
  }

  .back-btn {
    background: none;
    color: white;
    padding: 0;
  }

  .back-btn svg {
    width: 24px;
    height: 24px;
  }

  .title {
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .profile-placeholder {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 40px;
  }

  .circle {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 16px;
  }

  .circle svg {
    width: 40px;
    height: 40px;
    color: white;
  }

  .profile-placeholder p {
    font-size: 12px;
    opacity: 0.8;
  }

  .form-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }

  .input-group label {
    display: block;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }

  .input-group input {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    border: none;
    background: white;
    font-family: inherit;
    font-size: 14px;
    color: var(--color-text-main);
  }

  .input-group input::placeholder {
    color: var(--color-text-light);
  }

  .biometric-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    display: flex;
    gap: 16px;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .bio-icon {
    width: 40px;
    height: 40px;
    background: var(--color-primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .bio-icon svg {
    width: 20px;
    height: 20px;
  }

  .bio-text {
    flex: 1;
  }

  .bio-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .toggle {
    width: 40px;
    height: 24px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    position: relative;
  }

  .toggle.active {
    background: #0066FF;
  }

  .toggle::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: 0.2s;
  }

  .toggle.active::after {
    left: 19px;
  }

  .bio-text p {
    font-size: 11px;
    opacity: 0.8;
    line-height: 1.4;
  }

  .btn-primary {
    background: var(--color-primary-light);
    margin-top: auto;
  }
</style>
