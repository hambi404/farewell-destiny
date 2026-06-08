/* ============================================================================
 *  THE CHRONICLE — Configuration
 * ----------------------------------------------------------------------------
 *  Paste your Bungie API key between the quotes below.
 *
 *  Get one (free) at:  https://www.bungie.net/en/Application
 *    - Create a new application
 *    - OAuth Client Type: "Not Applicable" (we only read public data)
 *    - Copy the "API Key" into the line below.
 *
 *  NOTE: On a static GitHub Pages site this key ships inside the public
 *  source. That is acceptable for a read-only, rate-limited Bungie key, but
 *  treat it as public. If you ever want to revoke it, do so from the same page.
 *
 *  The Chronicle works WITHOUT a key too — the full timeline still renders;
 *  only the live exotic-weapon artifacts from the Bungie Armory are skipped.
 * ========================================================================== */

window.CHRONICLE_CONFIG = {
// Yes, an API key. In plain text. In the frontend. I know.
// It's read-only - GET all you want, no POST, no PUT, no damage. Leak away. lol
// Have fun with 80 GET Request a Minute...
  BUNGIE_API_KEY: "585402d32f384078b03bd0cfe9ecf9b6",

  // Manifest language used for item names / lore.
  LOCALE: "en",
};
