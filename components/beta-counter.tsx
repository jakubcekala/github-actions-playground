'use client';

import { useState } from 'react';
import { useFlags } from '@flagsmith/flagsmith/react';

export default function BetaCounter() {
  const { beta_counter: counterFlag } = useFlags(['beta_counter']);
  const [count, setCount] = useState(0);

  if (!counterFlag?.enabled) return null;

  return (
    <section>
      <p>
        🧪 <strong>beta_counter</strong> is ON — gated by a client-side flag.
        Count: {count}
      </p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </section>
  );
}
