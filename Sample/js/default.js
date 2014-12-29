(function (lib) {
    "use strict";
    var bdd = lib;

    function checkAndMarkElement(element, condition, skip) {
        element.innerHTML = condition;

        // It'd be better to use css here, sorry for laziness :-)
        if (condition === true && ! skip) {
            element.style.background = "#00FF00";
        } else if (condition === false && ! skip) {
            element.style.background = "#FF3366";
        }
    }

    document.getElementById('ua').innerHTML = navigator.userAgent;

    checkAndMarkElement(document.getElementById('ie'), bdd.isIE);
    checkAndMarkElement(document.getElementById('sa'), bdd.isSafari);
    checkAndMarkElement(document.getElementById('ch'), bdd.isChrome);
    checkAndMarkElement(document.getElementById('ff'), bdd.isFirefox);
    checkAndMarkElement(document.getElementById('fo'), bdd.isFirefoxOS);
    checkAndMarkElement(document.getElementById('op'), bdd.isOpera);
    checkAndMarkElement(document.getElementById('an'), bdd.isAndroidBrowser);
    checkAndMarkElement(document.getElementById('ki'), bdd.isKindleBrowser);
    checkAndMarkElement(document.getElementById('lu'), bdd.isLessUsedBrowser);
    checkAndMarkElement(document.getElementById('bb'), bdd.isBlackBerryBrowser);
    //checkAndMarkElement(document.getElementById('do'), bdd.isDolphin);
    checkAndMarkElement(document.getElementById('ub'), bdd.isUCBrowser);
    checkAndMarkElement(document.getElementById('ya'), bdd.isYanderBrowser);
    checkAndMarkElement(document.getElementById('dan'), bdd.isAndroid);
    checkAndMarkElement(document.getElementById('dip'), bdd.isiPhone);
    checkAndMarkElement(document.getElementById('dipa'), bdd.isiPad);
    checkAndMarkElement(document.getElementById('dwp'), bdd.isWindowsPhone);
    checkAndMarkElement(document.getElementById('dmac'), bdd.isMac);
    checkAndMarkElement(document.getElementById('dwpc'), bdd.isPCWin);
    checkAndMarkElement(document.getElementById('dmob'), bdd.isMobile);
    checkAndMarkElement(document.getElementById('dxbox'), bdd.isXbox);
    checkAndMarkElement(document.getElementById('dwii'), bdd.isWii);
    checkAndMarkElement(document.getElementById('dipo'), bdd.isiPod);
    checkAndMarkElement(document.getElementById('dt'), bdd.isTouchSuppored);
    checkAndMarkElement(document.getElementById('diog'), bdd.isiOS);
    checkAndMarkElement(document.getElementById('dl'), bdd.isPCLinux);
    checkAndMarkElement(document.getElementById('dwr'), bdd.isWinRT);
    checkAndMarkElement(document.getElementById('sw'), bdd.display.width + "x" + bdd.display.height, true);
    //checkAndMarkElement(document.getElementById('log'), "devicePixelRatio: " + window.devicePixelRatio + "; Screen width: " + screen.width + "; window outer width:" + window.outerWidth +
    //    "; window inner width:" + window.innerWidth + "<br>" + "** Screen height: " + screen.height +  "; window outer eight:" + window.outerHeight +
    //    "; window inner height:" + window.innerHeight, true);
    checkAndMarkElement(document.getElementById('sp'), bdd.isPhone);
    checkAndMarkElement(document.getElementById('st'), bdd.isTablet);
    checkAndMarkElement(document.getElementById('sd'), bdd.isDesktop);
    checkAndMarkElement(document.getElementById('sld'), bdd.isDesktopLarge);
    checkAndMarkElement(document.getElementById('wvw'), bdd.isWebViewWindows);
    checkAndMarkElement(document.getElementById('wvwp'), bdd.isWebViewOrHostWindowsPhone81);
    checkAndMarkElement(document.getElementById('wva'), bdd.isWebViewAndroidWithUA());
    checkAndMarkElement(document.getElementById('wvios'), bdd.isWebViewiOS);

})(window.BDD);
