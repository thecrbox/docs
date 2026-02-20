(function () {
  const MODULE_URL = 'https://www.improv-wifi.com/sdk-js/launch-button.js';

  function ensureImprovModuleLoaded() {
    if (typeof window === 'undefined' || !('customElements' in window)) {
      return;
    }

    if (customElements.get('improv-wifi-launch-button')) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = MODULE_URL;
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureImprovModuleLoaded);
  } else {
    ensureImprovModuleLoaded();
  }
})();
