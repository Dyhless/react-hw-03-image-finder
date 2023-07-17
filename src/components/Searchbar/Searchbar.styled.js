import styled from 'styled-components';

export const SearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #000;
  z-index: 10;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  height: 40px;
  border: none;
  background-color: #5f116f;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  box-shadow: 0 3px 4px rgba(95, 17, 111, 0.3);
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 3px 4px rgba(95, 17, 111, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(95, 17, 111, 0.4);
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 20px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #222;
  color: #fff;

  &::placeholder {
    padding: 10px;
    font-size: 16px;
    color: #888;
  }
`;
