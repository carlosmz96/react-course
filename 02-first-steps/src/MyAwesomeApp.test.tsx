import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from '@testing-library/react';

describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toContain('Carlos');
        expect(h3?.innerHTML).toContain('Muñoz');
    });

    test('should render firstName and lastName - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Carlos');
    });
});