import play3 from '../playground-section-3';
import play4 from '../playground-section-4';
import play5 from '../playground-section-5';
import play6 from '../playground-section-6';
import play7 from '../playground-section-7';
import play8 from '../playground-section-8';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    play8();
  }, []);

  return <div>Hello World</div>;
}
