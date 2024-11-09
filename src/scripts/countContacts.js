import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts', error);
  }
};

countContacts().then((count) => {
  console.log(`Total number of contacts: ${count}`);
});
