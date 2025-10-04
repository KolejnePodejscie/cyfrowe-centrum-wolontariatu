import { Task, Error } from "./models.js";

// --- Responses ---

export type ErrorResponse = Error;

export type ReferenceResponse = string; // uri-reference

// --- Requests ---

export interface OrganisationChange {
    verified?: boolean; // Only Kraków official worker can update this
}

// export interface UserChange {
//     // explicitly empty object allowed
//     [key: string]: unknown;
// }
//
// export interface EventChange {
//     // explicitly empty object allowed
//     [key: string]: unknown;
// }

export type CreateEventTask = Task;

export interface AddUserToTask {
    userIds: string[]; // uuid[]
}

export interface AddTaskToUser {
    taskIds: number[];
    hours?: number; // if null then future task else finished task
}
