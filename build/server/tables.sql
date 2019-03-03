CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR,
  propic VARCHAR(200),
  email VARCHAR(150)
);


CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR(150),
  company_address VARCHAR,
  company_contact1 INTEGER,
  company_contact2 INTEGER,
  author_id INTEGER
);

CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  quote_ref VARCHAR,
  title VARCHAR(250),
  attention VARCHAR,
  docline JSON,
  termscontent VARCHAR,
  template_id INTEGER,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP,
  author_id INTEGER
);

CREATE TABLE IF NOT EXISTS doclines (
  id SERIAL PRIMARY KEY,
  quote_ref VARCHAR,
  part_no INTEGER,
  description VARCHAR,
  price INTEGER,
  tax INTEGER DEFAULT 0
);


CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  content VARCHAR,
  writer VARCHAR,
  created_at TIMESTAMP DEFAULT now(),
  document_id INTEGER
);

CREATE TABLE IF NOT EXISTS templates (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR,
  company_letterhead VARCHAR,
  company_address VARCHAR,
  company_email VARCHAR,
  company_contact1 INTEGER,
  company_contact2 INTEGER,
  terms VARCHAR,
  author_id INTEGER
);

CREATE TABLE IF NOT EXISTS inventories (
  id SERIAL PRIMARY KEY,
  part_no INTEGER,
  description VARCHAR,
  price INTEGER,
  author_id INTEGER
);