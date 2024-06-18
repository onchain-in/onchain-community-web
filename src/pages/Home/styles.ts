import { EColor } from "@styles/color";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(145deg, ${EColor.COLOR_PRIMARY}, ${EColor.COLOR_SUB});
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const NewsInfo = styled.div`
  margin-bottom: 20px;
`;

export const NewsTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  white-space: normal;
  width: 100%;
`;

export const NewsUrl = styled.a`
  font-size: 14px;
  color: ${EColor.BLUE};
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  min-height: 100px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  background-color: ${props => props.disabled ? EColor.TEXT_400 : EColor.BLUE};
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.disabled ? EColor.TEXT_400 : '#0056b3'};
  }
`;
