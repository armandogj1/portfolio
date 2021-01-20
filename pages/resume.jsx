import Layout from '../src/Layout';
import styles from '../src/styles/resume.module.css';

const Resume = () => {
  return (
    <embed
      className={styles.resume}
      type='application/pdf'
      src='./cv.pdf'
      height='100%'
      width='100%'
    ></embed>
  );
};

export default Resume;
