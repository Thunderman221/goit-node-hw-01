import * as fs from 'fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
    throw new Error('Failed to write contacts');
  }
};
