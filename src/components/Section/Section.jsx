import PropTypes from 'prop-types';
import React from 'react';
import { SectionContainer } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <h2>{title}</h2>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Section;
