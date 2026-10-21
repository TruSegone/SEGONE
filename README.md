# SEGONE — Engineering the next.

Responsive single-page corporate site for SEGONE, built with semantic HTML, CSS, and vanilla JavaScript. The repository had no existing source, framework, package manager, or backend, so the first implementation intentionally uses a static architecture with no runtime dependencies.

## Review the source

Browse the [SEGONE repository on GitHub](https://github.com/TruSegone/SEGONE) or open the [live website](https://trusegone.github.io/SEGONE/) and the [venture directory](https://trusegone.github.io/SEGONE/ventures/).

## Run locally

Serve this directory with any static web server. For example, with Python installed:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. No package installation or build step is required. `index.html` is the deployable entry point and the static output is the project root.

## Enquiry form boundary

The form validates required fields and consent in the browser, then prepares a `mailto:` message for the visitor to review and send. No enquiry is sent or stored by this website. The recipient is intentionally blank because no official SEGONE contact address or email service was provided. To accept enquiries directly, configure an authorized server-side form endpoint (for example, a platform function backed by an approved email provider), add server-side validation, spam controls and rate limiting, and replace the `mailto:` action in `script.js`. Never put provider credentials in browser code. Agree and document retention and access rules before storing enquiries.

## Deployment

GitHub Pages deploys the static files through `.github/workflows/pages.yml`; no build command or package installation is required. The workflow publishes the homepage, the `/ventures/` directory, shared scripts and data, styles, robots file, and SVG logo. `_headers` is not applied by GitHub Pages. Configure a Content Security Policy at the host if moving to a platform that supports it; the current page loads Google Fonts. Add canonical URLs and an absolute sitemap once SEGONE configures an official domain. Do not set a guessed domain.

Use HTTPS, attach an approved domain through the host, and verify TLS, security headers, page metadata, assets, mobile navigation, keyboard interactions, and enquiry delivery after deployment. Do not publish the contact form as a direct-submission channel until an authorized destination is configured.

## Brand and content notes

The geometric S SVG, wordmark treatment, and favicon are original implementation assets, not a legal clearance. Arcade entries point to verified playable game URLs and public source repositories. Sentinel AI is labelled an active prototype, described as synthetic-data/local-first, and linked to its public repository; no live Sentinel deployment is claimed. Black Ambrella is an informational listing because no public destination was found. No client, credential, performance, or production claims are fabricated.

## Checks

There is no test or lint tooling and no compilation step in this static repository. After the ecosystem refactor, `node --check` passed for all three JavaScript files; Python's HTML parser checked both pages, internal anchors, and local asset references; the logo SVG parsed successfully; and `git diff --check` passed. Browser smoke checks confirmed both live SEGONE routes, the Arcade hub, and all three game pages load. A full automated test suite, console/network audit, and six-width visual accessibility review are not configured and were not run.
