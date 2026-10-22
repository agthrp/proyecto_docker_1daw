/* const notebooksDbUser = process.env.NOTEBOOKS_DB_USER;
const notebooksDbPassword = process.env.NOTEBOOKS_DB_PASSWORD;
const notebooksDbName = process.env.NOTEBOOKS_DB_NAME;

console.log('INITIALIZING : Notebooks DB User');
db = db.getSiblingDB(notebooksDbName);

db.createUser({
  user: notebooksDbUser,
  pwd: notebooksDbPassword,
  roles: [
    {
      role: 'readWrite',
      db: notebooksDbName,
    },
  ],
}); */

db = db.getSiblingDB('notebooks_db');
db.createUser({
  user: 'nb_user',
  pwd: 'nb_pwd',
  roles: [{ role: 'readWrite', db: 'notebooks_db' }],
});

