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
// 0370: disable UI instrumentation
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
// 9113: Don't hide cookies and passwords related (advanced?) buttons
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

/* -----------------------------------------------------------------------------------
   [9200] EMAIL COMPOSITION (ENCODING / FORMAT / VIEW)
   ----------------------------------------------------------------------------------- */

// 9205: Avoid information leakage in reply header
lockPref("mailnews.reply_header_type", 1);
lockPref("mailnews.reply_header_authorwrotesingle", "#1 wrote:");
// 9206: Prevent spellchecking dictionary leakage through Content-Language header
lockPref("mail.suppress_content_language", true);
// 9207: Sanitize Date header to convert date to UTC and round to closest minute
lockPref("mail.sanitize_date_header", true);
// 9210: Check spelling before sending
defaultPref("mail.SpellCheckBeforeSend", true);
// 9212: Compose email in plaintext unless expressly overridden
defaultPref("mail.html_compose", false);
defaultPref("mail.identity.default.compose_html", false);
// 9213: Send only plaintext email by default
defaultPref("mail.default_send_format", 0);
// 9214: What classes can process incoming data
defaultPref("mailnews.display.disallow_mime_handlers", 3);
// 9215: How to display HTML parts of a message body
defaultPref("mailnews.display.html_as", 3);
lockPref("mail.html_sanitize.drop_conditional_css", true);
// 9216: Prefer to view as plaintext or HTML
defaultPref("mailnews.display.prefer_plaintext", false);
// 9217: Inline attachments
defaultPref("mail.inline_attachments", false);
// 9218: Big attachment warning
lockPref("mail.compose.big_attachments.notify", true);
// 9219: Set big attachment size to warn at
defaultPref("mail.compose.big_attachments.threshold_kb", 9220); // [DEFAULT: 5120]
defaultPref("mailnews.message_warning_size", 20971520); // [DEFAULT: 20971520]
// 9220: Set public recipients number from which BCC is advised
defaultPref("mail.compose.warn_public_recipients.threshold", 15); // [DEFAULT: 15]
// 9221: Show an alert if the warning above has not been addressed ***/
defaultPref("mail.compose.warn_public_recipients.aggressive", true);
// 9222: Disable link previews
lockPref("mail.compose.add_link_preview", false);
// 9230: Disable JavaScript
lockPref("javascript.enabled", false);
// 9231: Disable media source extensions
lockPref("media.mediasource.enabled", false);
// 9232: Disable hardware decoding support ***/
lockPref("media.hardware-video-decoding.enabled", false);
// 9233: Default image permissions
defaultPref("permissions.default.image", 2);
// 9240: Builtin phishing/scamming detection
lockPref("mail.phishing.detection.enabled", true);
lockPref("mail.phishing.detection.disallow_form_actions", true);
lockPref("mail.phishing.detection.ipaddresses", true);
lockPref("mail.phishing.detection.mismatched_hosts", true);
// 9250: Disable remote content loading
defaultPref("mailnews.message_display.disable_remote_image", true);

/* -----------------------------------------------------------------------------------
   [9300] OTHER THUNDERBIRD COMPONENTS (CHAT / CALENDAR / RSS)
   ----------------------------------------------------------------------------------- */

// 9301: Disable chat functionality
defaultPref("mail.chat.enabled", false);
// 9302: Disable logging of group chats
lockPref("purple.logging.log_chats", false);
// 9303: Disable logging of 1 to 1 conversations
lockPref("purple.logging.log_ims", false);
// 9304: Disable logging of system messages
lockPref("purple.logging.log_system", false);
// 9305: Disable typing notifications
lockPref("purple.conversations.im.send_typing", false);
// 9306: When chat is enabled, do not connect to accounts automatically
defaultPref("messenger.startup.action", 0);
// 9307: When chat is enabled, do not report idle status
lockPref("messenger.status.reportIdle", false);
// 9309: Decide how much information will be shown in chat notifications
defaultPref("mail.chat.notification_info", 2);

/* -----------------------------------------------------------------------------------
   Boh
   ----------------------------------------------------------------------------------- */

// Disable Narrator (Broken!)
lockPref("narrate.enabled", false);

// Disable Reader Mode (Broken!)
lockPref("reader.parse-on-load.enabled", false);

// Disable Accessibility Services
lockPref("accessibility.force_disabled", 1);
lockPref("devtools.accessibility.enabled", false);

/* -----------------------------------------------------------------------------------
   FINE
   ----------------------------------------------------------------------------------- */

// Controllo versione
lockPref("rischio.bird", "OK");
