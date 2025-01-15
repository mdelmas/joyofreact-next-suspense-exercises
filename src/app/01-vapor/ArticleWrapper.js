function ArticleWrapper({ children, secondaryTitle }) {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>{secondaryTitle}</p>
      </header>
      <div className="game-grid">{children}</div>
    </section>
  );
}

export default ArticleWrapper;
