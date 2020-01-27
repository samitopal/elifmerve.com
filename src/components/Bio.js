import React from 'react';
import { Link } from 'react-navi';
import styles from './Bio.module.css';
import profilePic from './profilepic.png';

function Bio(props) {
  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
    >
      <img src={profilePic} alt="Me" />
      <div>
        <div>
          Product Management | Mobile Apps | Digital Marketing
        </div>
        <div className={styles.headerLinks}>
          <span className={styles.bull}>&bull;</span>
          <a href="https://linkedin.com/in/elifmerveakyol" rel="nofollow noopener noreferrer" target="_blank">LinkedIn</a>
          <span className={styles.bull}>&bull;</span>
          <a href="https://medium.com/@elifmtopal" rel="nofollow noopener noreferrer" target="_blank">Medium</a>
          <span className={styles.bull}>&bull;</span>
          <a href="https://about.elifmerve.com" title="CV">CV</a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
