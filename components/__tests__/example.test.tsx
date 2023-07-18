import App from '@src/App';
import Home from '@src/Home';
import { screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import { testRender } from './utilities';

test('Home', () => {
    testRender(<Home />);
    const main = within(screen.getByRole('main'));
    const h1 = main.getByRole('heading', {
        level: 1,
        name: /welcome to next\.js!/i,
    });

    expect(h1).toBeInTheDocument();
});

test('App', async () => {
    const { testUser } = testRender(<App />);
    const button = screen.getByRole('button');

    await testUser.click(button);

    expect(button).toHaveTextContent('count is 1');
});
