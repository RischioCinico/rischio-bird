/* -----------------------------------------------------------------------------------
   [0100] STARTUP 
   ----------------------------------------------------------------------------------- */

// 0102: set START page
defaultPref("mailnews.start_page.enabled", false);
lockPref("mailnews.start_page.url", "about:config");
// 0104: disabilita newtab (inestistente su TB)
lockPref("browser.newtabpage.enabled", false);

/* -----------------------------------------------------------------------------------
   [0200] GEOLOCATION
   ----------------------------------------------------------------------------------- */

// 0202: disable using the OS's geolocation service
defaultPref("geo.provider.use_geoclue", false);

/* -----------------------------------------------------------------------------------
   [0300] QUIETER BIRD
   ----------------------------------------------------------------------------------- */

// 0320: disable recommendation pane in about:addons (uses Google Analytics)
lockPref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// 0321: disable recommendations in about:addons' Extensions and Themes panes
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
// 0322: disable personalized Extension Recommendations in about:addons and AMO
lockPref("browser.discovery.enabled", false);
// 0340: disable Studies
lockPref("app.shield.optoutstudies.enabled", false);
// 0341: disable Normandy/Shield
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
// 0350: disable Crash Reports
lockPref("breakpad.reportURL", "");
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
// 0351: enforce no submission of backlogged Crash Reports
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// 0360: disable Captive Portal detection
lockPref("captivedetect.canonicalURL", "");
lockPref("network.captive-portal-service.enabled", false);
// 0361: disable Network Connectivity checks
defaultPref("network.connectivity-service.enabled", false);
/* 0370: disable UI instrumentation ***/
lockPref("mail.instrumentation.postUrl", "");
lockPref("mail.instrumentation.askUser", false);
lockPref("mail.instrumentation.userOptedIn", false);
// 0371: disable about:rights notification on fresh profiles
lockPref("mail.rights.override", true);
lockPref("mail.rights.version", 1);
// 0374: prevent donation appeal page opening on fresh profiles
lockPref("app.donation.eoy.version", 2);
lockPref("app.donation.eoy.version.viewed", 999);
lockPref("app.donation.eoy.url", "");

/* -----------------------------------------------------------------------------------
   [0400] SAFE BROWSING
   ----------------------------------------------------------------------------------- */

// 0403: disable SB checks for downloads (remote)
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");

/* -----------------------------------------------------------------------------------
   [0600] BLOCK IMPLICIT OUTBOUND
   ----------------------------------------------------------------------------------- */

// 0601: disable link prefetching
lockPref("network.prefetch-next", false);
// 0602: disable DNS prefetching
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);
// 0603: disable predictor / prefetching ***/
lockPref("network.predictor.enabled", false);
lockPref("network.predictor.enable-prefetch", false);
// 0604: disable link-mouseover opening connection to linked server
lockPref("network.http.speculative-parallel-limit", 0);
// 0610: enforce no "Hyperlink Auditing" (click tracking)
lockPref("browser.send_pings", false);
// 0610: don't refresh nor reload pages when tab/window is not active or in idle state
lockPref("browser.meta_refresh_when_inactive.disabled", true);

/* -----------------------------------------------------------------------------------
   [0700] DNS / DoH / PROXY / SOCKS
   ----------------------------------------------------------------------------------- */

// 0702: set the proxy server to do any DNS lookups when using SOCKS
lockPref("network.proxy.socks_remote_dns", true);
// 0703: disable using UNC (Uniform Naming Convention) paths
lockPref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// 0704: disable GIO as a potential proxy bypass vector [FF60+]
lockPref("network.gio.supported-protocols", ""); // [HIDDEN PREF]

/* -----------------------------------------------------------------------------------
   [0800] LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
   ----------------------------------------------------------------------------------- */

// 0801: disable location bar making speculative connections
lockPref("browser.urlbar.speculativeConnect.enabled", false);
// 0802: disable location bar contextual suggestions
lockPref("browser.urlbar.quicksuggest.enabled", false);
lockPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
lockPref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// 0803: disable live search suggestions
lockPref("browser.search.suggest.enabled", false);
lockPref("browser.urlbar.suggest.searches", false);
// 0805: disable urlbar trending search suggestions
lockPref("browser.urlbar.trending.featureGate", false);
// 0806: disable urlbar suggestions
lockPref("browser.urlbar.addons.featureGate", false);
lockPref("browser.urlbar.amp.featureGate", false);
lockPref("browser.urlbar.fakespot.featureGate", false);
lockPref("browser.urlbar.mdn.featureGate", false);
lockPref("browser.urlbar.weather.featureGate", false);
lockPref("browser.urlbar.wikipedia.featureGate", false);
lockPref("browser.urlbar.yelp.featureGate", false);
// 0807: disable urlbar clipboard suggestion
lockPref("browser.urlbar.clipboard.featureGate", false);
// 0808: disable recent searches
lockPref("browser.urlbar.recentsearches.featureGate", false);
// 0810: disable search and form history
lockPref("browser.formfill.enable", false);
// 0815: disable tab-to-search
lockPref("browser.urlbar.suggest.engines", false);
// 0820: disable coloring of visited links
defaultPref("layout.css.visited_links_enabled", false);

/* -----------------------------------------------------------------------------------
   [0900] PASSWORDS
   ----------------------------------------------------------------------------------- */

// 0903: disable auto-filling username & password form fields
lockPref("signon.autofillForms", false);
// 0904: disable formless login capture for Password Manager
lockPref("signon.formlessCapture.enabled", false);
// 0905: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
lockPref("network.auth.subresource-http-auth-allow", 0);

/* -----------------------------------------------------------------------------------
   [1000] DISK AVOIDANCE
   ----------------------------------------------------------------------------------- */

// 1001: disable disk cache
lockPref("browser.cache.disk.enable", false);
// 1002: set media cache in Private Browsing to in-memory and increase its maximum size
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true);
lockPref("media.memory_cache_max_size", 65536);
// 1003: disable storing extra session data
lockPref("browser.sessionstore.privacy_level", 2);
// 1901: disable disk cache for messages not in offline store
lockPref("mail.imap.use_disk_cache2", false);

/* -----------------------------------------------------------------------------------
   [1200] HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
   ----------------------------------------------------------------------------------- */

// 1201: require safe negotiation
lockPref("security.ssl.require_safe_negotiation", true);
// 1206: disable TLS1.3 0-RTT (round-trip time)
lockPref("security.tls.enable_0rtt_data", false);
// 1211: enforce OCSP fetching to confirm current validity of certificates
lockPref("security.OCSP.enabled", 1);
// 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail
lockPref("security.OCSP.require", true);
// 1223: enable strict PKP (Public Key Pinning)
lockPref("security.cert_pinning.enforcement_level", 2);
// 1224: enable CRLite
lockPref("security.remote_settings.crlite_filters.enabled", true);
lockPref("security.pki.crlite_mode", 2);
// 1241: disable insecure passive content (such as images) on https pages
lockPref("security.mixed_content.block_display_content", true);
// 1244: enable HTTPS-Only mode in all windows
lockPref("dom.security.https_only_mode", true);
lockPref("dom.security.https_only_mode_pbm", true);
// 1245: enable HTTPS-Only mode for local resources
lockPref("dom.security.https_only_mode.upgrade_local", true);
// 1246: disable HTTP background requests
lockPref("dom.security.https_only_mode_send_http_background_request", false);
// 1270: display warning on the padlock for "broken security" (if 1201 is false)
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// 1272: display advanced information on Insecure Connection warning pages
lockPref("browser.xul.error_pages.expert_bad_cert", true);
// 1280: display warnings when insecure HTTP connections are made
lockPref("security.warn_entering_weak", true);
lockPref("security.warn_leaving_secure", true);
lockPref("security.warn_viewing_mixed", true);

/* -----------------------------------------------------------------------------------
   [1600] REFERERS
   ----------------------------------------------------------------------------------- */

// 1602: control the amount of cross-origin information to send
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);

/* -----------------------------------------------------------------------------------
   [2000] PLUGINS / MEDIA / WEBRTC
   ----------------------------------------------------------------------------------- */

// 2002: force WebRTC inside the proxy
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// 2003: force a single network interface for ICE candidates generation
lockPref("media.peerconnection.ice.default_address_only", true);
// 2004: force exclusion of private IPs from ICE candidates
lockPref("media.peerconnection.ice.no_host", true);
// 2020: disable GMP (Gecko Media Plugins)
lockPref("media.gmp-provider.enabled", false);

/* -----------------------------------------------------------------------------------
   [2400] DOM (DOCUMENT OBJECT MODEL)
   ----------------------------------------------------------------------------------- */

// 2402: prevent scripts from moving and resizing open windows
lockPref("dom.disable_window_move_resize", true);

/* -----------------------------------------------------------------------------------
   [2600] MISCELLANEOUS
   ----------------------------------------------------------------------------------- */

// 2603: remove temp files opened from non-PB windows with an external application
lockPref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
// 2606: disable UITour backend so there is no chance that a remote page can use it
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");
// 2616: remove special permissions for certain mozilla domains
lockPref("permissions.manager.defaultsUrl", "");
// 2619: use Punycode in Internationalized Domain Names to eliminate possible spoofing
lockPref("network.IDN_show_punycode", true);
// 2620: enforce PDFJS, disable PDFJS scripting
lockPref("pdfjs.disabled", false);
lockPref("pdfjs.enableScripting", false);
// 2624: disable middle click on new tab button opening URLs or searches using clipboard
lockPref("browser.tabs.searchclipboardfor.middleclick", false);
// 2630: disable content analysis by DLP (Data Loss Prevention) agents
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.default_result", 0);
// 2635: disable referrer and storage access for resources injected by content scripts
lockPref("privacy.antitracking.isolateContentScriptResources", true);
// 2640: disable CSP Level 2 Reporting
lockPref("security.csp.reporting.enabled", false);
// 2651: enable user interaction for security by always asking where to download
lockPref("browser.download.useDownloadDir", false);
// 2653: disable adding downloads to the system's "recent documents" list
lockPref("browser.download.manager.addToRecentDocs", false);
// 2654: enable user interaction for security by always asking how to handle new mimetypes
lockPref("browser.download.always_ask_before_handling_new_types", true);
// 2660: limit allowed extension directories
lockPref("extensions.enabledScopes", 5); // [HIDDEN PREF]
lockPref("extensions.autoDisableScopes", 15);

/* -----------------------------------------------------------------------------------
   [4500] OPTIONAL RFP (resistFingerprinting)
   ----------------------------------------------------------------------------------- */

// 4501: enable RFP
defaultPref("privacy.resistFingerprinting", true); 
// 4502: set RFP new window size max rounded values
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
// 4503: disable mozAddonManager Web API
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
// 4506: disable RFP spoof english prompt
defaultPref("privacy.spoof_english", 1);
// 4511: disable using system accent colors
lockPref("widget.non-native-theme.use-theme-accent", false);
// 4520: disable WebGL (Web Graphics Library)
defaultPref("webgl.disabled", true);

/* -----------------------------------------------------------------------------------
   [5000] OPTIONAL OPSEC
   ----------------------------------------------------------------------------------- */

// 5004: disable permissions manager from reading or writing to disk [FF41+] [RESTART]
defaultPref("permissions.memory_only", true); // [HIDDEN PREF]
// 5006: disable favicons in history and bookmarks
lockPref("browser.chrome.site_icons", false);
// 5007: exclude "Undo Closed Tabs" in Session Restore
lockPref("browser.sessionstore.max_tabs_undo", 0);
// 5010: disable location bar suggestion types
lockPref("browser.urlbar.suggest.history", false);
lockPref("browser.urlbar.suggest.bookmark", false);
lockPref("browser.urlbar.suggest.openpage", false);
lockPref("browser.urlbar.suggest.topsites", false);
// 5011: disable location bar dropdown
lockPref("browser.urlbar.maxRichResults", 0);
// 5012: disable location bar autofill
lockPref("browser.urlbar.autoFill", false);
// 5013: disable browsing and download history
lockPref("places.history.enabled", false);
// 5017: disable Form Autofill
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);
// 5018: limit events that can cause a pop-up ***/
defaultPref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// 5019: disable page thumbnail collection
lockPref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]

/* -----------------------------------------------------------------------------------
   [5500] OPTIONAL HARDENING
   ----------------------------------------------------------------------------------- */

// 5501: disable MathML (Mathematical Markup Language)
defaultPref("mathml.disabled", true);
// 5502: disable in-content SVG (Scalable Vector Graphics)
defaultPref("svg.disabled", true);
// 5503: disable graphite
defaultPref("gfx.font_rendering.graphite.enabled", false);
// 5504: disable asm.js [FF22+]
defaultPref("javascript.options.asmjs", false);
// 5505: disable Ion and baseline JIT to harden against JS exploits
defaultPref("javascript.options.ion", false);
defaultPref("javascript.options.baselinejit", false);
defaultPref("javascript.options.native_regexp", false);
defaultPref("javascript.options.jit_trustedprincipals", true);
// 5506: disable WebAssembly
defaultPref("javascript.options.wasm", false);
// 5507: disable rendering of SVG OpenType fonts
defaultPref("gfx.font_rendering.opentype_svg.enabled", false);
// 5508: disable all DRM (Digital Rights Management) content (EME: Encryption Media Extension)
defaultPref("media.eme.enabled", false);
defaultPref("browser.eme.ui.enabled", false);
// 5510: control when to send a cross-origin referer
defaultPref("network.http.referer.XOriginPolicy", 2);
// 5590: show a prompt when opening a link in external applications
defaultPref("security.external_protocol_requires_permission", true);

/* -----------------------------------------------------------------------------------
   [7000] DON'T BOTHER
   ----------------------------------------------------------------------------------- */

// 7001: disable APIs
defaultPref("geo.enabled", false);
defaultPref("full-screen-api.enabled", false);
// 7007: referers
defaultPref("network.http.sendRefererHeader", 0);
defaultPref("network.http.referer.trimmingPolicy", 0);
// 7008: set the default Referrer Policy
defaultPref("network.http.referer.defaultPolicy", 0);
defaultPref("network.http.referer.defaultPolicy.pbmode", 0);
// 7010: disable HTTP Alternative Services [FF37+]
defaultPref("network.http.altsvc.enabled", false);
// 7011: disable website control over browser right-click context menu
defaultPref("dom.event.contextmenu.enabled", false);
// 7012: disable icon fonts (glyphs) and local fallback rendering
defaultPref("gfx.downloadable_fonts.enabled", false);
defaultPref("gfx.downloadable_fonts.fallback_delay", -1);
// 7013: disable Clipboard API
defaultPref("dom.event.clipboardevents.enabled", false);
// 7020: disable WebRTC (Web Real-Time Communication)
lockPref("media.peerconnection.enabled", false);

/* -----------------------------------------------------------------------------------
   [8500] TELEMETRY
   ----------------------------------------------------------------------------------- */

// 8500: disable new data submission
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// 8501: disable Health Reports
lockPref("datareporting.healthreport.uploadEnabled", false);
// 0802: disable telemetry
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
// 8503: disable Telemetry Coverage
lockPref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]
lockPref("toolkit.coverage.endpoint.base", "");

/* -----------------------------------------------------------------------------------
   [9000] NON-PROJECT RELATED
   ----------------------------------------------------------------------------------- */

// 9001: disable welcome notices
lockPref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]
// 9002: disable extensions/features recommendations as you browse
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// 9090: disable return receipt sending unconditionally
lockPref("mail.mdn.report.enabled", false);

/* -----------------------------------------------------------------------------------
   [9100] THUNDERBIRD (AUTO CONFIG / UI / HEADERS / ADDRESS BOOK)
   ----------------------------------------------------------------------------------- */

// 9101: Disable auto-configuration
defaultPref("mailnews.auto_config.guess.enabled", false);
defaultPref("mailnews.auto_config.fetchFromISP.enabled", false);
defaultPref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
defaultPref("mailnews.auto_config.fetchFromISP.sslOnly", true);
defaultPref("mailnews.auto_config.fetchFromExchange.enabled", false);
defaultPref("mailnews.auto_config.guess.sslOnly", true);
defaultPref("mailnews.auto_config.guess.requireGoodCert", true);
defaultPref("mailnews.auto_config_url", "https://live.thunderbird.net/autoconfig/v1.1/");
defaultPref("mailnews.auto_config.addons_url","https://live.thunderbird.net/autoconfig/addons.json");
// 9102: Disable account provisioning
lockPref("mail.provider.enabled", false);
// 9110: Control how email addresses are displayed
defaultPref("mail.addressDisplayFormat", 0);
// 9111: Show full email instead of just name from address book
defaultPref("mail.showCondensedAddresses", false);
// 9112: Disable "Filelink for Large Attachments" feature
defaultPref("mail.cloud_files.enabled", false);
/* 9113: Don't hide cookies and passwords related (advanced?) buttons ***/
defaultPref("pref.privacy.disable_button.view_cookies", false);
defaultPref("pref.privacy.disable_button.cookie_exceptions", false);
defaultPref("pref.privacy.disable_button.view_passwords", false);
// 9120: Show Sender header in message pane
defaultPref("mailnews.headers.showSender", true);
// 9121: true=Show User Agent header in message pane
defaultPref("mailnews.headers.showUserAgent", true);
// 9126: Prevent any MUA information leakage through User-Agent header in outgoing email messages
lockPref("mailnews.headers.sendUserAgent", false);
lockPref("mailnews.headers.useMinimalUserAgent", true);
// 9130: Address book collection
lockPref("mail.collect_email_address_outgoing", false);


// Disable JPEG-XL
lockPref("image.jxl.enabled", false);

// Disable Firefox Translations
lockPref("browser.translations.automaticallyPopup", false);
lockPref("browser.translations.enable", false);
lockPref("browser.translations.select.enable", false);
lockPref("browser.translations.simulateUnsupportedEngine", true);

// Disable Narrator (Broken!)
lockPref("narrate.enabled", false);

// Disable Reader Mode (Broken!)
lockPref("reader.parse-on-load.enabled", false);

// Disable Accessibility Services
lockPref("accessibility.force_disabled", 1);
lockPref("devtools.accessibility.enabled", false);

/* -----------------------------------------------------------------------------------
   021 MISC. PRIVACY + SECURITY
   ----------------------------------------------------------------------------------- */



// Disable automatic updates for OpenSearch engines
lockPref("browser.search.update", false);

// Disable Battery API (Navigator.getBattery)
lockPref("dom.battery.enabled", false);

// Disable Beacon API (Navigator.sendBeacon)
lockPref("beacon.enabled", false);

// Disable Clipboard API
lockPref("dom.events.asyncClipboard.clipboardItem", false);
lockPref("dom.events.asyncClipboard.readText", false);
lockPref("dom.events.testing.asyncClipboard", false);

// Disable Content Analysis SDK
lockPref("browser.contentanalysis.default_result", 0);
lockPref("browser.contentanalysis.enabled", false);
lockPref("browser.contentanalysis.interception_point.clipboard.enabled", false);
lockPref("browser.contentanalysis.interception_point.drag_and_drop.enabled", false);
lockPref("browser.contentanalysis.interception_point.file_upload.enabled", false);
lockPref("browser.contentanalysis.interception_point.print.enabled", false);
lockPref("browser.contentanalysis.max_connections", 0);
lockPref("browser.contentanalysis.show_blocked_result", true);
lockPref("browser.contentanalysis.silent_notifications", false);

// Disable Federated Credential Management (FedCM) API
lockPref("dom.security.credentialmanagement.identity.enabled", false);
lockPref("dom.security.credentialmanagement.identity.heavyweight.enabled", false);
lockPref("dom.security.credentialmanagement.identity.lightweight.enabled", false);

// Disable Reporting API
lockPref("dom.reporting.crash.enabled", false);
lockPref("dom.reporting.enabled", false);
lockPref("dom.reporting.featurePolicy.enabled", false);
lockPref("dom.reporting.header.enabled", false);
lockPref("dom.reporting.testing.enabled", false);

// Disable Web Share API
lockPref("dom.webshare.enabled", false);
lockPref("dom.webshare.requireinteraction", true);

// Disable WebGPU
lockPref("dom.webgpu.enabled", false);

// Disable WebMIDI
lockPref("dom.sitepermsaddon-provider.enabled", false);
lockPref("dom.webmidi.gated", true);

// Enable Messaging Layer Security (MLS)
lockPref("dom.origin-trials.mls.state", 1);

// Enable Private Network Access Restrictions
lockPref("network.lna.block_trackers", true);
lockPref("network.lna.enabled", true);
lockPref("permissions.default.local-network", 2);
lockPref("permissions.default.localhost", 2);

// Prevent exposing XPCOM Components.interfaces to websites
lockPref("dom.use_components_shim", false);

/* -----------------------------------------------------------------------------------
   022 MISC. PRIVACY
   ----------------------------------------------------------------------------------- */

// Warn users if they have not addressed a BCC (Blind Carbon Copy) warning
lockPref("mail.compose.warn_public_recipients.aggressive", true);

// Prevent calendar from extracting data from emails by default
lockPref("calendar.extract.service.enabled", false);

// Remove default Google Groups link
lockPref("mailnews.messageid_browser.url", "");

// Disable automatic collection of email addresses for Thunderbird's Address Book
lockPref("mail.collect_email_address_outgoing", false);

// Block ports currently known to be abused by Android apps for tracking/fingerprinting[
lockPref("network.security.ports.banned", "29009, 29010, 30102, 30103, 12387, 12388, 12580, 12581, 12582, 12583, 12584, 12585, 12586, 12587, 12588, 12589, 12590, 12591");

// Disable CSP reporting
lockPref("security.csp.reporting.enabled", false);

// Disable Hyperlink Auditing (Click Tracking)
lockPref("browser.send_pings", false);
lockPref("browser.send_pings.max_per_link", 1);
lockPref("browser.send_pings.require_same_host", true);

// Disable Network Error Logging
lockPref("network.http.network_error_logging.enabled", false);

// Disable online speech recognition
lockPref("media.webspeech.service.endpoint", "data;");

// Disable referers when leaving .onion domains
lockPref("network.http.referer.hideOnionSource", true);

// Disable storage access heuristics
lockPref("dom.storage_access.auto_grants", false);
lockPref("privacy.restrict3rdpartystorage.heuristic.navigation", false);
lockPref("privacy.restrict3rdpartystorage.heuristic.opened_window_after_interaction", false);
lockPref("privacy.restrict3rdpartystorage.heuristic.recently_visited", false);
lockPref("privacy.restrict3rdpartystorage.heuristic.redirect", false);
lockPref("privacy.restrict3rdpartystorage.heuristic.window_open", false);

// Disable TLS session identifiers
lockPref("security.ssl.disable_session_identifiers", true);

// Enable Cookies Having Independent Partitioned State (CHIPS)
lockPref("network.cookie.CHIPS.enabled", true);
lockPref("network.cookie.chips.partitionLimitDryRun", false);

// Enable Do Not Track & Global Privacy Control
lockPref("privacy.donottrackheader.enabled", true);
lockPref("privacy.globalprivacycontrol.enabled", true);
lockPref("privacy.globalprivacycontrol.functionality.enabled", true);
lockPref("privacy.globalprivacycontrol.pbmode.enabled", true);

// Exclude third party trackers from storage access heuristics (if enabled)
lockPref("dom.storage_access.auto_grants.exclude_third_party_trackers", true);
lockPref("privacy.restrict3rdpartystorage.heuristic.exclude_third_party_trackers", true);

// Isolate resources (ex. referrers & cookies) injected by extensions
lockPref("privacy.antitracking.isolateContentScriptResources", true);

// Limit maximum cookie lifetime to 6 months/180 days (Like Brave)
lockPref("network.cookie.maxageCap", 15552000);

// Prevent sharing identifying information if a remote AutoConfig is being used
lockPref("autoadmin.append_emailaddr", false);

// Prevent third parties from setting cookies unless the third party already has cookies as a first party (Like Safari)
lockPref("privacy.dynamic_firstparty.limitForeign", true);

// Restrict tracking referers
lockPref("network.http.referer.defaultPolicy.trackers", 1);
lockPref("network.http.referer.defaultPolicy.trackers.pbmode", 1);

// Trim cross-origin referers (Like Safari)
lockPref("network.http.referer.XOriginTrimmingPolicy", 2);

// Only send cross-origin referers if hosts match
lockPref("network.http.referer.XOriginPolicy", 2);

/* -----------------------------------------------------------------------------------
   023 MISC. SECURITY
   ----------------------------------------------------------------------------------- */

// Always warn users before launching other apps
lockPref("mail.external_protocol_requires_permission", true);

// Enable built-in phishing protection
lockPref("mail.phishing.detection.disallow_form_actions", true);
lockPref("mail.phishing.detection.enabled", true);
lockPref("mail.phishing.detection.ipaddresses", true);
lockPref("mail.phishing.detection.mismatched_hosts", true);

// Prevent 3rd party software from intercepting & analyzing emails
lockPref("mailnews.downloadToTempFile", false);

// Limit classes that can process incoming data
lockPref("mailnews.display.disallow_mime_handlers", 3);
lockPref("rss.display.disallow_mime_handlers", 3);

// Sanitize HTML content
lockPref("mail.html_sanitize.drop_conditional_css", true);
defaultPref("mailnews.display.html_as", 3);
defaultPref("rss.display.html_as", 3);

// Enable mozilla::pkix certificate verification
lockPref("security.use_mozillapkix_verification", true);

// Disable insecure NTLMv1
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1", false);

// Always prompt users for a certificate when websites request one, rather than automatically selecting one...
lockPref("security.default_personal_cert", "Ask Every Time");

// Always warn users before launching other apps
lockPref("network.protocol-handler.warn-external-default", true);

// Apply CSP to internal browser.xhtml
lockPref("security.browser_xhtml_csp.enabled", true);
lockPref("security.browser_xhtml_csp.report-only", false);

// Decrease the lifetime of extension processes
lockPref("dom.ipc.keepProcessesAlive.extension", 0);

// Decrease the lifetime of privileged processes for `about:` pages
lockPref("dom.ipc.keepProcessesAlive.privilegedabout", 0);

// Decrease the lifetime of web content processes
lockPref("dom.ipc.keepProcessesAlive.web", 0);

// Disable Navigator Media Objects & getUserMedia Support in insecure contexts
lockPref("media.devices.insecure.enabled", false);
lockPref("media.getusermedia.insecure.enabled", false);

// Do not allow additional ports by default
lockPref("network.security.ports.banned.override", "");

// Enable content process sandboxing
lockPref("security.sandbox.content.level", 6);

// Enable the Cross-Origin-Embedder Policy Header
lockPref("browser.tabs.remote.coep.credentialless", true);
lockPref("browser.tabs.remote.useCrossOriginEmbedderPolicy", true);
lockPref("dom.origin-trials.coep-credentialless.state", 1);

// Enable the Cross-Origin-Opener Policy Header
lockPref("browser.tabs.remote.useCrossOriginOpenerPolicy", true);

// Enable Element.setHTML
lockPref("dom.security.setHTML.enabled", true);

// Enable GPU Sandboxing
lockPref("security.sandbox.gpu.level", 2);

// Enable the Integrity-Policy header
lockPref("security.integrity_policy.enabled", true);
lockPref("security.integrity_policy.stylesheet.enabled", true);


// Enable Opaque Response Blocking
lockPref("browser.opaqueResponseBlocking", true);
lockPref("browser.opaqueResponseBlocking.javascriptValidator", true);

// Enable Origin-keyed agent clustering by default (Like Chromium)
lockPref("dom.origin_agent_cluster.default", true);
lockPref("dom.origin_agent_cluster.enabled", true);

// Enforce Per-site Process Isolation + isolate all websites
lockPref("browser.sessionstore.disable_platform_collection", false);
lockPref("fission.autostart", true);
lockPref("fission.autostart.session", true);
lockPref("fission.disableSessionHistoryInParent", false);
lockPref("fission.webContentIsolationStrategy", 1);
lockPref("gfx.webrender.all", true);

// Enable the Sanitizer API
lockPref("dom.security.sanitizer.enabled", true);

// Enable socket process sandboxing
lockPref("security.sandbox.socket.process.level", 1);

// Enable Spectre mitigations for isolated content
lockPref("javascript.options.spectre.disable_for_isolated_content", false);

// Enable WebAssembly Memory Control
lockPref("javascript.options.wasm_memory_control", true);

// Enforce strict file:// Origin Policy
lockPref("security.fileuri.strict_origin_policy", true);

// Enforce various important security-related prefs
lockPref("dom.block_external_protocol_in_iframes", true);
lockPref("dom.block_external_protocol_navigation_from_sandbox", true);
lockPref("security.all_resource_uri_content_accessible", false);
lockPref("security.allow_eval_in_parent_process", false);
lockPref("security.allow_eval_with_system_principal", false);
lockPref("security.allow_parent_unrestricted_js_loads", false);
lockPref("security.allow_unsafe_parent_loads", false);
lockPref("security.data_uri.block_toplevel_data_uri_navigations", true);

// Ensure we block old/obsolete libavcodec libraries
lockPref("media.libavcodec.allow-obsolete", false);

// Never expose shell access
lockPref("network.protocol-handler.external.shell", false);

// Never skip the assertion that about:pages don't have content security policies (CSP)
lockPref("dom.security.skip_about_page_has_csp_assert", false);

// Prefer to create new content processes, instead of re-using existing ones
lockPref("browser.tabs.remote.subframesPreferUsed", false);

// Prevent marking JIT code pages as both writable and executable, only one or the other...
lockPref("javascript.options.content_process_write_protect_code", true);

// Prevent AutoConfig files (if being used) from gaining privileged browser access...
lockPref("general.config.sandbox_enabled", true);

// Prevent remoteTypes from triggering process switches they shouldn't be able to...
lockPref("browser.tabs.remote.enforceRemoteTypeRestrictions", true);

// Protect against CSRF Attacks (Like Chromium)
lockPref("network.cookie.sameSite.laxByDefault", true);
lockPref("network.cookie.sameSite.noneRequiresSecure", true);
lockPref("network.cookie.sameSite.schemeful", true);

// Protect against MIME Exploits
lockPref("dom.workers.importScripts.enforceStrictMimeType", true);
lockPref("network.sniff.use_extension", true);
lockPref("security.block_fileuri_script_with_wrong_mime", true);
lockPref("security.block_Worker_with_wrong_mime", true);

// Sandbox AudioIPC (cubeb)
lockPref("media.cubeb.sandbox", true);

// Use a separate content process for `file://` URLs
lockPref("browser.tabs.remote.separateFileUriProcess", true);

// Warn on unprivileged namespaces
lockPref("security.sandbox.warn_unprivileged_namespaces", true);

// Yes, this is a real pref...
lockPref("security.turn_off_all_security_so_that_viruses_can_take_over_this_computer", false);

/* -----------------------------------------------------------------------------------
   024 MISC.
   ----------------------------------------------------------------------------------- */


// Native support for Microsoft Exchange Web Services
lockPref("experimental.mail.ews.enabled", false);
lockPref("mailnews.auto_config.addons_url", "data;");

// Prefer viewing emails in plaintext by default
lockPref("mailnews.display.prefer_plaintext", true);

// Prevent status bar spoofing
lockPref("dom.disable_window_status_change", true);

// Re-enable SharedArrayBuffer using window.postMessage
lockPref("dom.postMessage.sharedArrayBuffer.withCOOP_COEP", true);

// Send emails in plaintext by default
lockPref("mail.default_send_format", 1);
lockPref("mail.html_compose", false);
lockPref("mail.identity.default.compose_html", false);

// Enable stricter media autoplay blocking
lockPref("media.autoplay.blocking_policy", 2);

// Block pop-ups by default
lockPref("dom.disable_open_during_load", true);

// Disable Captive Portal Detection & Connectivity Checks
lockPref("captivedetect.canonicalURL", "");
lockPref("network.captive-portal-service.enabled", false);
lockPref("network.connectivity-service.DNSv4.domain", "");
lockPref("network.connectivity-service.DNSv6.domain", "");
lockPref("network.connectivity-service.enabled", false);
lockPref("network.connectivity-service.IPv4.url", "");
lockPref("network.connectivity-service.IPv6.url", "");
lockPref("network.trr.wait-for-portal", false);

// Disable network connectivity status monitoring
lockPref("network.manage-offline-status", false);
lockPref("network.offline-mirrors-connectivity", false);

// Disable network requests to 0.0.0.0
lockPref("network.socket.ip_addr_any.disabled", true);

// Disable WebVTT Testing Events
lockPref("media.webvtt.testing.events", false);

// Enable Firefox's newer 'Felt privacy' design for Certificate Errors
lockPref("security.certerrors.felt-privacy-v1", true);

// Enable more detailed property error messages
lockPref("javascript.options.property_error_message_fix", true);

// Force pop-up windows to open in new tabs instead
lockPref("browser.link.open_newwindow", 3);
lockPref("browser.link.open_newwindow.restriction", 0);

// Limit what events can cause pop-ups
lockPref("dom.popup_allowed_events", "click dblclick");

// Prevent Safe Mode from automatically starting by default
lockPref("toolkit.startup.max_resumed_crashes", -1);

// Prevent scripts from moving, resizing, and messing with windows
lockPref("dom.allow_scripts_to_close_windows", false);
lockPref("dom.disable_window_flip", true);
lockPref("dom.disable_window_move_resize", true);

// Prevent websites from automatically refreshing
lockPref("browser.meta_refresh_when_inactive.disabled", true);

// Reject invalid cookies
lockPref("extensions.cookie.rejectWhenInvalid", true);

// Show an error page/details instead of a blank page for HTTP responses with certain error codes (ex. 4xx, 5xx, & Content-Length: 0)
lockPref("browser.http.blank_page_with_error_response.enabled", false);

/* -----------------------------------------------------------------------------------
   RSS
   ----------------------------------------------------------------------------------- */

// Load summary of RSS feeds instead of the full webpage by default
defaultPref("rss.show.summary", 1);

// Open RSS webpages in your web browser instead of Thunderbird
lockPref("rss.show.content-base", 3);

// Prefer viewing RSS feeds in plaintext by default
defaultPref("rss.display.prefer_plaintext", true);

// Prevent selection of RSS messages from automatically loading the web page
lockPref("rss.message.loadWebPageOnSelect", 0);

/* -----------------------------------------------------------------------------------
   027 Personal Touch
   ----------------------------------------------------------------------------------- */

// Show progress when saving/sending a message
lockPref("mailnews.show_send_progress", true);

// Use underscores instead of spaces in file names when saving messages by default
lockPref("mail.save_msg_filename_underscores_for_space", true);

// Wrap lines by default
lockPref("mail.wrap_long_lines", true);

// Prevent automatically converting emoticons to emojis
lockPref("mail.display_glyph", false);

// Enable the global indexer (Gloda) by default
lockPref("mailnews.database.global.indexer.enabled", true);

// Enable the new Account Hub by default
lockPref("mail.accounthub.addressbook.enabled", true);
lockPref("mail.accounthub.enabled", true);

// Enable inline spellcheck when composing messages + check before sending by default
lockPref("mail.spellcheck.inline", true);
lockPref("mail.SpellCheckBeforeSend", true);

// Disable extra logging for policies by default
lockPref("browser.policies.loglevel", "Error");

// Enable dark theme for the message pane
lockPref("mail.dark-reader.enabled", true);
lockPref("mail.dark-reader.show-toggle", true);

// Allow downloading and switching locales
lockPref("app.update.langpack.enabled", true);
lockPref("intl.multilingual.downloadEnabled", true);
lockPref("intl.multilingual.enabled", true);

// Allow local machine learning by default
lockPref("browser.ml.enable", true);
lockPref("extensions.ml.enabled", true);

// Allow Picture-in-Picture on all websites, even if they try to block it...
lockPref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);

// Allow zoom by default...
lockPref("apz.allow_zooming", true);

// Allow zoom on all websites, even if the website tries to block it...
lockPref("browser.ui.zoom.force-user-scalable", true);

// Allow zooming out beyond the initial scale of websites by default
lockPref("apz.allow_zooming_out", true);

// Allow the use of custom CSS by default
lockPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable annoying Web Speech API error pop-ups, especially relevant on Linux
lockPref("media.webspeech.synth.dont_notify_on_error", true);

// Disable fullscreen delay
lockPref("full-screen-api.transition-duration.enter", "0 0");
lockPref("full-screen-api.transition-duration.leave", "0 0");

// Enable autoscrolling by default
lockPref("apz.autoscroll.enabled", true);
lockPref("general.autoScroll", true);

// Enable developer options for `about:profiling`
lockPref("devtools.performance.aboutprofiling.has-developer-options", true);

// Enable display of in-process subframes at `about:processes` by default
lockPref("toolkit.aboutProcesses.showAllSubframes", true);

// Enable display of thread information at `about:processes` by default
lockPref("toolkit.aboutProcesses.showThreads", true);

// Enable IPv6
lockPref("network.dns.disableIPv6", false);

// Enable overscrolling by default
lockPref("apz.overscroll.enabled", true);

// Enable smooth scrolling by default
lockPref("general.smoothScroll", true);

// Enable Spellcheck for both multi-line and single-line boxes
lockPref("layout.spellcheckDefault", 2);

// Ensure users can always control Nimbus recipes
lockPref("nimbus.debug", true);
lockPref("nimbus.validation.enabled", false);

// Expose hidden UI preferences in the about:config
lockPref("ui.hideCursorWhileTyping", 1);
lockPref("ui.prefersReducedTransparency", 0);
lockPref("ui.scrollToClick", 1);
lockPref("ui.useAccessibilityTheme", 0);

// Prevent the alt key from toggling menu bar by default
lockPref("ui.key.menuAccessKeyFocuses", false);

// Prevent including the space next to words when double-clicking/selecting text
lockPref("layout.word_select.eat_space_to_next_word", false);

// Set the default log level for Background Tasks
lockPref("toolkit.backgroundtasks.loglevel", "error");

// Set the default log level for Remote Settings
lockPref("services.settings.loglevel", "warn");

// Set default URL to load when navigating to `moz://a`
lockPref("toolkit.mozprotocol.url", "about:mozilla");

/* -----------------------------------------------------------------------------------
   CHAT
   ----------------------------------------------------------------------------------- */

defaultPref("mail.chat.enabled", false);

// Disable reporting chat idle status
lockPref("messenger.status.reportIdle", false);

// Disable reporting chat status as 'away' when idle
lockPref("messenger.status.awayWhenIdle", false);

// Disable sending chat typing notifications
lockPref("purple.conversations.im.send_typing", false);

// Disable logging chat history
lockPref("purple.logging.log_chats", false);
lockPref("purple.logging.log_ims", false);

// Disable logging E2EE messages (OTR)
lockPref("chat.otr.default.allowMsgLog", false);

// Prevent leaking info in chat notifications
lockPref("mail.chat.notification_info", 2);

// Enable Off-the-record messaging (OTR)
lockPref("chat.otr.enable", true);

// Disable legacy XMPP gateways for Facebook, Google, Twitter, and Yahoo
lockPref("chat.prpls.prpl-facebook.disable", true);
lockPref("chat.prpls.prpl-gtalk.disable", true);
lockPref("chat.prpls.prpl-twitter.disable", true);
lockPref("chat.prpls.prpl-yahoo.disable", true);

// Enable the 'Bubbles' chat theme by default [CHAT]
lockPref("messenger.options.messagesStyle.theme", "bubbles");

// Remind users to verify unverified contacts (OTR)
lockPref("chat.otr.default.verifyNudge", true);

// Require E2EE for chat conversations by default (OTR)
lockPref("chat.otr.default.requireEncryption", true);

/* -----------------------------------------------------------------------------------
   UI
   ----------------------------------------------------------------------------------- */

// Show email information + headers
lockPref("mail.show_headers", 2);
lockPref("mailnews.display.date_senders_timezone", true);
lockPref("mailnews.headers.showArchivedAt", true);
lockPref("mailnews.headers.showListArchive", true);
lockPref("mailnews.headers.showListHelp", true);
lockPref("mailnews.headers.showListOwner", true);
lockPref("mailnews.headers.showListPost", true);
lockPref("mailnews.headers.showListSubscribe", true);
lockPref("mailnews.headers.showListUnsubscribe", true);
lockPref("mailnews.headers.showMessageId", true);
lockPref("mailnews.headers.showOrganization", true);
lockPref("mailnews.headers.showReferences", true);
lockPref("mailnews.headers.showSender", true);
lockPref("mailnews.headers.showUserAgent", true);

// Show full email addresses
lockPref("mail.addressDisplayFormat", 0);
lockPref("mail.showCondensedAddresses", false);




/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

// Controllo versione
lockPref("rischio.bird", "OK");
