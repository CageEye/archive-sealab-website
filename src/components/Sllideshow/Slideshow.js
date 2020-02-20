import React from 'react';
import classNames from 'classnames';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import styles from './Slideshow.module.scss';
import 'moment/locale/nb';
import NonStretchedImage from '../NonStretchedImage';
import { idMaker } from '../../utils/id-maker';

const Slideshow = ({ content }) => {
  const gen = idMaker();

  return (
    <Slider
      classNames={{
        slider: classNames(styles.slider, 'slider'),
        previousButton: classNames(styles.previous, 'previousButton'),
        nextButton: classNames(styles.next, 'nextButton'),
        buttonDisabled: classNames(styles.disabled, 'disabled'),
      }}
      previousButton={<ArrowIcon />}
      nextButton={<ArrowIcon isRight />}
    >
      {content.map(imageOject => (
        <div key={gen.next().value}>
          <NonStretchedImage
            fluid={imageOject.img.childImageSharp.fluid}
            objectFit="contain"
            alt={imageOject.alt}
            className={styles.image}
          />
        </div>
      ))}
    </Slider>
  );
};

const ArrowIcon = ({ isRight = false }) => {
  return (
    <svg
      className={styles.arrowIcon}
      width="46px"
      height="46px"
      viewBox="0 0 46 46"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow icon</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group">
          <g
            id={styles.background}
            fill="white"
            fillOpacity="0.2"
            fillRule="nonzero"
          >
            <circle id="Oval" cx="23" cy="23" r="23" />
          </g>
          <g
            id={styles.arrow}
            transform={
              isRight
                ? 'translate(20.000000, 17.000000)'
                : 'translate(23.000000, 23.000000) scale(-1, 1) translate(-23.000000, -23.000000) translate(20.000000, 17.000000)'
            }
            stroke="white"
          >
            <polyline id="Path" points="0 0.5 5.5 6 0 11.5" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Slideshow;
