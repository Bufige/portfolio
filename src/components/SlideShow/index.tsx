import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

import { Container } from './styles';
import Dot from '../Dot';

const DEFAULT_INTERVAL = 3000;

interface SlideShowProps {
  images: string[];
  interval?: number;
}

const SlideShow = ({ images, interval = DEFAULT_INTERVAL }: SlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentIndex(prev => (prev + 1 === images.length ? 0 : prev + 1));
    }, interval);
    return () => clearTimeout(id);
  }, [currentIndex, images, interval]);

  const goToImage = useCallback((index: number) => {
    const n = images.length;
    if (index < 0) index = n - 1;
    else if (index >= n) index = 0;
    setCurrentIndex(index);
  }, [images.length]);

  return (
    <Container>
      <div className="images">
        <img src={images[currentIndex]} alt="project" />
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="3x"
          className="arrow left"
          onClick={() => goToImage(currentIndex - 1)}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="3x"
          className="arrow right"
          onClick={() => goToImage(currentIndex + 1)}
        />
      </div>
      <div className="dots">
        {images.map((_item, index) => (
          <Dot
            key={index}
            id={index}
            width="16px"
            height="16px"
            active={index === currentIndex}
            color="rgb(63, 63, 63)"
            onClick={setCurrentIndex}
          />
        ))}
      </div>
    </Container>
  );
};

export default SlideShow;
