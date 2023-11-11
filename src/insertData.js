import User from "./App.svelte";
const { Client } = require('pg');

// Verbindungsinformationen zur PostgreSQL-Datenbank
const connectionString = 'postgres://dein_pg_benutzer:dein_pg_passwort@localhost:5432/deine_pg_datenbank';

// Daten zum Einfügen
const userData = {
  username: tempUsername,
  password: tempPassword, // In einer echten Anwendung sollte dies sicher gehasht werden
};

// SQL-Befehl zum Einfügen eines Benutzers
const insertUserQuery = `
  INSERT INTO users (username, password)
  VALUES ($1, $2)
  RETURNING *;
`;

// Funktion zum Verbinden zur Datenbank und Einfügen der Daten
async function insertData() {
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log('Erfolgreich mit der PostgreSQL-Datenbank verbunden');

    // Einfügen eines Benutzers
    const result = await client.query(insertUserQuery, [userData.username, userData.password]);
    console.log('Benutzer erfolgreich eingefügt:', result.rows[0]);
  } catch (err) {
    console.error('Fehler bei der Verbindung zur PostgreSQL-Datenbank oder beim Einfügen der Daten:', err);
  } finally {
    await client.end();
    console.log('Verbindung zur PostgreSQL-Datenbank geschlossen');
  }
}

// Funktion aufrufen
insertData();
