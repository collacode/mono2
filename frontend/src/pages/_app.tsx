import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    await import('../mocks');
}

export default function App({ Component, pageProps }: AppProps) {
    // https://ryuwoongstory.tistory.com/89
    // Next.js에서 페이지 이동 시 동일 Client를 사용하게 하는 트릭이라고 함.
    // hydrate 내용: https://velog.io/@leehyunho2001/Hydrate
    // 서버 컴포넌트 내용: https://11001.tistory.com/221
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
