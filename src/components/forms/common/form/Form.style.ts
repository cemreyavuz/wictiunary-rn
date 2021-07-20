import styled from '../../../../common/theme/styled';

export const StyledFormContainer = styled.View`
  padding: 24px 16px;
`;

export const StyledFormItemContainer = styled.View<{ $isLastChild?: boolean }>`
  ${({ $isLastChild }) => !$isLastChild && 'margin-bottom: 24px;'}
`;
