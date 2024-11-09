import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const currentContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < count; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...currentContacts, ...newContacts];
    console.log(`Generated ${newContacts.length} new contacts`);

    await writeContacts(updatedContacts);

    console.log(`${count} fake contacts have been generated and added.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Запуск функции
generateContacts(5);
