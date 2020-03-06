import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './QuoteSection.module.scss';

const QuoteSection = ({ quote, author }) => {
  return (
    <>
      <p>{quote}</p>
      <p>{author}</p>
    </>
  );
};

export default QuoteSection;
