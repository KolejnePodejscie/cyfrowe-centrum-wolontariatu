CREATE TABLE IF NOT EXISTS organisation (
    id UUID PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    profileImage TEXT,
    backgroundImage TEXT,
);