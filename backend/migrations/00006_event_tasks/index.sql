CREATE TABLE IF NOT EXISTS eventTasks(
    taskId UUID PRIMARY KEY NOT NULL,
    eventId UUID NOT NULL,[]
    FOREIGN KEY (eventId) REFERENCES events (id) ON DELETE CASCADE,
    description TEXT,
    goal TEXT,
);