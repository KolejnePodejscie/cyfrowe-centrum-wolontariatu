CREATE TABLE IF NOT EXISTS eventImages(
    eventId uuid NOT NULL,
    FOREIGN KEY (eventId) REFERENCES events (id) ON DELETE CASCADE,
    imageName TEXT NOT NULL,
    PRIMARY KEY (eventId, imageName)
);