import React from 'react'
import { Section, Page4Img1, Page4Img2 } from './styling'

const img1 = "https://source.unsplash.com/aWQDj2SmhMU"
const img2 = "https://source.unsplash.com/dNoGNxFGfIo"

export const Page4 = () => {
    return (
        <Section>
            <Page4Img1 src={img1} alt="Girl with facemask" />
            <Page4Img2 src={img2} alt="Girl in tracksuit" />
        </Section>
    )
}
