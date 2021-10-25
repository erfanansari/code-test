import { AnimatePresence, motion } from 'framer-motion'
import Flags from 'country-flag-icons/react/1x1'
import { animationVariants } from '../../../utils/hooks/animationVariants'
import styles from './Languages.module.css'

const Flag = ({ country, ...props }) => {
    const FlagComponent = Flags[country]
    return <FlagComponent {...props} />
}
const languages = [
    ['GB', 'English'],
    ['ES', 'Spanish'],
    ['RU', 'Russian'],
    ['JP', 'Japananse'],
    ['IN', 'India'],
    ['DE', 'German'],
    ['PL', 'Polish'],
    ['AE', 'Arabic'],
    ['TR', 'Turkish'],
]

export default function LanguagesMenu({ munesOpen, setMenuesOpen }) {
    return (
        <>
            <button
                onClick={() =>
                    setMenuesOpen({
                        language: !munesOpen.language,
                        notification: false,
                        profile: false,
                    })
                }
                className={styles.flag}
            >
                <Flag country="IR" title="Farsi" />
            </button>

            <AnimatePresence>
                {munesOpen.language && (
                    <motion.div
                        variants={animationVariants}
                        animate="show"
                        initial="hide"
                        exit="hide"
                        className={styles.languagesMenu}
                    >
                        {languages.map(([code, name]) => (
                            <div className={styles.flag} key={code}>
                                <Flag country={code} title={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
