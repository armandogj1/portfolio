import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../src/Layout';
import { Football } from '../src/Football';
import styles from '../src/styles/index.module.css';

const App = (props) => {
  useEffect(() => {
    document.body.style.maxHeight = '100vh';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.maxHeight = 'none';
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className={styles.index}>
      <div className={styles.intro}>
        <p>Hi, my name is</p>
        <h1>Armando Garcia-Jacquier</h1>
      </div>
      <p>
        I am a full-stack developer, living in NYC focusing on making
        interesting things while keeping it simple.
      </p>
      <Link href='/projects'>
        <a id='main-page-button'>Checkout My Work</a>
      </Link>
      <a
        href='https://github.com/armandogj1'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src='/GitHub.png' alt='github logo' width='24' height='24' />
      </a>
    </section>
  );
};

export default App;
