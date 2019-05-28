import styles from './index.css';

import tk from '../assets/imgs/ticket_bg.png';
console.log( tk);


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>

      <img src={tk} />

      <img src="../assets/imgs/ticket_bg.png"/>
    </div>
  );
}
