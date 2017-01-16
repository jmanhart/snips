import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';

function Home() {
  return (
    <div>
      <p style={s.p}>
        Meggings small batch 8-bit single-origin coffee dreamcatcher venmo. Fashion axe four dollar toast iPhone knausgaard vape, migas 90's pickled heirloom bespoke godard everyday carry chicharrones.
      </p>
      <p style={s.p}>
        Twee put a bird on it woke, aesthetic 3 wolf moon drinking vinegar bicycle rights YOLO hot chicken waistcoat. Celiac DIY fixie, af truffaut ramps 90's chia knausgaard gochujang viral microdosing trust fund.
      </p>
      <div style={s.pageLinkContainer}>
          <Link to="/example">Example page</Link>
      </div>
      <div style={s.pageLinkContainer}>
          <Link to="personal-portfolio-17/two-deep">Example two deep with query and hash</Link>
      </div>
    </div>
  );
}

export default Home;
