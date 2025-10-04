CREATE TABLE IF NOT EXISTS eventVolunteer(
    eventId UUID NOT NULL,
    FOREIGN KEY (eventId) REFERENCES events (id) ON DELETE CASCADE,
    volunteerId UUID NOT NULL,
    FOREIGN KEY (volountereId) REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY (eventId, volountereId)
    
    isAccepted BOOLEAN NOT NULL DEFAULT false,
);

