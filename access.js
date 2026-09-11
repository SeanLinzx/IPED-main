/* Convenience gate only: this static frontend is not a security boundary. */
(() => {
  const storageKey = 'touchlab-access-v1';
  const accessKey = 'touchlab2026';
  let unlocked = false;
  try { unlocked = sessionStorage.getItem(storageKey) === accessKey; } catch (_) {}
  if (unlocked) return;

  document.documentElement.classList.add('touchlab-locked');
  const style = document.createElement('style');
  style.textContent = `
    html.touchlab-locked { background:#080808!important; overflow:hidden!important; }
    html.touchlab-locked body { margin:0!important; overflow:hidden!important; }
    html.touchlab-locked body > :not(#touchlab-access) { display:none!important; }
    #touchlab-access { position:fixed; inset:0; z-index:2147483647; box-sizing:border-box; display:grid; place-items:center; padding:28px; overflow:auto; background:#080808; color:#f5f5f5; font:16px/1.6 Arial,'PingFang SC','Microsoft YaHei',sans-serif; cursor:auto; }
    #touchlab-access * { box-sizing:border-box; cursor:auto; }
    #touchlab-access form { width:100%; max-width:380px; }
    #touchlab-access img { display:block; width:230px; max-width:100%; height:auto; margin-bottom:52px; }
    #touchlab-access .access-kicker { color:#888; font-size:11px; letter-spacing:2px; }
    #touchlab-access h1 { font-size:30px; font-weight:400; margin:12px 0 30px; }
    #touchlab-access label { display:block; color:#bbb; font-size:14px; margin-bottom:10px; }
    #touchlab-access input { display:block; width:100%; padding:14px 16px; border:1px solid #555; border-radius:0; background:#151515; color:white; font:inherit; cursor:text; }
    #touchlab-access input:focus-visible,#touchlab-access button:focus-visible { outline:2px solid #fff; outline-offset:4px; }
    #touchlab-access button { width:100%; border:0; padding:14px 18px; background:#f4f4f4; color:#111; font:inherit; cursor:pointer; }
    #touchlab-access .access-error { min-height:26px; margin:10px 0; color:#ffb6ac; font-size:13px; }
    #touchlab-access .access-note { color:#888; font-size:12px; margin-top:22px; }
  `;
  document.head.append(style);
  document.addEventListener('DOMContentLoaded', () => {
    const gate = document.createElement('section');
    gate.id = 'touchlab-access';
    gate.setAttribute('aria-label', '网站访问 / Site access');
    gate.innerHTML = `<form>
      <img src="./assets/home/logo-touchlab.svg" alt="TouchLab 可触界面实验室" width="250" height="64">
      <p class="access-kicker">TOUCHLAB / INVITATION ONLY</p>
      <h1>欢迎访问实验室</h1>
      <label for="touchlab-key">访问密钥 / Access key</label>
      <input id="touchlab-key" type="password" autocomplete="current-password" spellcheck="false" autocapitalize="none" required aria-describedby="touchlab-key-error">
      <p id="touchlab-key-error" class="access-error" role="status" aria-live="polite"></p>
      <button type="submit">进入网站 / Enter →</button>
      <p class="access-note">请输入访问密钥以继续。<br>Enter your access key to continue.</p>
    </form>`;
    document.body.append(gate);
    const input = gate.querySelector('input');
    gate.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      if (input.value !== accessKey) {
        gate.querySelector('.access-error').textContent = '密钥不正确，请重试。 / Incorrect key.';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        input.select();
        return;
      }
      try { sessionStorage.setItem(storageKey, accessKey); } catch (_) {}
      gate.remove();
      style.remove();
      document.documentElement.classList.remove('touchlab-locked');
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
      const main = document.querySelector('main');
      if (main) { main.setAttribute('tabindex', '-1'); main.focus({ preventScroll:true }); }
    });
    input.focus({ preventScroll:true });
  }, { once:true });
})();
