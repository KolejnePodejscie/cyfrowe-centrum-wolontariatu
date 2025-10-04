import sql from "../db.js";
import { Tasks } from "../models/apiModels.js";
import { CreateUserData } from "../requests.js";

export async function createEvent(event: CreateUserData) {}

export async function getUserTasksFromEvent(userId: string, eventId: string) {
    const userTasks = await sql<
        Tasks[]
    >`SELECT t.id, t.description, t.goal as learningGoal 
    FROM eventtasks as t JOIN taskassignment as ta ON t.id = ta.taskId 
    WHERE ta.volounteerId = ${userId} AND t.eventId = ${eventId}`;
    return userTasks as Tasks[];
}
