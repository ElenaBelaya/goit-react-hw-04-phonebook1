import { Form, Field } from 'formik';
import styled from '@emotion/styled';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  width: 50%;
  padding: 10px;
`;

export const FieldStyled = styled(Field)`
  margin-right: 10px;
  display: inline-block;
  width: 200px;
  margin-bottom: 15px;
`;
export const ButtonSubmit = styled('button')`
  display: inline-block;
  width: 120px;
`;

export const TitleInput = styled('p')`
  margin: 0px 0px 5px 0px;
`;
