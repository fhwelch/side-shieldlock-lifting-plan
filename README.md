# Side Shieldlock iPhone App (PWA)

This package converts your existing v2.3 site into an iPhone home-screen web app. It retains the Supabase database and your existing workout logging features.

## Publish
1. In GitHub, open `Fhwelch/side-shieldlock-lifting-plan`.
2. Upload all seven files from this package to the repository root: `index.html`, `config.js`, `manifest.webmanifest`, `sw.js`, `apple-touch-icon.png`, `icon-192.png`, and `icon-512.png`.
3. Commit the changes and wait for GitHub Pages to publish.
4. Open https://fhwelch.github.io/side-shieldlock-lifting-plan/ in **Safari on your iPhone**.
5. Tap Share > Add to Home Screen. Turn on Open as Web App if shown. Tap Add.
6. Open Side Shieldlock from your Home Screen and sign in using the email link. Open the link in Safari if an email app's embedded browser doesn't share your session.

## Notes
- No Apple Developer account or App Store submission is needed.
- Internet is required for workout data, login and the app's HTML. The service worker only caches static icons/manifest, never member data or Supabase responses.
- Existing member access rules are unchanged. No database migration.
- iPhone push notifications are not included. They require a separate subscription and server-side notification implementation.
- This is a PWA, not an App Store native app.
