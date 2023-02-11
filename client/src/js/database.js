//listo 
import { openDB } from 'idb';

//creating the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database. 
//Get the text from indexedDB; this is the method thta takes content and adds it to the indexedDB database using the idb module;
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDB = await openDB('jate',1);
  const tx = jateDB.trasaction('jate', 'readwrite');
  const store = tx.objectStore('jate')
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log('data saved to database', result.value);
};

// TODO: Add logic for a method that gets all the content from the database;
//this is the method that gets the content from the indexedDB database using the idb module
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
	const tx = jateDb.transaction('jate', 'readonly');
	const store = tx.objectStore('jate');
	const request = store.get(1);
	const result = await request;
  result
    ? console.log('data retrieved form the database', result.value)
    : console.log ('data not foudn in database');
    //then check if the variable is defined and if it is return it
	return result?.value;
};

initdb();
