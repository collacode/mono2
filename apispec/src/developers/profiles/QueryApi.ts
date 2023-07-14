import {
    PreferMeetingDays,
    PreferPositionTypes,
    PreferProjectTypes,
} from './Common';

// 일단은 해당 타입이 있을지 모르겠음.
export type UTCDateTime = string;

// 개발자 등록 Request + gitHubProjects + githubTechUsages
export interface DeveloperProfileGetApiResponse {
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
    gitHubProjects: {
        repoName: string;
        repoUrl: string;
        projectUrl: string;
        description: string;
        startedAt: UTCDateTime;
        endedAt: UTCDateTime;
        techStacks: {
            // 구분 없이 일단 진행함
            libraryName: string;
            references: { variable: string; count: number }[];
        }[];
    }[];
    gitHubTechUsages: {
        webFrontend: {
            libraryName: string;
            references: { variable: string; count: number }[];
        }[];
        appFrontend: {
            libraryName: string;
            references: { variable: string; count: number }[];
        }[];
        backend: {
            libraryName: string;
            references: { variable: string; count: number }[];
        }[];
    };
}
