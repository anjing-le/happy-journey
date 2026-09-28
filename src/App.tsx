import type { CSSProperties } from 'react';
import { tracks, type Track } from './content';

const base = process.env.BASE_PATH || '/';

function RailIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    chevron: <path d="m9 5 7 7-7 7" />,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></>,
    heart: <path d="M20.8 8.3c0 4.6-8.8 10.8-8.8 10.8S3.2 12.9 3.2 8.3a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2Z" />,
    list: <><path d="m4 6 1.5 1.5L8 5m3 2h9M4 15l1.5 1.5L8 14m3 2h9" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M10 2h4l.6 2.3 1.7.7 2.1-1.2 2.8 2.8L20 8.7l.7 1.7L23 11v4l-2.3.6-.7 1.7 1.2 2.1-2.8 2.8-2.1-1.2-1.7.7L14 23h-4l-.6-2.3-1.7-.7-2.1 1.2-2.8-2.8L4 16.3l-.7-1.7L1 14v-4l2.3-.6L4 7.7 2.8 5.6l2.8-2.8L7.7 4l1.7-.7L10 2Z" /></>,
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" /><path d="M9 21v-8h6v8" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function TrackCard({ track, index }: { track: Track; index: number }) {
  const style = { '--card-accent': track.accent } as CSSProperties;
  const content = <>
    <img className="track-card__art" src={`${base}assets/tracks/${track.id}.webp`} alt="" width="480" height="480" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
    <span className="track-card__info"><span className="track-card__name">{track.name}</span><span className="track-card__desc">{track.description}</span></span>
  </>;
  return track.href
    ? <a className="track-card track-card--link" href={`${base}${track.href}`} style={style} aria-label={`${track.name}：${track.description}`}>{content}</a>
    : <div className="track-card track-card--static" style={style} role="img" aria-label={`${track.name}：${track.description}，暂未开放`}>{content}</div>;
}

export default function App() {
  return <div className="app-shell">
    <div className="window-bar" aria-hidden="true"><span className="window-mark">happy journey</span><span className="window-note">ANJING · TRACKS</span></div>
    <div className="app-body">
      <aside className="side-rail" aria-hidden="true">
        <span className="rail-item rail-chevron"><RailIcon name="chevron" /></span>
        <span className="rail-group">
          <span className="rail-item"><RailIcon name="target" /></span>
          <span className="rail-item"><RailIcon name="calendar" /></span>
          <span className="rail-item"><RailIcon name="heart" /></span>
          <span className="rail-item"><RailIcon name="list" /></span>
          <span className="rail-item"><RailIcon name="settings" /></span>
        </span>
        <span className="rail-item rail-home"><RailIcon name="home" /></span>
      </aside>
      <main className="tracks-page" aria-labelledby="page-title">
        <h1 id="page-title">持续进化，安静生长</h1>
        <div className="tracks-grid">{tracks.map((track, index) => <TrackCard key={track.id} track={track} index={index} />)}</div>
      </main>
    </div>
  </div>;
}
