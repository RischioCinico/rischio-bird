/* -----------------------------------------------------------------------------------
   PAGINA INIZIALE
   ----------------------------------------------------------------------------------- */

lockPref("browser.newtabpage.enabled", false);

/* -----------------------------------------------------------------------------------
   TRACCE SU DISCO
   ----------------------------------------------------------------------------------- */

// Disabilita cache su disco
lockPref("browser.cache.disk.enable", false);

// Disabilita la cache Indietro/Avanti (bfcache)
lockPref("browser.sessionhistory.max_total_viewers", 0);

// Disabilita la cronologia di ricerca e dei moduli
defaultPref("browser.formfill.enable", false);

// Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
defaultPref("browser.sessionstore.interval", 600000);

/* -----------------------------------------------------------------------------------
   FILE SCARICATI
   ----------------------------------------------------------------------------------- */

// Massimizza il controllo dell'utente sui download
lockPref("browser.download.useDownloadDir", false);
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Gestisce i file temporanei per evitare tracce
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);




/*** 001 DATA COLLECTION ***/

// Disable Crash Reporting
lockPref("breakpad.reportURL", "");
lockPref("browser.crashReports.crashPull", false);
lockPref("browser.crashReports.requestedNeverShowAgain", true);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("toolkit.crashreporter.include_context_heap", false);

// Disable Data Reporting & Telemetry
lockPref("browser.safebrowsing.features.emailtracking.datacollection.update", false);
lockPref("captchadetection.actor.enabled", false);
lockPref("captchadetection.hasUnsubmittedData", false);
lockPref("captchadetection.loglevel", "Off");
lockPref("datareporting.dau.cachedUsageProfileID", "beefbeef-beef-beef-beef-beeefbeefbee");
lockPref("datareporting.dau.cachedUsageProfileGroupID", "b0bacafe-b0ba-cafe-b0ba-cafeb0bacafe");
lockPref("datareporting.policy.dataSubmissionPolicyBypassNotification", true);
lockPref("datareporting.policy.firstRunURL", "");
lockPref("datareporting.usage.uploadEnabled", false);
lockPref("network.traffic_analyzer.enabled", false);
lockPref("network.trr.confirmation_telemetry_enabled", false);
lockPref("privacy.imageInputTelemetry.enableTestMode", false);
lockPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
lockPref("telemetry.fog.test.activity_limit", -1);
lockPref("telemetry.fog.test.inactivity_limit", -1);
lockPref("telemetry.fog.init_on_shutdown", false);
lockPref("telemetry.fog.test.localhost_port", 70000);
lockPref("telemetry.number_of_site_origin.min_interval", 999999999);
lockPref("toolkit.content-background-hang-monitor.disabled", true);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0"); // [HIDDEN]
lockPref("toolkit.telemetry.cachedProfileGroupID", "decafdec-afde-cafd-ecaf-decafdecafde"); // [HIDDEN]
lockPref("toolkit.telemetry.collectInterval", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.dap.helper.hpke", "");
lockPref("toolkit.telemetry.dap.helper.url", "");
lockPref("toolkit.telemetry.dap.leader.hpke", "");
lockPref("toolkit.telemetry.dap.leader.url", "");
lockPref("toolkit.telemetry.dap.logLevel", "Off");
lockPref("toolkit.telemetry.eventping.maximumFrequency", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.eventping.minimumFrequency", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false); // [HIDDEN]
lockPref("toolkit.telemetry.healthping.enabled", false); // [HIDDEN]
lockPref("toolkit.telemetry.initDelay", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.log.level", "Fatal"); // [HIDDEN]
lockPref("toolkit.telemetry.minSubsessionLength", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.newProfilePing.delay", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.newProfilePing.enabled", false); // [HIDDEN]
lockPref("toolkit.telemetry.previousBuildID", ""); // [HIDDEN]
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false); // [HIDDEN]
lockPref("toolkit.telemetry.scheduler.idleTickInterval", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.scheduler.tickInterval", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.server", "data;");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.testing.disableFuzzingDelay", false);
lockPref("toolkit.telemetry.testing.suppressPingsender", true); // [HIDDEN]
lockPref("toolkit.telemetry.translations.logLevel", "Off");
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.untrustedModulesPing.frequency", 999999999); // [HIDDEN]
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.user_characteristics_ping.logLevel", "Off");
lockPref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
lockPref("urlclassifier.features.emailtracking.datacollection.allowlistTables", "");
lockPref("urlclassifier.features.emailtracking.datacollection.blocklistTables", "");

// Disable Origin Trials
lockPref("dom.origin-trials.enabled", false);

// Remove partner attribution
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");


/*** 002 MOZILLA CRAP™ ***/

// Clear unnecessary/undesired Mozilla URLs
lockPref("app.feedback.baseURL", "");
lockPref("datareporting.healthreport.infoURL", "");
lockPref("extensions.recommendations.privacyPolicyUrl", "");
lockPref("toolkit.datacollection.infoURL", "");

// Disable add-on/feature recommendations
lockPref("browser.discovery.enabled", false);
lockPref("browser.translations.panelShown", true); // [HIDDEN]
lockPref("extensions.getAddons.browseAddons", ""); // [HIDDEN]
lockPref("extensions.getAddons.discovery.api_url", "data;");
lockPref("extensions.getAddons.showPane", false); // [HIDDEN]
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
lockPref("extensions.recommendations.hideNotice", true); // [HIDDEN]
lockPref("extensions.recommendations.themeRecommendationUrl", "");
lockPref("extensions.ui.lastCategory", "addons://list/extension"); // [HIDDEN]
lockPref("extensions.webservice.discoverURL", ""); // [HIDDEN - non-Thunderbird]

// Disable Fakespot
lockPref("toolkit.shopping.ohttpConfigURL", "");
lockPref("toolkit.shopping.ohttpRelayURL", "");

// Disable fetching Firefox Relay's "allowlist" (list of sites known to support Relay)
lockPref("signon.firefoxRelay.allowListRemoteSettingsCollection", ""); // [HIDDEN]

// Disable fetching Password Manager rules remotely by default
lockPref("signon.recipes.remoteRecipes.enabled", false);

// Disable Firefox Messaging System targeting information background updates
lockPref("app.update.background.messaging.targeting.snapshot.intervalSec", -1);

// Disable Firefox Relay by default
lockPref("signon.firefoxRelay.feature", "disabled");

// Disable "Privacy-Preserving Attribution"
lockPref("dom.origin-trials.private-attribution.state", 2);

// Disable Mozilla nags/promotions
lockPref("browser.promo.cookiebanners.enabled", false);
lockPref("browser.promo.focus.enabled", false);
lockPref("browser.promo.pin.enabled", false);
lockPref("browser.send_to_device_locales", "");
lockPref("browser.vpn_promo.enabled", false);
lockPref("privacy.trackingprotection.allow_list.hasUserInteractedWithETPSettings", true);

// Disable Remote Permissions
lockPref("permissions.manager.remote.enabled", false);

// Opt out of add-on metadata updates
lockPref("extensions.getAddons.cache.enabled", false);

// Remove special privileges from Mozilla domains
lockPref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false);
lockPref("browser.tabs.remote.separatedMozillaDomains", "");
lockPref("dom.ipc.processCount.privilegedmozilla", 0);
lockPref("extensions.webextensions.restrictedDomains", "");
lockPref("permissions.manager.defaultsUrl", "");
lockPref("svg.context-properties.content.allowed-domains", "");

// Skip Mozilla's `Privacy Notice` and `Terms of Use`
lockPref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 999);
lockPref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "32503679999000");
lockPref("termsofuse.acceptedDate", "32503679999000");
lockPref("termsofuse.acceptedVersion", 999);
lockPref("termsofuse.bypassNotification", true);

// Enable TCP/dFPI
lockPref("network.cookie.cookieBehavior", 5);
lockPref("network.cookie.cookieBehavior.optInPartitioning", true);

// Ignore less restricted referer policies (than the default)
lockPref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true);

// Lower the network priority of known trackers (if not blocked for whatever reason...)
lockPref("privacy.trackingprotection.lower_network_priority", true);


/*** 004 FINGERPRINTING PROTECTION ***/

// Disable VP9 Benchmark
lockPref("media.benchmark.vp9.threshold", 0);

// Do not use the theme's toolbar color scheme for in-content pages by default
lockPref("browser.theme.unified-color-scheme", false);

// Prevent using system accent colors
lockPref("widget.non-native-theme.use-theme-accent", false);

// Prevent using system colors
lockPref("browser.display.use_system_colors", false);
lockPref("ui.use_standins_for_native_colors", true);

// Prompt to spoof locale to en-US
lockPref("privacy.spoof_english", 0);

// Reset the fingerprinting randomization key daily (in addition to per-session/when the browser restarts)
lockPref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
lockPref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// Round window sizes
lockPref("browser.startup.blankWindow", false);
lockPref("privacy.window.maxInnerHeight", 900);
lockPref("privacy.window.maxInnerWidth", 1600);


// Fine

lockPref("rischio-bird", "OK");
