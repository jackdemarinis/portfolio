# Portfolio — jackdemarinis.com

Jack P. DeMarinis's personal site: a single-page portfolio covering education,
skills, experience, projects and contact details. It is also the **design
reference** for every other site in the `webmaster` family — the deep-space
navy, ember-orange accent and Orbitron-over-Montserrat type of this page are
what `webmaster/shared/theme.css` was extracted from.

## Stack

Vanilla HTML, CSS and ES modules. No framework, no build step, no dependencies.
Fonts come from Google Fonts; everything else is served from this repo.

```
index.html                    # the whole page
CNAME                         # jackdemarinis.com
css/
  theme.css                   # vendored shared design system — DO NOT EDIT (see below)
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

## `css/theme.css` is vendored — do not edit it here

`css/theme.css` is a **generated copy**. Its source of truth is
`webmaster/shared/theme.css`, and every site in the family vendors the same
file (sites deploy independently, so they cannot share one by reference).

To change a colour, font, radius, shadow, spacing step or shared component:

```bash
# from the webmaster repo root
$EDITOR shared/theme.css
python3 scripts/sync_theme.py          # push the theme to every site
python3 scripts/sync_theme.py --check  # fail if any copy has drifted
```

Edits made directly to `css/theme.css` will be silently overwritten on the next
sync. `css/site.css` is the file to edit for anything specific to this page,
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
