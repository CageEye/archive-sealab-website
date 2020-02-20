import React from 'react';
import classNames from 'classnames';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import styles from './Slideshow.module.scss';
import 'moment/locale/nb';

const Slideshow = ({ content }) => {
  return (
    <Slider classNames={classNames(styles.slider)}>
      {content.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <div>{article.description}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
