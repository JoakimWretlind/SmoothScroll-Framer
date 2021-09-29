import { Section, Page1Img, Page1Text, PTag } from './styling'
import { Header } from '../components/Header/Header'
import { motion } from 'framer-motion'

const img = "https://source.unsplash.com/nimElTcTNyY"

export const Page1 = () => {


    const enterVariant = {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            y: 0,
            opacity: [0, 0, 0, 1],
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 1.4
            }
        }
    }

    return (
        <Section>
            <Header as={motion.div}
                transition={{ delay: 2 }} />
            <Page1Text as={motion.div}
                animate={{
                    // scale: [1, 1.4, 0.4, 1, 3, 1]
                    x: [-100, -100, -100, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    delay: 1.5,
                    duration: 2
                }}
            >
                <PTag>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</PTag>
            </Page1Text>
            <Page1Img src={img} alt="Girl in yellow" as={motion.img}
                variants={enterVariant}
                animate="visible"
                initial="hidden"
            />
        </Section>
    )
}
