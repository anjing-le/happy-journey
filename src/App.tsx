import { directions } from './content';

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Happy Journey，回到首页">
          <span className="wordmark-dot" aria-hidden="true" />
          happy journey
        </a>
        <nav aria-label="页面导航">
          <a href="#directions">探索方向</a>
          <a href="https://github.com/anjing-le/happy-journey" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="hero-content">
            <span className="eyebrow"><span className="eyebrow-dot" /> A LIFE IN PROGRESS</span>
            <h1 id="hero-title">把人生，<br /><span className="gradient-text">慢慢写成一段旅程。</span></h1>
            <p className="hero-description">知识、经历，以及以后想珍藏的每个方向。<br className="desktop-break" />这里是一个会随着生活继续生长的地方。</p>
            <a className="hero-action" href="#directions">从这里开始 <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span /> 向下看看</div>
        </section>

        <section className="directions-section" id="directions" aria-labelledby="directions-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE JOURNEY</span>
              <h2 id="directions-title">旅程的方向</h2>
            </div>
            <p>从已有的两条线索开始，未来还会有更多。</p>
          </div>
          <div className="direction-grid">
            {directions.map((direction, index) => (
              <a className="direction-card" href={`#${direction.id}`} key={direction.id} style={{ '--card-accent': direction.color } as React.CSSProperties}>
                <span className="direction-index">0{index + 1} / {direction.english}</span>
                <span className="direction-main"><strong>{direction.name}</strong><span className="direction-arrow" aria-hidden="true">↗</span></span>
                <span className="direction-description">{direction.description}</span>
                <span className="direction-edge" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="entries-section" aria-label="各方向的记录">
          {directions.map((direction) => (
            <div className="entry-row" id={direction.id} key={direction.id}>
              <div className="entry-heading"><span className="entry-dot" style={{ background: direction.color }} /><h3>{direction.name}</h3></div>
              {direction.entries.length ? (
                <ul className="entry-list">{direction.entries.map((entry) => (
                  <li key={entry.href}><a href={entry.href}><span>{entry.date}</span><strong>{entry.title}</strong><span>{entry.description}</span><span aria-hidden="true">↗</span></a></li>
                ))}</ul>
              ) : <p className="entry-empty">这一页还在等待第一篇记录。</p>}
            </div>
          ))}
        </section>
      </main>

      <footer className="site-footer"><span>Happy Journey</span><span>记录还在继续 · <a href="#top">回到顶部 ↑</a></span></footer>
    </>
  );
}
