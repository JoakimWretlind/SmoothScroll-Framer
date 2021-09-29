import { ToTopButton } from '../pages/styling';

export const TopButton = () => {
    const scrollTop = () => window.scrollTo({ top: 0 })

    return (
        <ToTopButton onClick={scrollTop}>Top</ToTopButton>
    )
}
