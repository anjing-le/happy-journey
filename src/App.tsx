import type { CSSProperties } from 'react';
import { tracks, type Track } from './content';

const base = process.env.BASE_PATH || '/';

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
  return <main className="tracks-page" aria-label="人生方向入口">
    <div className="tracks-grid">{tracks.map((track, index) => <TrackCard key={track.id} track={track} index={index} />)}</div>
  </main>;
}
