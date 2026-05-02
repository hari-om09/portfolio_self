export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          Designed &amp; Built by <span>Hariom Kr</span> · {year}
        </p>
      </div>
    </footer>
  );
}
