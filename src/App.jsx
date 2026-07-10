export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="page">
      <div className="radar" aria-hidden="true">
        <span className="radar__ring" />
        <span className="radar__ring" />
        <span className="radar__ring" />
        <span className="radar__ring" />
      </div>

      <main className="content">
        <div className="mark">
          <img
            src="/targetone_transparent.png"
            alt="Target One"
            className="mark__logo"
          />
        </div>

        <h1 className="headline">
          We're building something <em>amazing.</em>
        </h1>

        <p className="lede">See you soon.</p>

        <div className="divider" aria-hidden="true" />
      </main>

      <footer>&copy; {year} Target One. All rights reserved.</footer>
    </div>
  );
}
