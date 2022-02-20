import play3 from '../playground-section-3';
import play4 from '../playground-section-4';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    play3();
  }, []);

  return <div>Hello World</div>;
}
