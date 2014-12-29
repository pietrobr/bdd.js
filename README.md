# BDD js library

**Browsers and Devices Detector** is simple ant thin JavaScript Library to detect the “real” browser, OS and provide the device form factor in a consistent way.

* Can be used with other platform specific JS library 
* Works with Hybrid Apps
* Works in most common cases

## Scenarios:

### Browser detection

Primary goal is to identify the real browser your web page or app is currently loading. 
For example it returns true if you check for Internet Explorer even if some Internet Explorer User Agent string (yes, it uses browser UA sniffing) contains strings like "Safari", "Android", etc. and because the main purpose is to detect the real browser, on the same UA it returns false, if you test for Chrome or Safari browser.

Some example properties for browser detection are:

`isIE, isAndroid, isKindleBrowser`

### OS/device detection

You can also use some properties to check the Operating System and Device used. Examples are the followings:

`isPCWin, isPCLinux, isiPad, isMobile, isXbox`

### Device is a Phone, a Tablet, etc.
Sometimes you want to know if your device is a Phone, a Table, a Desktop, a Desktop with a large monitor etc.
For this scenario you can use the following properties, that uses CSS pixels and constants in the JavaScript code to give you a reasonable result.

`isPhone, isTablet, isDesktop, isLargeDesktop`

### Is my code running in a specific WebView?

Suppose that you have some shared web code that can run in a browser and in a WebView, because you are, for example, building a Hybrid App with Cordova.

You can use the following methods:
`isWebViewiOS, isWebViewWindows , isWebViewAndroidWithUA `

*This is an experimental feature, test in your real scenario, to be sure it will work as expected.*

##How to use it
Simply add a reference to the library and call some properties:

```
<script src="bdd-0.2.js"></script>
```

```
// result can be true or false
var isMybrowser = window.BDD.isSafari;
```

A live sample can be seen [here](http://isie.azurewebsites.net)

###Sniffing vs. Features detection
This library uses User Agent sniffing for detection, that in general it's not considered a best practices; so please use this library only in situation where you can not use feature detection in you code.
I hope that this library can be useful to any developers and complements other library that uses Features detection for testing more specific code path and have beautiful web.


