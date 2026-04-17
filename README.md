# Pidoy

**Framework:** Svelte JS (via Vite)

**Module:** Job Posting

**AI Tools:** Antigravity

**Prompt:** turn these into a web app in a web design using Svelte JS
Create this program...

## Installation 

1. **Install Node.js:** 
2. **Clone the Repository:**
   ```bash
   git clone <your-repository-url>
   cd <repository-directory>
   ```
   *(If you downloaded a ZIP file instead, extract it and navigate into the folder via your terminal).*
3. **Install Dependencies:**
   Run the following command to download all required packages:
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   Start the local development environment:
   ```bash
   npm run dev
   ```
5. **View the App:**
   Open your browser and navigate to the local server URL provided in your terminal.


## Screenshots

### Landing Page
![Landing Page](./screenshots/landing.png)

### Alumni Registration
![Registration Page](./screenshots/registration.png)

### Dashboard
![Dashboard Page](./screenshots/dashboard.png)

### Jobs Board
![Jobs Page](./screenshots/jobs.png)

### Job Applications
![Application Page](./screenshots/application.png)

### Profile Page
![Profile Page](./screenshots/profile.png)

**Master Prompt:**
```bash
From this university branding image (logo + colors), extract the main brand colors and identify the closest matching design style.

Then generate a complete Production-ready Progressive Web App (PWA) setup with consistent branding.

REQUIREMENTS:

1. Manifest (manifest.json):
- University-based app name and short_name
- theme_color and background_color derived from extracted branding colors
- display: "standalone"
- start_url: "/"
- Correct icon paths:
  /icons/icon-192.png
  /icons/icon-512.png

2. Fonts:
- Use Libre Baskerville as the primary font
- Provide:
  a. Google Fonts <link> tag
  b. CSS global font styling (body + headings)
  c. Proper fallback font stack

3. Service Worker (service-worker.js):
- Cache core assets: /, index.html, CSS, JS, icons
- Enable offline support
- Use a simple cache-first strategy
- Ensure correct activation and fetch handling

4. Icons:
- Provide instructions to generate 192x192 and 512x512 icons from the logo
- Ensure correct naming and folder structure (/icons/)
- Ensure icons match manifest requirements

5. Output format:
Clearly separate sections:
- Manifest JSON
- HTML Font Link
- CSS Font Setup
- Service Worker Code
- Icon Instructions

Make sure everything is consistent, production-ready, and suitable for a real PWA deployment.
```
**Error:**
```bash
fix error: can't install
```
