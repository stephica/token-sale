import React from 'react';
import { string, object } from 'prop-types';
import { Form, Label, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const UniformLabel = styled(Label)`
  &&&{
    width: 85px;
    display: flex;
    align-items: center;
  }
`;

const Hint = styled(
  Label
)` &&&{ background-color: ${props => props.theme.warning} } `;
const ErrorMessage = styled(
  'p'
)` color: ${props => props.theme.red}; text-align: left; `;

const ReduxFormInput = props => {
  const {
    overheadLabel,
    input = {},
    placeholder,
    label,
    hint,
    meta = {},
  } = props;
  const { error, touched } = meta;
  const showHint = hint && error;
  const showError = error && touched;
  return (
    <Form.Field>
      {overheadLabel && <label>{overheadLabel}</label>}
      <Input
        {...input}
        placeholder={placeholder}
        labelPosition={label ? 'left' : null}
      >
        {label && <UniformLabel>{label}</UniformLabel>}
        <input />
      </Input>
      {showHint && <Hint basic pointing content={hint} />}
      {showError && <ErrorMessage>{error}</ErrorMessage>}
    </Form.Field>
  );
};

ReduxFormInput.propTypes = {
  overheadLabel: string,
  placeholder: string,
  hint: string,
  label: string,
  input: object,
  meta: object,
};

export default ReduxFormInput;
