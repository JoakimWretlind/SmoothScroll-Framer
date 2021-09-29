import React from 'react'
import { Section, Page2Img, Page2Text, PTag } from './styling'

const img = "https://source.unsplash.com/_3Q3tsJ01nc"

export const Page2 = () => {
    return (
        <Section>
            <Page2Img src={img} alt="Girl with bags" />
            <Page2Text>
                <PTag>
                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Etiam non quam lacus suspendisse. Arcu cursus vitae congue mauris rhoncus aenean vel. Massa tempor nec feugiat nisl pretium fusce id.
                </PTag>
            </Page2Text>
        </Section>
    )
}
