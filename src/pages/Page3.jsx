import React from 'react'
import { Section, Page3Img, PTag } from './styling'

const img = "https://source.unsplash.com/nyrSsBzhZ4Y"

export const Page3 = () => {
    return (
        <Section>
            <Page3Img src={img} alt="Girl in black" />
        </Section>
    )
}
