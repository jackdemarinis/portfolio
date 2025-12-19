# Jack P. DeMarinis - Portfolio

Space-themed, single-page portfolio for showcasing education, skills, projects, and experience. Built as a lightweight static site (HTML/CSS/JS) that you can open locally or deploy anywhere (e.g., GitHub Pages).

## Features
- Responsive layout with fixed navbar and smooth scrolling
- Typewriter hero tagline and circular headshot
- Timeline-style experience section
- Project cards (AI/RAG focus plus capstone)
- Skills grouped by Languages, ML/AI, Systems & Deployment, and Tools & Design
- Downloadable CV button

## Project structure
```
index.html               # Content and structure
style.css                # Theme and layout
space_bg1.png            # Hero background
space_bg2.png            # CTA/background accent
Jack Headshot.png        # Circular headshot in hero
Jack_DeMarinis_CV.pdf    # Downloadable CV (linked from Contact section)
```

## Run locally
- Quick view: double-click `index.html` to open in your browser.
- Local server (optional):
  - macOS/Linux: `python3 -m http.server 5173` then open http://localhost:5173
  - Node (alternative): `npx serve .` then open the printed URL

## Customize
- Content: edit `index.html`
  - About, Education, Skills, Experience, Projects, Honors, Contact
  - Typewriter text: update the `text` constant near the bottom of `index.html`
- Headshot: replace `Jack Headshot.png` (keep the same filename for the hero image)
- CV download: replace `Jack_DeMarinis_CV.pdf` (filename is referenced by the Download button)
- Styles (colors/spacing/typography/effects): edit `style.css`

## Deploy (GitHub Pages)
1. Push this folder to a GitHub repository.
2. In the repo, go to Settings -> Pages.
3. Source: "Deploy from a branch", select `main` and `/ (root)`.
4. Save and wait for the site to build; the URL will appear at the top of the Pages settings.

Other hosts like Netlify or Vercel also work: connect the repo and deploy as a static site.

## License
Personal portfolio. If you reuse the design, please attribute and replace content with your own.
