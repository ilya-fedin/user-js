// оставляем всего один процесс для контента, чтобы лис не жрал шибко много
// также, есть возможность отключить песочницу через MOZ_DISABLE_CONTENT_SANDBOX=1, заметно увеличивает производительность
user_pref("browser.tabs.remote.separateFileUriProcess", false);
user_pref("browser.tabs.remote.separatePrivilegedContentProcess", false);
user_pref("browser.tabs.remote.separatePrivilegedMozillaWebContentProcess", false);
user_pref("network.process.enabled", false);
user_pref("extensions.webextensions.remote", false);
user_pref("layers.gpu-process.enabled", false);
user_pref("dom.ipc.processCount", 1);
user_pref("dom.ipc.keepProcessesAlive.privilegedabout", 0);

// начиная с 3-го уровня сандбоксинга, запрещен доступ к локальным фалйам, потому используем 2-ой уровень, чтобы работало открытие локальных файлов без отдельного процесса под file://
// ни на что не влияет с MOZ_DISABLE_CONTENT_SANDBOX=1
user_pref("security.sandbox.content.level", 2);

// русский
user_pref("intl.accept_languages", "ru,ru-ru,en-us,en");
user_pref("intl.locale.requested", "ru");

// отключение запроса на about:config
user_pref("browser.aboutConfig.showWarning", false);

// масштаб интерфейса
user_pref("browser.uidensity", 1);

// использовать CSD
user_pref("browser.tabs.drawInTitlebar", true);

// всегда отображать кнопку загрузок
user_pref("browser.download.autohideButton", false);

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
user_pref("permissions.default.geo", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// WebRTC в придачу
user_pref("media.peerconnection.enabled", false);

// нефиг чему попало в фоне работать и ресурсы расходовать
user_pref("dom.serviceWorkers.enabled", false);

// всякая телеметрия, просто чтобы не расходовало интернеты
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// повышаем приватность
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);

// отключаем предварительные запросы, ибо нефиг
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// отключаем автовоспроизведение видео и аудио
user_pref("media.autoplay.default", 5);
user_pref("media.autoplay.block-event.enabled", true);
user_pref("media.autoplay.block-webaudio", true);

// бесит, когда по отпусканию клавиши нажимается пункт меню
user_pref("ui.context_menus.after_mouseup", true);
