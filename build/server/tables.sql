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
  company_name VARCHAR,
  company_addr1 VARCHAR,
  company_addr2 VARCHAR,
  company_postal VARCHAR,
  company_gst VARCHAR,
  customer_com_name VARCHAR,
  customer_com_addr1 VARCHAR,
  customer_com_postal VARCHAR,
  customer_attention VARCHAR,
  customer_email VARCHAR,
  customer_number VARCHAR,
  quote_ref VARCHAR,
  quote_date VARCHAR,
  job_title VARCHAR(250),
  discount INTEGER,
  part_no VARCHAR [],
  description VARCHAR [],
  quantity VARCHAR [],
  price VARCHAR [],
  termscontent VARCHAR,
  template_id INTEGER,
  created_at VARCHAR DEFAULT to_char(now(), 'Mon DD YYYY, HH12:MI:SS AM'),
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