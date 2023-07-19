import { ExampleComponent } from '@src/components/ExampleComponent';
import Home from '@src/pages/Home';
import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';

import { testRender } from './utilities';

test('ExampleComponent', async () => {
    const { testUser } = testRender(<ExampleComponent />);

    const button = screen.getByRole('button');
    await testUser.click(button);

    const main = screen.getByRole('main');
    expect(main).toHaveTextContent('count: 1');
});

test('Home', () => {
    render(<Home />);
    const main = within(screen.getByRole('main'));
    const h1 = main.getByRole('heading', {
        level: 1,
        name: /welcome to next\.js!/i,
    });
    expect(h1).toBeInTheDocument();

    const footer = within(screen.getByRole('contentinfo'));
    const link = within(footer.getByRole('link'));
    expect(link.getByRole('img', { name: /vercel logo/i })).toBeInTheDocument();
});
