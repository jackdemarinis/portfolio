# Portfolio — jackdemarinis.com

Jack P. DeMarinis's personal site: a single-page portfolio covering education,
skills, experience, projects and contact details. Its deep-space navy,
ember-orange accent and Orbitron-over-Montserrat look is the usual starting
point other sites copy (copy, not share: each site owns its own theme).

## Stack

Vanilla HTML, CSS and ES modules. No framework, no build step, no dependencies.
Fonts come from Google Fonts; everything else is served from this repo.

```
index.html                    # the whole page
CNAME                         # jackdemarinis.com
css/
  theme.css                   # this site's design tokens
  site.css                    # this site's own styles
js/
  app.js                      # ES module entry point: typewriter, reveal, timeline
favicon.webp
Jack_Headshot.webp            # hero portrait
space_bg1.webp                # hero background
space_bg2.webp                # call-to-action background
Jack_DeMarinis_Resume.pdf     # linked from Contact
CPR - Hayward Industries.pdf  # linked from Projects
design-editorial.html         # standalone alternative designs (see below)
design-signal.html
design-studio.html
```

`index.html`, `CNAME`, the PDFs and the images stay at the repo root: the
`CNAME` and every inbound link depend on those exact paths, and `webmaster`
serves this repo's root directly over HTTP.

## Run locally

The page uses an ES module, so it needs to be served over HTTP rather than
opened as a `file://` URL:

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

Edit a file and reload — there is nothing to build or watch.

## Deploy

Deployed by the [`webmaster`](../..) repo, which serves this repo's root over
HTTP at `jackdemarinis.com`. It takes the latest `main`, so pushing to `main`
here is the deploy. There is no build step and no artifact.

## Styling

`css/theme.css` holds this site's design tokens (colours, type, spacing, radii,
shadows, shared components). Nothing syncs it; edit it freely. `css/site.css` is
for anything specific to this page,
and it references `var(--token)` from the theme rather than hardcoding colours,
fonts, radii or shadows. The handful of values with no matching token are
marked `no token` in a comment where they appear.

## The design variant pages

`design-editorial.html`, `design-signal.html` and `design-studio.html` are
standalone alternative directions for the site. Each is fully self-contained —
its own embedded `<style>` block and its own type (Fraunces/Inter, IBM Plex,
Space Grotesk). They deliberately do **not** load `theme.css` or `site.css`,
because their point is to look nothing like the current design. Leave them as
they are unless one of them is being promoted to the real site.

## License

Personal portfolio. If you reuse the design, please attribute and replace the
content with your own.
