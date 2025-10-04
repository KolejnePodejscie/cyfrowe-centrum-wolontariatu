CREATE TABLE IF NOT EXISTS taskAssignment(
    taskId UUID PRIMARY KEY NOT NULL,
    FOREIGN KEY (taskId) REFERENCES eventTasks (id) ON DELETE CASCADE,
    volounteerId UUID NOT NULL,
    FOREIGN KEY (volounteerId) REFERENCES users (id) ON DELETE CASCADE,
    hoursWorked INT NOT NULL DEFAULT 0
);
