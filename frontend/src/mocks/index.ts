if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
} else {
    const { worker } = await import('./browser');
    worker.start({ onUnhandledRequest: 'bypass' });
}

// 모듈 역할을 하기 위함
export {};
