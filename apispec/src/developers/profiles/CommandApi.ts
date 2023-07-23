import { LoginApiResponse } from '../../auth/LoginApi';
import {
    PreferMeetingDays,
    PreferPositionTypes,
    PreferProjectTypes,
} from './Common';
import { DeveloperProfileGetApiResponse } from './QueryApi';

export interface DeveloperProfileCreateApiRequest {
    username: string;
    avatarUrl: string;
    nickname: string;
    githubUrl: string;
    blogUrl: string;
    introText: string;
    position: PreferPositionTypes;
    techStacks: string[];
    preferProjectType: PreferProjectTypes;
    preferMeetingDay: PreferMeetingDays;
    employed: boolean;
    yearsOfWorkExperiences: number;
}

// type 말고 alias가 있나?
export type DeveloperProfileCreateApiResponse = LoginApiResponse;

export type DeveloperProfilePatchApiRequest = DeveloperProfileCreateApiRequest;

export type DeveloperProfilePatchApiResponse = DeveloperProfileGetApiResponse;
