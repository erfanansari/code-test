import { AnimatePresence, motion } from 'framer-motion'
import { animationVariants } from '../../../utils/hooks/animationVariants'
import {
    IoPersonOutline,
    IoBookmarkOutline,
    IoLogOutOutline,
    IoChevronBackOutline,
} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'

export default function ProfileMenu({ munesOpen, setMenuesOpen }) {
    return (
        <>
            <button
                className={styles.profileImage}
                onClick={() =>
                    setMenuesOpen({
                        language: false,
                        notification: false,
                        profile: !munesOpen.profile,
                    })
                }
            >
                <img src="/user.png" alt="user" />
            </button>
            <AnimatePresence>
                {munesOpen.profile && (
                    <motion.div
                        variants={animationVariants}
                        animate="show"
                        initial="hide"
                        exit="hide"
                        className={styles.profileMenu}
                    >
                        <Link to="/">
                            <div className={styles.profileLink}>
                                <div>
                                    <p className={styles.name}>
                                        سارا خلیل نژاد
                                    </p>
                                    <p className={styles.email}>
                                        sample@gmail.com
                                    </p>
                                </div>
                                <img src="/user.png" alt="user" />
                            </div>
                        </Link>
                        <Link to="/" className={styles.profileItem}>
                            <IoChevronBackOutline color="#ccc" />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <p>مشاهده پنل کاربری</p>
                                <IoPersonOutline size={30} color="#ccc" />
                            </div>
                        </Link>
                        <Link to="/" className={styles.profileItem}>
                            <IoChevronBackOutline color="#ccc" />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <p>علاقه مندی ها</p>
                                <IoBookmarkOutline size={30} color="#ccc" />
                            </div>
                        </Link>
                        <Link to="/" className={styles.profileItem}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <p>خروج از حساب کاربری</p>
                                <IoLogOutOutline size={30} />
                            </div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
