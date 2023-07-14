// TODO: gitHubAccessToken과 우리 서버 accessToken은 어떻게 준비해야?
// GitHub 서버도 Mock해야 할 듯
import { LoginApiRequest, LoginApiResponse } from './LoginApi';

// Login 요청 역시 Mock해야 할 듯
export const MockLoginApiRequest: LoginApiRequest = {
    gitHubAccessToken: '',
};

export const MockLoginApiResponse: LoginApiResponse = {
    accessToken: '',
    username: 'seongbin9786',
    nickname: 'Seongbin',
    role: 'NORMAL_USER',
    avatarUrl: 'https://avatars.githubusercontent.com/u/28754907?v=4',
};
