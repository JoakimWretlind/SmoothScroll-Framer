import { render, screen } from '@testing-library/react';
import { TopButton } from '../TopButton';

describe("ToTopButton", () => {
    it('renders to top button', () => {
        render(<TopButton />);
        const buttonElement = screen.getByRole("button", { name: "Top" });
        expect(buttonElement).toBeInTheDocument();
    });
})

