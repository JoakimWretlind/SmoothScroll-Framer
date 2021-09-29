import React from 'react'
import { Section, Page1Img, Page1Text, PTag } from './styling'

const img = "https://source.unsplash.com/nimElTcTNyY"

export const Page1 = () => {
    return (
        <Section>
            <Page1Text>
                <PTag>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PTag>
            </Page1Text>
            <Page1Img src={img} alt="Girl in yellow" />

        </Section>
    )
}
