const { Client } = require('pg');
const connectionString = 'postgres://dein_pg_benutzer:dein_pg_passwort@localhost:5432/deine_pg_datenbank';

// SQL-Befehl zum Erstellen der Tabelle
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
`;

// Funktion zum Verbinden zur Datenbank und Ausführen des SQL-Befehls
async function createTable() {
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log('Erfolgreich mit der PostgreSQL-Datenbank verbunden');

    // Tabelle erstellen
    await client.query(createTableQuery);
    console.log('Tabelle "users" erfolgreich erstellt');
  } catch (err) {
    console.error('Fehler bei der Verbindung zur PostgreSQL-Datenbank oder beim Erstellen der Tabelle:', err);
  } finally {
    await client.end();
    console.log('Verbindung zur PostgreSQL-Datenbank geschlossen');
  }
}

// Funktion aufrufen
createTable();
