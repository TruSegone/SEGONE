# SEGONE — Engineering the next.

Responsive single-page corporate site for SEGONE, built with semantic HTML, CSS, and vanilla JavaScript. The repository had no existing source, framework, package manager, or backend, so the first implementation intentionally uses a static architecture with no runtime dependencies.

## Run locally

Serve this directory with any static web server. For example, with Python installed:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. No package installation or build step is required. `index.html` is the deployable entry point and the static output is the project root.

## Enquiry form boundary

The form validates required fields and consent in the browser, then prepares a `mailto:` message for the visitor to review and send. No enquiry is sent or stored by this website. The recipient is intentionally blank because no official SEGONE contact address or email service was provided. To accept enquiries directly, configure an authorized server-side form endpoint (for example, a platform function backed by an approved email provider), add server-side validation, spam controls and rate limiting, and replace the `mailto:` action in `script.js`. Never put provider credentials in browser code. Agree and document retention and access rules before storing enquiries.

## Deployment

Deploy the repository root as static assets on the selected host; no build command is required and the output directory is `/`. `_headers` supplies baseline security headers on hosts that support this format (including Cloudflare Pages). Confirm the host's header-file conventions before using a different platform. Configure a Content Security Policy at the host after choosing font hosting and any form endpoint; the current page loads Google Fonts. Add canonical URLs and an absolute sitemap once SEGONE configures an official domain. Do not set a guessed domain.

Use HTTPS, attach an approved domain through the host, and verify TLS, security headers, page metadata, assets, mobile navigation, keyboard interactions, and enquiry delivery after deployment. Do not publish the contact form as a direct-submission channel until an authorized destination is configured.

## Brand and content notes

The geometric S SVG, wordmark treatment, and favicon are original implementation assets, not a legal clearance. The portfolio is explicitly presented as concept directions, with no client, deployment, credential, or performance claims. Adjacent capabilities are marked selective, project-dependent, or prototype to distinguish them from the current software engineering focus.

## Checks

There is no existing test or lint tooling in this empty repository. No automated tests or build were run; static delivery has no compilation step. Use browser checks at 360, 390, 768, 1024, 1440, and 1920px before deployment, alongside link, keyboard, form validation, console, network, and accessibility checks.
