import { MockDeveloperProfile } from './Common.mock';
import { DeveloperProfileGetApiResponse } from './QueryApi';

// 개발자 등록 Request + gitHubProjects + githubTechUsages
export const MockDeveloperProfileGetApiResponse: DeveloperProfileGetApiResponse = {
    ...MockDeveloperProfile,
    gitHubProjects: [
        {
            repoName: 'js-algorithm-practice',
            repoUrl: 'https://github.com/seongbin9786/js-algorithm-practice',
            projectUrl: 'https://collacode/js-algorithm-practice',
            description: 'JS로 푸는 알고리즘 (프로젝트)',
            startedAt: '2023-07-05T00:00:00+09:00',
            endedAt: '2023-07-05T00:00:00+09:00', // null일 수도 있겠다.
            techStacks: [
                {
                    libraryName: 'React',
                    references: [
                        { variable: 'useState', count: 20 },
                        { variable: 'useEffect', count: 15 },
                        { variable: 'lazy', count: 3 },
                    ],
                },
            ],
        },
    ],
    gitHubTechUsages: {
        webFrontend: [
            {
                libraryName: 'React',
                references: [
                    { variable: 'useState', count: 20 },
                    { variable: 'useEffect', count: 15 },
                    { variable: 'lazy', count: 3 },
                ],
            },
        ],
        appFrontend: [],
        backend: [
            {
                libraryName: 'Nest.js',
                references: [
                    { variable: 'Controller', count: 20 },
                    { variable: 'Service', count: 15 },
                    { variable: 'Repository', count: 10 },
                ],
            },
        ],
    },
};
