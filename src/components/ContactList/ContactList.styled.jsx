import styled from '@emotion/styled';

export const ListStyled = styled.ul`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

export const ContactItemStyled  = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  color: black;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ErrorMasage = styled.p`
color: red;
`