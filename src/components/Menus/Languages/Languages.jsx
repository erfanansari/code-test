import { AnimatePresence, motion } from 'framer-motion'
import Flags from 'country-flag-icons/react/1x1'
import { animationVariants } from '../../../utils/hooks/animationVariants'
import styles from './Languages.module.css'

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
                <Flags.IR title="IR" />
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
                        <div className={styles.flag}>
                            <Flags.GB title="English" />
                            <p>English</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.ES title="Spanish" />
                            <p>Spanish</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.RU title="Russian" />
                            <p>Russian</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.JP title="Japananse" />
                            <p>Japananse</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.IN title="India" />
                            <p>India</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.DE title="German" />
                            <p>German</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.PL title="Polish" />
                            <p>Polish</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.AE title="Arabic" />
                            <p>Arabic</p>
                        </div>
                        <div className={styles.flag}>
                            <Flags.TR title="Turkish" />
                            <p>Turkish</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
