import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const addGutterToChildren = (children, style, responsive) => {
  const length = React.Children.count(children);
  return React.Children.map(children, (child, i) => {
    return (i < length - 1 || responsive) && child
      ? React.cloneElement(child, { style: { ...child.props.style, ...style } })
      : child;
  });
};

const Flex = styled.div`
  display: flex;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ wrap }) => wrap && 'flex-wrap: wrap;'}
  ${({ height }) => height && `height: ${height};`}
  ${({ justifyContent }) =>
  justifyContent && `justify-content: ${justifyContent};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`}
  ${({ paddingX }) =>
  paddingX && `padding-left: ${paddingX}; padding-right: ${paddingX};`}
  ${({ paddingY }) =>
  paddingY && `padding-top: ${paddingY}; padding-bottom: ${paddingY};`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`}
  ${({ width }) => width && `width: ${width}`};
`;

const FlexRow = styled(Flex)`
  flex-direction: row;
`;

const FlexCol = styled(Flex)`
  flex-direction: column;
`;

const FlexGrid = styled(FlexRow)`
  flex-wrap: wrap;
`;

const Fill = styled(Flex)`
  display: flex;
  flex: 1 1 auto;
`;

const Col = ({ gutter, children, ...props }) => {
  return (
    <FlexCol {...props}>
      {gutter
        ? addGutterToChildren(children, { marginBottom: gutter })
        : children}
    </FlexCol>
  );
};

const Row = ({ gutter, children, ...props }) => {
  return (
    <FlexRow {...props}>
      {gutter
        ? addGutterToChildren(children, { marginRight: gutter })
        : children}
    </FlexRow>
  );
};

const Grid = ({ gutterX = '0px', gutterY = '0px', children, ...props }) => {
  return (
    <FlexGrid {...props} style={{ margin: `-${gutterX} -${gutterY}` }}>
      {gutterX || gutterY
        ? addGutterToChildren(
            children,
            {
              marginRight: gutterX,
              marginLeft: gutterX,
              marginTop: gutterY,
              marginBottom: gutterY,
            },
            true
          )
        : children}
    </FlexGrid>
  );
};

const flexProps = {
  alignContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
    'stretch',
  ]),
  alignItems: PropTypes.oneOf([
    'baseline',
    'center',
    'flex-end',
    'flex-start',
    'stretch',
  ]),
  children: PropTypes.node,
  flex: PropTypes.string,
  gutter: PropTypes.string,
  height: PropTypes.string,
  justifyContent: PropTypes.oneOf([
    'center',
    'flex-end',
    'flex-start',
    'space-around',
    'space-between',
  ]),
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  padding: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  width: PropTypes.string,
  wrap: PropTypes.bool,
};

Col.PropTypes = flexProps;
Row.PropTypes = flexProps;
Grid.PropTypes = {
  ...flexProps,
  gutterX: PropTypes.string,
  gutterY: PropTypes.string,
};
Fill.PropTypes = flexProps;

export { Col, Row, Grid, Fill };
