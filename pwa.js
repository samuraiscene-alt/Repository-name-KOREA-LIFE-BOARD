(() => {
  const root = document.documentElement;
  let hiddenAt = 0;
  let resumeTimer = 0;

  const stateText = () => document.querySelector('#pwaRuntimeStatus');

  const setStatus = (text, kind = '') => {
    const el = stateText();
    if (!el) return;
    el.textContent = text;
    el.dataset.kind = kind;
  };

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  }

  function updateViewportHeight() {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const forceLandscape = height > width;

    root.classList.toggle('klb-force-landscape', forceLandscape);
    root.style.setProperty('--app-width', `${forceLandscape ? height : width}px`);
    root.style.setProperty('--app-height', `${forceLandscape ? width : height}px`);
  }

  function updateConnectionLabel() {
    if (!navigator.onLine) {
      setStatus('오프라인 모드', 'offline');
      return;
    }
    if (isStandalone()) {
      setStatus('홈 화면 앱 · 온라인', 'standalone');
      return;
    }
    setStatus('Safari · 온라인', 'browser');
  }

  function dispatchResume(reason = 'resume') {
    clearTimeout(resumeTimer);
    root.classList.add('pwa-resuming');
    updateViewportHeight();
    resumeTimer = window.setTimeout(() => {
      updateViewportHeight();
        root.classList.remove('pwa-resuming');
      window.dispatchEvent(new CustomEvent('klb:pwaresume', { detail: { reason, hiddenAt } }));
      updateConnectionLabel();
    }, 120);
  }

  async function requestLandscapeSilently() {
    try {
      if (screen.orientation?.lock) await screen.orientation.lock('landscape');
    } catch (_) {}
  }

  window.KLB_REQUEST_LANDSCAPE = requestLandscapeSilently;

  window.addEventListener('online', updateConnectionLabel, { passive: true });
  window.addEventListener('offline', updateConnectionLabel, { passive: true });
  window.addEventListener('resize', () => {
    updateViewportHeight();
  }, { passive: true });
  window.addEventListener('orientationchange', () => {
    window.setTimeout(() => {
      updateViewportHeight();
      }, 180);
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      hiddenAt = Date.now();
      root.classList.add('pwa-suspended');
      return;
    }
    root.classList.remove('pwa-suspended');
    dispatchResume('visibility');
  });

  window.addEventListener('pageshow', (event) => {
    root.classList.remove('pwa-suspended');
    dispatchResume(event.persisted ? 'bfcache' : 'pageshow');
  }, { passive: true });

  window.addEventListener('focus', () => {
    if (document.visibilityState === 'visible') dispatchResume('focus');
  }, { passive: true });

  document.addEventListener('DOMContentLoaded', () => {
    updateViewportHeight();
    updateConnectionLabel();
  }, { once: true });

  if (!('serviceWorker' in navigator)) {
    document.addEventListener('DOMContentLoaded', () => setStatus('PWA 미지원', 'error'), { once: true });
    return;
  }

  window.addEventListener('load', async () => {
    if (isStandalone()) requestLandscapeSilently();
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', { scope: './' });
      await navigator.serviceWorker.ready;
      updateConnectionLabel();

      if (!navigator.serviceWorker.controller) {
        setStatus('PWA 캐시 준비됨 · 다음 실행부터 오프라인 지원', 'ready');
      }

      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            setStatus('새 버전 준비됨 · 앱을 다시 열면 적용', 'update');
          }
        });
      });
    } catch (error) {
      setStatus('PWA 등록 실패 · 온라인 실행은 가능', 'error');
      console.warn('PWA service worker registration failed:', error);
    }
  });
})();