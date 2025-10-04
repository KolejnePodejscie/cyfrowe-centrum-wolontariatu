CREATE TABLE IF NOT EXISTS organisations (
    id UUID PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    isVerified BOOLEAN NOT NULL DEFAULT false, 
    profileImage TEXT,
    backgroundImage TEXT
);