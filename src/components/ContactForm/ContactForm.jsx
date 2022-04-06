import { useState } from 'react';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  SubmitButtonStyled,
} from './ContactForm.styled';
import toast from 'react-hot-toast';
import {useGetContactQuery, useAddContactMutation } from 'services/contactsApi';
import Spiner from 'components/Spiner/Spiner';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, {isLoading}] = useAddContactMutation();
  const { data } = useGetContactQuery();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const newContact = {      
      name,
      phone: number,
    };
    addNewContact(newContact);
    setNumber('');
    setName('');
  };

  const addNewContact = newContact => {
    if (
      data.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      toast.error('contact with such name already exists');
      return;
    }
    addContact(newContact);
    toast.success('contact added');
  };

  return (
    <>
      <FormStyled onSubmit={submitForm}>
        <LabelStyled >
          Name
          <InputStyled
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelStyled >
        <LabelStyled >
          Number
          <InputStyled
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelStyled >
        <SubmitButtonStyled  type="submit" disabled={isLoading} >
          {isLoading && <Spiner size={12}/>}
          Add contact</SubmitButtonStyled >
      </FormStyled>
    </>
  );
}
