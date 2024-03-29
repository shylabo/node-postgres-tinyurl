DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS urls CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE urls (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  original_url VARCHAR(255) NOT NULL,
  shorten_url_hash VARCHAR(255) NOT NULL
);
