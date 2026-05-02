import { useState, useEffect } from 'react';

const TEXTS = [
  'Full Stack Developer',
  'Problem Solver',
  'CS @ NIT Patna',
  'Open Source Contributor',
  'Tech Enthusiast',
];

const TYPE_SPEED  = 70;
const DELETE_SPEED = 40;
const PAUSE_MS     = 1800;

export function TypeWriter() {
  const [text, setText]     = useState('');
  const [idx, setIdx]       = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TEXTS[idx];

    if (!deleting && text === target) {
      const t = setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIdx(i => (i + 1) % TEXTS.length);
      return;
    }

    const speed = deleting ? DELETE_SPEED : TYPE_SPEED;
    const t = setTimeout(() => {
      setText(prev =>
        deleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, idx, deleting]);

  return (
    <>
      <span className="tw-text">{text}</span>
      <span className="cursor" aria-hidden />
    </>
  );
}
