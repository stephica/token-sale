import React from 'react';
import { string, object, bool, array, func } from 'prop-types';
import { Form, Label, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

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
    options,
    onChange,
  } = props;
  const _onchange = (param, data) => {
    input.onChange(data.value);
    if (onChange) {
      onChange(data.value);
    }
  };

  const { error, touched } = meta;
  const showHint = hint && error;
  const showError = error && touched;
  return (
    <Form.Field>
      {overheadLabel && <label>{overheadLabel}</label>}
      <Dropdown
        style={{ fontWeight: 'normal' }}
        fluid
        selection
        {...input}
        options={options}
        value={input.value}
        onChange={_onchange}
        placeholder={placeholder}
      />
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
  fluid: bool,
  search: bool,
  selection: bool,
  options: array,
  input: object,
  meta: object,
  onChange: func,
};

export default ReduxFormInput;
