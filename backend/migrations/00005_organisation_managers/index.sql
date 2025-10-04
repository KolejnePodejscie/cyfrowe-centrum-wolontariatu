CREATE TABLE IF NOT EXISTS oragnisationManagers(
    organisationId UUID NOT NULL,
    FOREIGN KEY (organisationId) REFERENCES organisations (id) ON DELETE CASCADE,
    managerId UUID NOT NULL,
    FOREIGN KEY (managerId) REFERENCES users (id) ON DELETE CASCADE,
    PRIMARY KEY (organisationId, managerId)
);

