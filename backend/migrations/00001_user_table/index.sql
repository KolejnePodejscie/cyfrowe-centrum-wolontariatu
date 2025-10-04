-- Set correct timezone
CREATE EXTENSION IF NOT EXISTS citext;  

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY UNIQUE NOT NULL,
    displayname VARCHAR(48) NOT NULL,
    description TEXT NOT NULL DEFAULT '', 
    email CITEXT NOT NULL,
    isAdult BOOLEAN NOT NULL DEFAULT false,
    proileImage TEXT,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT now()
);