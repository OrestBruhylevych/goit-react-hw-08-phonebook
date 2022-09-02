import { Box, StyledTitle } from '../components/StyledComponent';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';
import { MyForm } from '../components/Form/MyForm';
import { contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';

export default function ContactsPage() {
  const contacts = useSelector(contactsSelectors.getContactsArray);

  return (
    <Box as="main" p={4}>
      <StyledTitle>Phonebook</StyledTitle>

      <MyForm />
      {contacts.length > 0 && (
        <>
          <StyledTitle as="h2">Contacts</StyledTitle>
          <Filter />
          <ContactsList />
        </>
      )}
    </Box>
  );
}
