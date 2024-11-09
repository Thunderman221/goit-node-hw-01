import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      await writeContacts([]);
      console.log('All contacts have been removed successfully!');
    } else {
      console.log('There are no contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing all contacts: ', error);
  }
};

removeAllContacts();
