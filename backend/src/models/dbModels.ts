import { VerificationStatus } from "./apiModels.js";

export interface DbUser {
    id: string;
    displayName: string;
    description: string;
    email: string;
    isAdult: boolean;
    profileImage?: string;
}

export interface DbOrg {
    id?: string;
    name: string;
    description: string;
    isVerified: VerificationStatus;
    profileImage: string;
    backgroundImage: string;
    contactInfo: string;
}

export interface DbTask {
    id?: string;
    eventid: string;
    description: string;
    goal: string;
}
