import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faPortrait } from '@fortawesome/free-solid-svg-icons/faPortrait';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import { Container } from './styles';

const FollowMe = () => (
  <Container>
    <ul>
      <li className="github">
        <a href="https://github.com/Bufige" target="_blank" rel="noopener noreferrer">
          <span>Github</span>
          <FontAwesomeIcon icon={faGithub} className="icon github" />
        </a>
      </li>
      <li className="linkedin">
        <a href="https://www.linkedin.com/in/leonardo-igor-232109102/" target="_blank" rel="noopener noreferrer">
          <span>Linkedin</span>
          <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />
        </a>
      </li>
      <li className="resume">
        <a href="https://docs.google.com/document/d/1Dxx-JWWrN5zckmVhIBPHujT2Q92u2ksw1Yi0JU5025E/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <span>Resume</span>
          <FontAwesomeIcon icon={faPortrait} className="icon resume" />
        </a>
      </li>
      <li className="email">
        <a href="mailto:bufige1434@gmail.com" target="_blank" rel="noopener noreferrer">
          <span>Email</span>
          <FontAwesomeIcon icon={faEnvelope} className="icon email" />
        </a>
      </li>
    </ul>
  </Container>
);

export default FollowMe;
