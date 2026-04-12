<script>
  export let title = '';
  export let subtitle = '';
  export let avatar = '';
</script>

<div class="header-container">
  <div class="pattern-overlay"></div>
  <div class="content">
    {#if title}
      <h1 class="title">{title}</h1>
    {/if}
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
    <slot />
  </div>
  {#if avatar}
    <img src={avatar} alt="User Avatar" class="avatar" />
  {/if}
</div>

<style>
  .header-container {
    background: var(--color-primary);
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
    min-height: 180px;
    padding: 60px 24px 30px;
    position: relative;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: white;
    box-shadow: 0 4px 20px rgba(10, 28, 104, 0.2);
    overflow: hidden;
  }

  .pattern-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    opacity: 0.1;
    background-image: radial-gradient(white 2px, transparent 2px), radial-gradient(white 2px, transparent 2px);
    background-position: 0 0, 20px 20px;
    background-size: 40px 40px;
    pointer-events: none;
  }

  .content {
    position: relative;
    z-index: 1;
    flex: 1;
  }

  .title {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .subtitle {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 16px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
</style>
