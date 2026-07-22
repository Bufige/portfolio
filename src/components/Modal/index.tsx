import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';

import { Container } from './styles';
import SlideShow from '../SlideShow';
import Tag from '../Tag';
import type { ProjectData } from '@data/ProjectsData';

interface ModalProps {
  show: boolean;
  project: ProjectData;
  onClose: () => void;
  interval?: number;
}

const Modal = ({ show, project, onClose, interval = 5000 }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(false);
    onClose();
  };

  const tags = [...project.tech, ...project.skills];

  const portalTarget = document.querySelector('#modal') as HTMLElement | null;
  if (!portalTarget) return null;

  return createPortal(
    <Container>
      <div className={'modal' + (visible ? ' show' : ' hide')}>
        <FontAwesomeIcon icon={faTimes} size="2x" className="btn close" onClick={handleClose} />
        <div className="header" />
        <div className="content">
          <div className="slideshow">
            <SlideShow images={project.images} interval={interval} />
          </div>
          <div className="details">
            <div className="project-name">
              <h1>{project.name}</h1>
            </div>
            <div className="tags">
              {tags.map((item, index) => (
                <Tag key={index} text={item} />
              ))}
            </div>
            <div className="about">About</div>
            <p className="project-summary">{project.description}</p>
            <div className="links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEye} /> Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCode} /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>,
    portalTarget,
  );
};

export default Modal;
