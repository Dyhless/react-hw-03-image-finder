import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: #5f116f;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8f33a6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(95, 17, 111, 0.4);
  }
`;
