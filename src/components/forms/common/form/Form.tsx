import React from 'react';

import { StyledFormContainer, StyledFormItemContainer } from './Form.style';

interface FormProps {
  children: React.ReactElement[];
}

const Form = (props: FormProps): JSX.Element => {
  const { children } = props;

  return (
    <StyledFormContainer>
      {React.Children.map(children, (child, index) => (
        <StyledFormItemContainer $isLastChild={index === children.length - 1}>
          {React.cloneElement(child)}
        </StyledFormItemContainer>
      ))}
    </StyledFormContainer>
  );
};

export default Form;
