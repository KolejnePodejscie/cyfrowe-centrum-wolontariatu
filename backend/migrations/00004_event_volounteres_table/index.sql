CREATE TABLE IF NOT EXISTS eventVolunteer(
    eventId UUID NOT NULL,
    FOREIGN KEY (eventId) REFERENCES events (id) ON DELETE CASCADE,
    volunteerId UUID NOT NULL,
    FOREIGN KEY (volunteerId) REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY (eventId, volunteerId)
    
    isAccepted BOOLEAN NOT NULL DEFAULT false,
);

