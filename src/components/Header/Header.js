import { TitleHolder, Title } from "../../pages/styling"
import { motion } from 'framer-motion'

export const Header = () => {

    const boxVariant = {
        hidden: {
            delay: 2,
        },
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: .1
            }
        }
    }

    const listVariant = {
        hidden: {
            x: -100,
            scale: 0.3,
            opacity: 0
        },
        visible: {
            x: 0,
            scale: 1,
            opacity: 1
        }
    }

    return (
        <TitleHolder as={motion.div}
            variants={boxVariant}
            animate="visible"
            initial="hidden"
        >
            {["a", "d", "o", "r", "i", "v", "i", "a"].map(header => (
                <Title as={motion.li}
                    variants={listVariant}
                    transition={{
                        type: "tween",
                        damping: 40
                    }}
                >
                    {header}
                </Title>
            ))}
        </TitleHolder>
    )
}
