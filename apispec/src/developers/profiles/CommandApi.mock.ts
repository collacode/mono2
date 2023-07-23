import { MockLoginApiResponse } from '../../auth/LoginApi.mock';
import {
    DeveloperProfileCreateApiRequest,
    DeveloperProfileCreateApiResponse,
    DeveloperProfilePatchApiRequest,
    DeveloperProfilePatchApiResponse,
} from './CommandApi';
import { MockDeveloperProfile } from './Common.mock';
import { MockDeveloperProfileGetApiResponse } from './QueryApi.mock';

export const MockDeveloperProfileCreateApiRequest: DeveloperProfileCreateApiRequest =
    MockDeveloperProfile;

// type 말고 alias가 있나?
export const MockDeveloperProfileCreateApiResponse: DeveloperProfileCreateApiResponse =
    MockLoginApiResponse;

export const MockDeveloperProfilePatchApiRequest: DeveloperProfilePatchApiRequest =
    MockDeveloperProfileCreateApiRequest;

export const MockDeveloperProfilePatchApiResponse: DeveloperProfilePatchApiResponse =
    MockDeveloperProfileGetApiResponse;
