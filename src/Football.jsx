import { useState, useEffect } from 'react';
import styles from './styles/index.module.css';

export const Football = () => {
  const [clicked, setClicked] = useState(false);
  const [position, setPosition] = useState({
    x: 600,
    y: 600,
  });

  useEffect(() => {
    const ball = document.getElementById('football');
    // console.log(ball.clientWidth);
    // console.log('this is innerWidth', window.innerWidth);
    setPosition({
      x: window.innerWidth - window.innerWidth / 5,
      y: window.innerHeight - ball.clientHeight / 64,
    });
  }, [process.browser]);

  const stylePosition = {
    top: position.y,
    left: position.x,
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setClicked(true);
  };

  const handleMove = (e) => {
    if (clicked) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e) => {
    setClicked(false);
  };

  return (
    <div>
      <div
        id='football'
        className={styles.ball}
        className={styles.football}
        style={stylePosition}
      >
        ⚽️
      </div>
      <div
        className={styles.ghost}
        style={stylePosition}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleMove}
        onTouchStart={handleMouseDown}
      ></div>
    </div>
  );
};
