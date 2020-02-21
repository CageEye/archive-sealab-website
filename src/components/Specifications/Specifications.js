import React from 'react';
import HighlightedSpecifications from './HighlightedSpecifications';
import SpecificationList from './SpecificationList';

const Specifications = ({ highlighted, all }) => {
  if (!highlighted || highlighted.length < 1) return <></>;
  return (
    <>
      <HighlightedSpecifications highlighted={highlighted} />
      <SpecificationList list={all} />
    </>
  );
};

export default Specifications;
