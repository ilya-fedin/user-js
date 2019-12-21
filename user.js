// оставляем всего один процесс для контента, чтобы лис не жрал шибко много
// также, есть возможность отключить песочницу через MOZ_DISABLE_CONTENT_SANDBOX=1, заметно увеличивает производительность. Кроме того, скоро отключение e10s будет возможно только через переменную.
// кроме того, возможно отколючение мультипроцессинга через переменную MOZ_FORCE_DISABLE_E10S=1, но лис начинает падать (например, при невалидном сертификате сайта)
user_pref("browser.tabs.remote.separateFileUriProcess", false);
user_pref("browser.tabs.remote.separatePrivilegedContentProcess", false);
user_pref("extensions.webextensions.remote", false);
user_pref("dom.largeAllocationHeader.enabled", false);
user_pref("layers.gpu-process.enabled", false);
user_pref("dom.ipc.processCount", 1);

// начиная с 3-го уровня сандбоксинга, запрещен доступ к локальным фалйам, потому используем 2-ой уровень, чтобы работало открытие локальынй файлов без отдельного процесса под file://
// ни на что не влияет при выключенном сандбоксинге или e10s
user_pref("security.sandbox.content.level", 2);

// русский
user_pref("intl.accept_languages", "ru,ru-ru,en-us,en");
user_pref("intl.locale.requested", "ru");

// отключение запроса на about:config
user_pref("general.aboutConfig.showWarning", false);

// WebRender
user_pref("gfx.webrender.all", true);

// включаем управление тачскрином (еще нужен MOZ_USE_XINPUT2=1 на линуксах)
user_pref("dom.w3c_touch_events.enabled", 1);

// масштаб интерфейса
user_pref("layout.css.devPixelsPerPx", "1");
//user_pref("layout.css.devPixelsPerPx", "1.25");
user_pref("browser.uidensity", 1);

// использовать CSD, всегда отображать кнопку загрузок, результаты поиска после посещенных сайтов, чтобы не попасть на баг, когда после набора в адресной строке выбираешь посещенный сайт, а переходишь в итоге в поиск
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.download.autohideButton", false);
user_pref("browser.urlbar.matchBuckets", "general:5,suggestion:Infinity");

// восстанавливаем сессию при запуске и не спрашиваем при закрытии окна
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.warnOnClose", false);

// отключаем кэш для экономии памяти
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.sessionhistory.max_total_viewers", 0);

// персональные рекомендации расширений
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// мне ваш покет не нужен
user_pref("extensions.pocket.enabled", false);

// выключение предзагрузки содержимое дефолтной вкладки, а также выключение самой её
// думаю, лучше юзать сторонние альтернативы, ибо то, что есть сейчас - жутко неудобно
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.enabled", false);

// до жути раздражающие запросы
user_pref("dom.push.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("geo.enabled", false);
user_pref("media.navigator.enabled", false);

// WebRTC в придачу
user_pref("media.peerconnection.enabled", false);

// нефиг чему попало в фоне работать и ресурсы расходовать
user_pref("dom.serviceWorkers.enabled", false);

// всякая телеметрия, просто чтобы не расходовало интернеты
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// повышаем приватность
user_pref("network.cookie.cookieBehavior", 4);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("browser.contentblocking.category", "custom");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.resistFingerprinting", true);
// список второго уровня блокирует гуглокапчу, используем список первого уровня
user_pref("urlclassifier.trackingTable", "");
//user_pref("urlclassifier.trackingTable", "moztest-track-simple,base-track-digest256,content-track-digest256");

// DoH + ESNI
// ESNI зависит от DoH, т. к. ресолверы не всех систем (не будем указывать пальцем, но скажу, что эту систему создала компания, название которой начинается на "Micro" и заканчивается на "soft") могут выдавать записи типа TXT
// лично у меня РКН банит ESNI и любой сайт, хостящийся на Cloudflare, не грузится
user_pref("network.trr.mode", 2);
//user_pref("network.security.esni.enabled", true);

// запрос системного прокси занимает время
user_pref("network.proxy.type", 0);

// отключаем предварительные запросы, ибо нефиг
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// еще немножечко ускорения интернетов
user_pref("network.tcp.tcp_fastopen_enable", true);

// отключаем автовоспроизведение видео и аудио
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.block-event.enabled", true);
user_pref("media.autoplay.block-webaudio", true);
