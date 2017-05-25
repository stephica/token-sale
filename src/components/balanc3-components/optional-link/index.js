import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const OptionalLink = props =>
  props.to ? <Link {...props} /> : <span {...props} />;
OptionalLink.propTypes = { to: string };

export default OptionalLink;
