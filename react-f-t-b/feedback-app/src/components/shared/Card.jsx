import React from 'react';
import PropTypes from 'prop-types';

// -------------------------------------------------------
// Creates a Style-only Component using conditional style.
// -------------------------------------------------------
function Card({ children, reverse = false }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  //   return (
  //     <div
  //       className="card"
  //       style={{
  //         backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
  //         color: reverse ? 'white' : 'black',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
