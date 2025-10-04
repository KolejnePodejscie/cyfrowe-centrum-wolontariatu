CREATE TABLE IF NOT EXISTS events(
    id UUID PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    latitude TEXT,
    longditue TEXT,
    startDate TIMESTAMPTZ,
    endDate TIMESTAMPTZ,
    oragnisationId UUID NOT NULL,
    FOREIGN KEY (oragnisationId) REFERENCES oranisations (id) ON DELETE CASCADE,
);