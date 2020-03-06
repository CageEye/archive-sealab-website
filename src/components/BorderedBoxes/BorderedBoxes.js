import React from 'react';
import classNames from 'classnames';
import styles from './BorderedBoxes.module.scss';
import NonStretchedImage from '../NonStretchedImage';
import { idMaker } from '../../utils/id-maker';

const gen = idMaker();
const BorderedBoxes = ({
  heading,
  subheading,
  description,
  boxes,
  className,
}) => {
  if (
    !heading ||
    !description ||
    !boxes ||
    boxes.length < 1 ||
    !boxes[0].image ||
    !boxes[0].description
  )
    return <></>;

  return (
    <section className={classNames('section', className)}>
      <div className="container">
        <p>{subheading}</p>
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="wrapper">
          {boxes.map(boxContent => (
            <Box
              image={boxContent.image}
              description={boxContent.description}
              key={gen.next().value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Box = ({ image, description }) => {
  const Image = () => {
    if (!image) return <></>;
    if (image.childImageSharp && image.childImageSharp.fluid)
      return (
        <NonStretchedImage
          fluid={image.childImageSharp.fluid}
          objectFit="contain"
          alt="Logo"
          className={styles.box__image}
        />
      );
    if (image.publicURL)
      return (
        <NonStretchedImage
          objectFit="contain"
          alt="Logo"
          className={styles.box__image}
          publicURL={image.publicURL}
        />
      );
    return <></>;
  };
  return (
    <div className={classNames('box', styles.box)}>
      <Image />
      <p>{description}</p>
    </div>
  );
};

export default BorderedBoxes;
