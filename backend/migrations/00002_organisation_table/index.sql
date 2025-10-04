CREATE TABLE IF NOT EXISTS organisation (
    id UUID PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL DEFAULT '',
    profileImage TEXT,
    backgroundImage TEXT,
);