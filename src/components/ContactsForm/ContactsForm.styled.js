import styled from "@emotion/styled";
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 240px;
`

export const FormBtn = styled.button`
    width: 240px;
    height: 30px;
    cursor: pointer;
    background-color: grey;
    border: none;
    border-radius: 4px;
    &:hover{
        background-color: aquamarine;
        color: white;
    }
`;