
(function () {
    "use strict";
    // Private
    var returnTrueIfGreaterOrEqualThanZero,
        _isOpera = false, _isIE = false, _isSafari = false, _isChrome = false, _isFirefox = false, _isWebViewAndroid = false, _isWebView = false, _isWebViewiOS = false, _isAndroidBrowser = false, _isKindleBrowser = false, _isFirefoxOS = false,
        _isLessUsedBrowser = false, _isBlackBerryBrowser = false, _isDolphin = false, _isUCBrowser = false, _isYanderBrowser = false,
        _isAndroid = false, _isiPad = false, _isiPhone = false, _isiPod = false, _isiOS = false, _isWP = false, _isMac = false, _isPCWin = false, _isXbox = false, _isWii = false, _isLinux = false, _isMobile = false, _isARM = false,
        _isExtraSmall = false, _isSmall = false, _isMedium = false, _isLarge = false,
        _isTouchDetected = false,
        secondaryBrowsers = ["Camino", "SeaMonkey", "Maemo"],
        calculateScreenZoomLevelAndResolution,
        // _display: device screen size in pixel, _displayCSSfullScreen: CSS pixel in full screen
        _display = {}, _displayCSSfullScreen = {},
        _orientation,
        ua = navigator.userAgent;

    // Consts
    var DEVICE_EXTRA_SMALL_MAX = 530,
        DEVICE_MEDIUM_MAX = 992,
        DEVICE_LARGE_MAX = 1200;

    // Private method
    returnTrueIfGreaterOrEqualThanZero = function (index) {
        var vOut = null;
        if (index >= 0) {
            vOut = true;
        } else {
            vOut = false;
        }
        return vOut;
    };

    _isTouchDetected = function () {
        // In Firefox you need to go to about:config and set dom.w3c_touch_events.enabled to 1
        return window.navigator.maxTouchPoint > 0 ||
            window.navigator.msMaxTouchPoints > 0 ||
            ('ontouchstart' in window) > 0 ||
            // Opera Mini on Android doesn't support touch, but device is of course touch enabled
            (returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Android')) && returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Presto')));
    };

    _isLessUsedBrowser = function () {
        var result = false;
        for (var i = 0; i < secondaryBrowsers.length; i++) {
            if (returnTrueIfGreaterOrEqualThanZero(ua.indexOf(secondaryBrowsers[i]))){
                result = true;
                break;
            } else {
                result = false;
            }
        }
        return result;
    }();

    _isOpera = function () {
        return returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Opera')) ||
               // Opera Mini 8 for iOS
               returnTrueIfGreaterOrEqualThanZero(ua.indexOf('OPiOS')) ||
               // Opera Coast on iOS
               returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Coast')) ||
               returnTrueIfGreaterOrEqualThanZero(ua.indexOf('OPR'));  
    }();

    _isBlackBerryBrowser = (returnTrueIfGreaterOrEqualThanZero(ua.indexOf('BlackBerry')) ||
        // Used in BB tablet OS
        returnTrueIfGreaterOrEqualThanZero(ua.indexOf('RIM')) || 
        returnTrueIfGreaterOrEqualThanZero(ua.indexOf('BB10'))) &&
        ! _isOpera;

    _isYanderBrowser = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('YaBrowser'));

    _isChrome = (returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Chrome')) ||
                // Chrome for iOS
                returnTrueIfGreaterOrEqualThanZero(ua.indexOf('CriOS'))) &&
                ! _isOpera &&
                ! _isYanderBrowser;

    _isUCBrowser = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('UCBrowser'));

    _isAndroidBrowser = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Android')) &&
                       returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Safari')) &&
                       returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Version/')) &&
                       ! _isUCBrowser &&
                       ! _isChrome;

    _isKindleBrowser = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Kindle')) ||
                       returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Silk'));

    _isFirefox = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Firefox')) &&
        ! _isLessUsedBrowser;

    _isFirefoxOS = ! returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Android')) &&
                     returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Firefox')) &&
                     (returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Mobile')) || returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Tablet')));

    _isDolphin = function () {
        return "Sorry Dolphin is not supported, see isSafari for best match both on iOS and Android";
    }();

    _isWebView = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('WebView')) || returnTrueIfGreaterOrEqualThanZero(ua.indexOf('MSAppHost')) ||
        (window.cordova) ? true : false;

    _isWebViewAndroid = function (developer_added_ua) {
        var result = (developer_added_ua !== undefined && developer_added_ua.length > 0) ? returnTrueIfGreaterOrEqualThanZero(ua.indexOf(developer_added_ua)) : _isAndroidBrowser;
        return result;
    };

    _isIE = (returnTrueIfGreaterOrEqualThanZero(ua.indexOf('MSIE')) ||
            returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Trident'))) && !_isWebView;

    _isSafari = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Safari')) &&
        !_isChrome &&
        !_isOpera &&
        !_isIE &&
        !_isAndroidBrowser &&
        !_isKindleBrowser &&
        !_isBlackBerryBrowser &&
        !_isYanderBrowser &&
        !_isUCBrowser;
    //
    // Devices
    //
    _isXbox = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Xbox'));

    _isWii = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('wii'));

    _isMac = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Macintosh')) &&
        ! returnTrueIfGreaterOrEqualThanZero(ua.indexOf('OPiOS'));

    _isPCWin = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Windows NT')) &&
        ! _isXbox;

    _isWP = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Windows Phone'));

    _isAndroid = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Android')) &&
        ! _isWP;

    _isiPod = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('iPod')) &&
        ! _isWP;

    _isiPad = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('iPad')) &&
        ! _isWP;

    _isiPhone = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('iPhone')) &&
        ! _isWP &&
        !_isiPod;

    // In Opera we can only check for a generic iOS device
    _isiOS = ! _isiPad && ! _isiPhone && ! _isiPod && returnTrueIfGreaterOrEqualThanZero(ua.indexOf('OPiOS'));

    _isLinux = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('Linux')) &&
        ! _isAndroid &&
        ! _isKindleBrowser;

    _isMobile = _isAndroid || _isFirefoxOS || _isiOS || _isiPad || _isiPhone || _isiPod || _isKindleBrowser || _isWP;

    _isARM = returnTrueIfGreaterOrEqualThanZero(ua.indexOf('ARM'));

    _isWebViewiOS = (_isiPad || _isiPhone || _isiPod) && !_isSafari;

    // Private methods
    calculateScreenZoomLevelAndResolution = function () {
        // I need CSS pixels when browser window is in full screen
        // On a mobile use the CSS Pixel http://www.canbike.org/CSSpixels/ 
        // On a PC screen size is affected by browser zoom only on IE & FF and I take the screen size and not window size
        var dpr = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var s_width = screen.width;
        var s_height = screen.height;
        var w_inner_width = window.innerWidth;
        var w_inner_height = window.innerHeight;
        var t;

        if (_isMobile) {
            // On Android width / Height change when rotating => normalize (_display and _displayCSSfullScreen)
            if (_isAndroid && s_width >= s_height) {
                t = s_width;
                s_width = s_height;
                s_height = t;

                t = w_inner_width;
                w_inner_width = w_inner_height;
                w_inner_height = t;
            } else {
            }

            _display.width = (s_width * dpr).toFixed(0);
            _display.height = (s_height * dpr).toFixed(0);
            _displayCSSfullScreen.width = s_width;
            _displayCSSfullScreen.height = s_height;
        } else if (! _isMobile && (_isFirefox || _isIE)) {
            _display.width = (s_width * dpr).toFixed(0);
            _display.height = (s_height * dpr).toFixed(0);
            _displayCSSfullScreen.width = (s_width * dpr).toFixed(0);
            _displayCSSfullScreen.height = (s_height * dpr).toFixed(0);

        } else {
            // Standard desktop & xbox
            _display.width = s_width;
            _display.height = s_height;
            _displayCSSfullScreen.width = s_width;
            _displayCSSfullScreen.height = s_height;
        }
    }();

    //
    // Screen Size : following Boostrap convention
    //
    _isExtraSmall = (_displayCSSfullScreen.width < DEVICE_EXTRA_SMALL_MAX);

    _isSmall = (_displayCSSfullScreen.width >= DEVICE_EXTRA_SMALL_MAX && _displayCSSfullScreen.width < DEVICE_MEDIUM_MAX);

    _isMedium = (_displayCSSfullScreen.width >= DEVICE_MEDIUM_MAX && _displayCSSfullScreen.width < DEVICE_LARGE_MAX);

    _isLarge = (_displayCSSfullScreen.width >= DEVICE_LARGE_MAX);

    //
    // Public API for Browser and Device Detector (BDD)
    //
    window.BDD = {
        isOpera: _isOpera,

        isIE: _isIE,

        isSafari: _isSafari,

        isChrome: _isChrome,

        isFirefox: _isFirefox,

        isFirefoxOS: _isFirefoxOS,

        isAndroidBrowser: _isAndroidBrowser,

        isKindleBrowser: _isKindleBrowser,

        isBlackBerryBrowser: _isBlackBerryBrowser,

        isDolphin: _isDolphin,

        isUCBrowser: _isUCBrowser,

        isYanderBrowser: _isYanderBrowser,

        isLessUsedBrowser: _isLessUsedBrowser,

        isAndroid: _isAndroid,

        isiPad: _isiPad,

        isiPhone: _isiPhone,

        isiPod: _isiPod,

        isiOS: _isiOS,
        
        isWindowsPhone: _isWP,

        isMac: _isMac,

        isPCWin: _isPCWin && ! _isARM,

        isWinRT: _isARM && _isPCWin,

        isMobile: _isMobile,

        isXbox: _isXbox,

        isWii: _isWii,

        isTouchSuppored: _isTouchDetected(),

        isPCLinux: _isLinux,

        display: { width: _display.width, height: _display.height },

        isPhone: _isExtraSmall,

        isTablet: _isSmall,

        isDesktop: _isMedium,

        isDesktopLarge: _isLarge,

        isWebViewWindows: _isWebView && (_isPCWin || (_isARM && ! _isWP)),

        isWebViewOrHostWindowsPhone81: _isWebView && _isWP,

        isWebViewAndroidWithUA: function (developer_ua) { return _isWebViewAndroid(developer_ua) },

        isWebViewiOS: _isWebViewiOS,
    };
})();