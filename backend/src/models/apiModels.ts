import { extend } from "zod/mini";

export interface UserMinimal {
    id: string; // uuid
    displayName: string;
}

// export interface OrgParticipant {}

export interface Task {
    id: string; // uuid
    description: string;
    learningGoal: string;
}

export interface Tasks {
    tasks: Task[];
}

export interface image {
    imageName: string;
}

export interface Event {
    id: string; // uuid
    title: string;
    description: string;
    organisationId: string; // uuid
    startDate: string; // date-time
    endDate: string; // date-time
    latitude: number;
    longitude: number;
    imageUrls: image[]; // blob storage strings
}

export interface EventWithTasks extends Event {
    tasks: Task[];
}

export interface EventWithVolounteers extends Event {
    volounteers: Volounteer[];
}

export type VerificationStatus = "pending" | "rejected" | "accepted";
export interface Organisation {
    id: string; // uuid
    name: string;
    description: string;
    profileImage: string;
    backgroundImage: string;
    isVerified: VerificationStatus;
    contactInfo: string;
}

export interface Error {
    title: string;
    description?: string;
}

export interface Volounteers {
    volounteers: UserMinimal[];
}

export type EventForOrg = Event & Volounteers;

export interface Topic {
    id: number;
    title: string;
    description: string;
    creator: string; // uuid
    created: string; // date-time
    lastUpdate: string; // date-time
}

export interface Comment {
    id: number;
    timestamp: string; // date-time
    userId: string; // uuid
    text: string;
}

export interface User extends UserMinimal {
    organisations: Organisation[];
    pastEvents: EventWithTasks[];
    description: string;
}
export interface UserHoursWorked extends UserMinimal {
    hours: number;
}

export interface UserEvents extends UserMinimal {
    description: string; // user description,
    events: Event[];
}

export interface Volounteer extends UserMinimal {
    isaccepted: boolean;
}
