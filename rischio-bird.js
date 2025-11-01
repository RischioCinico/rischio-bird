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
lockPref("browser.formfill.enable", false);

// Aumenta l'intervallo di salvataggio automatico della sessione per ridurre le scritture su disco
lockPref("browser.sessionstore.interval", 6000000);

/* -----------------------------------------------------------------------------------
   FILE SCARICATI
   ----------------------------------------------------------------------------------- */

// Massimizza il controllo dell'utente sui download
lockPref("browser.download.useDownloadDir", false);
lockPref("browser.download.always_ask_before_handling_new_types", true);

// Gestisce i file temporanei per evitare tracce
lockPref("browser.download.start_downloads_in_tmp_dir", true);
lockPref("browser.helperApps.deleteTempFileOnExit", true);

/* -----------------------------------------------------------------------------------
   TRACKING PROTECTION
   ----------------------------------------------------------------------------------- */

// Isola le risorse iniettate dalle estensioni
lockPref("privacy.antitracking.isolateContentScriptResources", true);

// Impedisci ai terzi di impostare cookie se non sono già stati un sito principale (first party)
lockPref("privacy.dynamic_firstparty.limitForeign", true);

// Limita i referrer che tracciano
lockPref("network.http.referer.defaultPolicy.trackers", 1);

// Rimuovi i percorsi e le query dai referrer tra siti diversi
lockPref("network.http.referer.XOriginTrimmingPolicy", 2);

// Abbassa la priorità di rete per i tracker, velocizzando il caricamento della pagina
lockPref("privacy.trackingprotection.lower_network_priority", true);

/* -----------------------------------------------------------------------------------
   FINGERPRINTING
   ----------------------------------------------------------------------------------- */

// Non usare colori di sistema
lockPref("widget.non-native-theme.use-theme-accent", false);
lockPref("browser.display.use_system_colors", false);
lockPref("ui.use_standins_for_native_colors", true);

// Arrotonda le dimensioni della finestra per prevenire il tracciamento
lockPref("privacy.window.maxInnerHeight", 900);
lockPref("privacy.window.maxInnerWidth", 1600);

// Disabilita i selettori CSS per i link visitati per prevenire il "history sniffing"
lockPref("layout.css.visited_links_enabled", false);

// Disabilita l'API della batteria per prevenire il fingerprinting
lockPref("dom.battery.enabled", false);

// Rimuove stringhe di identificazione
lockPref("app.distributor", "");
lockPref("app.distributor.channel", "");
lockPref("mozilla.partner.id", "");

/* -----------------------------------------------------------------------------------
   PROXY
   ----------------------------------------------------------------------------------- */

// Impedisci il failover automatico a connessioni dirette (non-proxy)
lockPref("network.proxy.failover_direct", false);

// Usa il proxy per la risoluzione DNS remota (previene i DNS leaks)
lockPref("network.proxy.socks_remote_dns", true);

// Previene i WebRTC IP leaks forzando l'uso del proxy
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

/* -----------------------------------------------------------------------------------
   CONNESSIONI SICURE
   ----------------------------------------------------------------------------------- */

// Blocca le negoziazioni di connessione insicure per prevenire gli attacchi di "downgrade"
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Avvisa sempre quando si invia un modulo da HTTP a HTTPS, anche su IP locali
lockPref("security.insecure_field_warning.ignore_local_ip_address", false);

// Disabilita l'invio di richieste HTTP in background nella modalità Solo HTTPS
lockPref("dom.security.https_only_mode_send_http_background_request", false);

// Disabilita i certificati root di terze parti a livello di sistema operativo per prevenire gli attacchi MITM
lockPref("security.certerrors.mitm.auto_enable_enterprise_roots", false);
lockPref("security.enterprise_roots.enabled", false);

// Assicura che HTTP/3 non venga disabilitato in presenza di certificati root di terze parti
lockPref("network.http.http3.disable_when_third_party_roots_found", false);

// Disabilita TLS 1.3 0-RTT per prevenire attacchi
lockPref("security.tls.enable_0rtt_data", false);

// Abilita i controlli di revoca CRLite e dà loro la priorità su OCSP
lockPref("security.OCSP.enabled", 0);
lockPref("security.ssl.enable_ocsp_stapling", false);
lockPref("security.pki.crlite_mode", 2);
lockPref("security.csp.reporting.enabled", false);
lockPref("security.remote_settings.crlite_filters.enabled", true);

// Fornisce una protezione extra bloccando completamente le connessioni in caso di mancata corrispondenza del certificato
lockPref("security.cert_pinning.enforcement_level", 2);

// Consenti solo override temporanei per gli errori del certificato (per sessione)
lockPref("security.certerrors.permanentOverride", false);

// Mostra informazioni tecniche dettagliate sulle pagine di errore
lockPref("browser.xul.error_pages.expert_bad_cert", true);

// Disabilita TLS sessione identifiers
lockPref("security.ssl.disable_session_identifiers", true);

/* -----------------------------------------------------------------------------------
   CONNESSIONI IMPLICITE
   ----------------------------------------------------------------------------------- */

// Disabilita il monitoraggio dello stato della connessione di rete
lockPref("network.manage-offline-status", false);

// Disabilita l'API Beacon (Navigator.sendBeacon)
lockPref("beacon.enabled", false);

// Disable Early Hints (Like Cromite)
lockPref("network.early-hints.enabled", false);
lockPref("network.early-hints.over-http-v1-1.enabled", false);
lockPref("network.early-hints.preconnect.enabled", false);
lockPref("network.early-hints.preconnect.max_connections", 0);

// Disable Network Prefetching
lockPref("dom.prefetch_dns_for_anchor_http_document", false);
lockPref("network.dns.disablePrefetch", true);
lockPref("network.dns.disablePrefetchFromHTTPS", true);
lockPref("network.prefetch-next", false);

// Disable Preconnect
lockPref("network.preconnect", false);

// Prevent middle mouse clicks from pasting clipboard contents by default
lockPref("middlemouse.paste", false);
lockPref("middlemouse.openNewWindow", false);



// Fine

lockPref("rischio-bird", "OK");
