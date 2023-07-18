import { render as renderComponent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';

type RenderOptions = Parameters<typeof renderComponent>[1];

export const testRender = (ui: ReactElement, options?: RenderOptions) => {
    return {
        ...renderComponent(ui, options),
        testUser: userEvent.setup(),
    };
};
