import { openDB } from 'idb';

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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // connect to DB
  const jateDb = await openDB('jate', 1);
  // make transaction and specify the DB we are posting to
  const tx = jateDb.transaction('jate', 'readwrite');
  // open object store
  const store = tx.objectStore('jate');
  // pass content for put method
  const request = store.put({ id: 1, value: content });
  // confirm data was added
  const result = await request;
  console.log('Data saved successfully', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  //connect to DB
  const jateDB = await openDB('jate', 1);
  //create the new transaction and specifcy the store
  const tx = jateDB.transaction('jate', 'readonly');
  //open the objectstore
  const store = tx.objectStore('jate');
  //get all data in db
  const request = store.getAll();
  // confirm request has been got
  const result = await request;
  console.log(result);
  return result;
};

initdb();
