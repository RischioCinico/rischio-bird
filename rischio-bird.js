
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

// Fine

lockPref("rischio-bird", "OK");
