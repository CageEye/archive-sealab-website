import React from 'react';
import Img from 'gatsby-image';

const NonStretchedImage = props => {
  let normalizedProps = props;
  // eslint-disable-next-line
    if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
        maxHeight: '100%',
      },
    };
  }

  return <Img {...normalizedProps} />;
};

export default NonStretchedImage;
