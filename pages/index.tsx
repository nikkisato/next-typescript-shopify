import play3 from '../playground-section-3';
import play4 from '../playground-section-4';
import play5 from '../playground-section-5';
import play6 from '../playground-section-6';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    play6();
  }, []);

  return <div>Hello World</div>;
}
