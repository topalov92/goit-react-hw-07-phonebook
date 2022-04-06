import { Toaster } from 'react-hot-toast';
import Filter from './components/Filter/Filter';
import { Container } from './components/Container/Container'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  
  return (
    <Container>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
