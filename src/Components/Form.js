import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

function Form() {
  const dispatch = useDispatch();
  const { name, email, message, nameError, emailError, messageError } = useSelector((state) => state);

  const handleNameChange = (event) => {
    dispatch({ type: 'UPDATE_NAME', payload: event.target.value });
  };

  const handleEmailChange = (event) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
  };

  const handleMessageChange = (event) => {
    dispatch({ type: 'UPDATE_MESSAGE', payload: event.target.value }); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'VALIDATE_FORM'});
    if (!nameError && !emailError && !messageError ) { 
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        dispatch({ type: 'RESET_FORM' });
        alert('Form Submitted')
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input type="text" value={name} onChange={handleNameChange} />
      </Label>
      <Label>
        Email
        <Input type="email" value={email} onChange={handleEmailChange} />
      </Label>
      <Label>
        Message:
        <TextArea value={message} onChange={handleMessageChange} />
      </Label>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
}

export default Form;
