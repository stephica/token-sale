/** begin Hover component **/
// import React from 'react'
import { findDOMNode } from 'react-dom';
import { compose, lifecycle, withState } from 'recompose';

const Hover = compose(
  withState('isHovered', 'setIsHovered', false),
  lifecycle({
    componentDidMount() {
      this.onMouseEnter = () => {
        this.props.setIsHovered(true);
      };
      this.onMouseLeave = () => {
        this.props.setIsHovered(false);
      };
      this.node = findDOMNode(this);
      this.node.addEventListener('mouseenter', this.onMouseEnter, {
        passive: true,
      });
      this.node.addEventListener('mouseleave', this.onMouseLeave, {
        passive: true,
      });
    },
    componentWillUnmount() {
      this.node.removeEventListener('mouseenter', this.onMouseEnter, {
        passive: true,
      });
      this.node.removeEventListener('mouseleave', this.onMouseLeave, {
        passive: true,
      });
    },
  })
)(({ isHovered, children }) => children(isHovered));
/** end Hover component **/

export default Hover;
