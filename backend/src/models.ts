export interface UserMinimal {
    id: string; // uuid
    displayName: string;
}

export interface UserMin {
    id: string; // uuid
    displayName: string;
}

// export interface OrgParticipant {}

export interface Task {
    id?: number;
    description: string;
    learningGoal?: string;
    tags: string[];
}

export interface Location {
    id: string; // uuid
    latitude: string;
    longitude: string;
}

export interface Event {
    id?: string; // uuid
    title: string;
    description: string;
    location: Location;
    organisationId: string; // uuid
    imageUrls: string[]; // uri
    startDate: string; // date-time
    endDate: string; // date-time
}

export interface EventWithTasks extends Event {
    tasks: Task[];
}

export interface Organisation {
    id?: string; // uuid
    name: string;
    description: string;
    imageUrls: string[]; // uri
    profileImage: string;
    backgroundImage: string;
}

export interface Error {
    id: string; // uuid
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
