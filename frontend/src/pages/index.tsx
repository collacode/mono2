import { DeveloperProfileGetApiResponse } from '@collacode/apispec';
import * as Sentry from '@sentry/nextjs';

interface HomeProps {
    profile: DeveloperProfileGetApiResponse;
}

export default function Home({ profile }: HomeProps) {
    console.log(profile);
    Sentry.captureMessage('user visited Home');

    return (
        <main className="w-screen h-screen">
            <div className="text-3xl font-bold underline">hello!</div>
            <div>whats going on here?</div>
        </main>
    );
}

export async function getServerSideProps() {
    // Server-side requests are mocked by `mocks/server.ts`.
    const res = await fetch(
        'https://collacode.com/api/developers/seongbin9786',
    );
    const profile = await res.json();

    return {
        props: {
            profile,
        },
    };
}
