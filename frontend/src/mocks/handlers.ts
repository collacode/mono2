import {
    DeveloperProfileGetApiResponse,
    MockDeveloperProfileGetApiResponse,
} from '@collacode/apispec';
import { rest } from 'msw';

export const handlers = [
    rest.get(
        'https://collacode.com/api/developers/seongbin9786',
        (_req, res, ctx) => {
            return res(
                ctx.json<DeveloperProfileGetApiResponse>(
                    MockDeveloperProfileGetApiResponse,
                ),
            );
        },
    ),
];
