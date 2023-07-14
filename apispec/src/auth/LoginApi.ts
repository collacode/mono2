export interface LoginApiRequest {
    gitHubAccessToken: string;
}

export interface LoginApiResponse {
    accessToken: string;
    username: string;
    nickname: string;
    role: string;
    avatarUrl: string;
}
