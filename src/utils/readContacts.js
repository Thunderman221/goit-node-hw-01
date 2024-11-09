import * as fs from 'node:fs/promises';
import { PATH_DB } from '../contacts/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = data ? JSON.parse(data) : [];
    console.log(Array.isArray(contacts));
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error);
    throw new Error('Failed to read contacts');
  }
};
