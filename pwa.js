(() => {
  const root = document.documentElement;
  let hiddenAt = 0;
  let resumeTimer = 0;

  const stateText = () => document.querySelector('#pwaRuntimeStatus');
  const orientationHelp = () => document.querySelector('#orientationHelp');
  const orientationButton = () => document.querySelector('#orientationLockButton');

  const setStatus = (text, kind = '') => {
    const el = stateText();
    if (!el) return;
    el.textContent = text;
    el.dataset.kind = kind;
  };

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  }

  function isPortrait() {
    return window.matchMedia('(orientation: portrait)').matches;
  }

  function updateViewportHeight() {
    root.style.setProperty('--app-height', `${Math.max(1, window.innerHeight)}px`);
  }

  function updatePortraitGuard() {
    const guard = document.querySelector('#portraitGuard');
    if (!guard) return;
    const portrait = isPortrait();
    guard.setAttribute('aria-hidden', portrait ? 'false' : 'true');
    root.classList.toggle('is-portrait', portrait);
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
    updatePortraitGuard();
    resumeTimer = window.setTimeout(() => {
      updateViewportHeight();
      updatePortraitGuard();
      root.classList.remove('pwa-resuming');
      window.dispatchEvent(new CustomEvent('klb:pwaresume', { detail: { reason, hiddenAt } }));
      updateConnectionLabel();
    }, 120);
  }

  async function tryLandscapeLock() {
    const help = orientationHelp();
    try {
      if (screen.orientation?.lock) {
        await screen.orientation.lock('landscape');
        if (help) help.textContent = '가로모드를 요청했습니다. 기기를 가로로 잡아주세요.';
        return;
      }
    } catch (error) {
      console.info('Orientation lock unavailable:', error);
    }
    if (help) help.textContent = '아이폰에서는 제어센터의 세로 화면 방향 고정을 끈 뒤 기기를 가로로 돌려주세요.';
  }

  window.addEventListener('online', updateConnectionLabel, { passive: true });
  window.addEventListener('offline', updateConnectionLabel, { passive: true });
  window.addEventListener('resize', () => {
    updateViewportHeight();
    updatePortraitGuard();
  }, { passive: true });
  window.addEventListener('orientationchange', () => {
    window.setTimeout(() => {
      updateViewportHeight();
      updatePortraitGuard();
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
    updatePortraitGuard();
    updateConnectionLabel();
    orientationButton()?.addEventListener('click', tryLandscapeLock);
  }, { once: true });

  if (!('serviceWorker' in navigator)) {
    document.addEventListener('DOMContentLoaded', () => setStatus('PWA 미지원', 'error'), { once: true });
    return;
  }

  window.addEventListener('load', async () => {
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