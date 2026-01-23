
(function() {
    'use strict';

    var cookieConsentBanner = document.getElementById('cookie-consent-banner');
    var cookieConsentAcceptButton = document.getElementById('cookie-consent-accept');

    // Check if the cookie 'cookie_consent' is set to 'true'
    if (document.cookie.indexOf('cookie_consent=true') > -1) {
        loadGtm();
        return; // Don't show the banner
    }

    if (cookieConsentBanner) {
        cookieConsentBanner.style.display = 'block';
    }

    if (cookieConsentAcceptButton) {
        cookieConsentAcceptButton.addEventListener('click', function() {
            // Set a cookie to remember consent for 1 year
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "cookie_consent=true;" + expires + ";path=/";

            if (cookieConsentBanner) {
                cookieConsentBanner.style.display = 'none';
            }

            loadGtm();
        });
    }

    function loadGtm() {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N3Q7WP8J');
    }

}());
