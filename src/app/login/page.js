export const metadata = { title: "Solar Ladder | Login" };

export default function Login() {
  return (
    <div className="login-page">
      <aside className="login-aside" aria-label="Solar Ladder">
        <div className="login-story-art" aria-hidden="true">
          <svg viewBox="0 0 420 320" width="420" height="320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="28" y="52" width="364" height="220" rx="16" fill="#F4FAFA" stroke="#D7E7E8"/>
            <rect x="56" y="84" width="120" height="72" rx="10" fill="#03999E" opacity="0.12"/>
            <rect x="188" y="84" width="176" height="12" rx="6" fill="#0F2A2F" opacity="0.18"/>
            <rect x="188" y="106" width="140" height="10" rx="5" fill="#0F2A2F" opacity="0.12"/>
            <rect x="188" y="128" width="156" height="10" rx="5" fill="#0F2A2F" opacity="0.12"/>
            <rect x="56" y="172" width="308" height="76" rx="12" fill="#FFFFFF" stroke="#E3ECEC"/>
            <circle cx="92" cy="210" r="18" fill="#03999E" opacity="0.2"/>
            <rect x="122" y="196" width="120" height="10" rx="5" fill="#0F2A2F" opacity="0.16"/>
            <rect x="122" y="214" width="88" height="8" rx="4" fill="#0F2A2F" opacity="0.1"/>
            <rect x="276" y="194" width="68" height="32" rx="8" fill="#03999E"/>
          </svg>
        </div>
        <div className="login-story-copy">
          <p className="login-story-title">The operating system for solar.</p>
          <p className="login-story-desc">From first lead to final install, all in one place.</p>
        </div>
      </aside>
      <main className="login-main">
        <div className="login-box">
          <h1>Welcome back</h1>
          <p className="sub">Sign in to your account.</p>
          <form className="login-form" action="" method="get">
            <label htmlFor="email">Email
              <input id="email" type="email" name="email" placeholder="Enter your work email" required />
            </label>
            <label htmlFor="password">Password
              <span className="password-wrap">
                <input id="password" type="password" name="password" placeholder="Enter your password" required />
                <button type="button" className="show-btn" aria-label="Show password as plain text">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
              </span>
            </label>
            <button className="submit" type="submit">Sign in</button>
          </form>
          <div className="login-divider"><span>or</span></div>
          <button className="secondary-btn" type="button">Continue with phone</button>
          <p className="login-footer">Can&apos;t get into your account? <button type="button" className="link-btn">Reset your password</button></p>
        </div>
      </main>
    </div>
  );
}
