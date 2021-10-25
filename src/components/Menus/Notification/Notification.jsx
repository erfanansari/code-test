import { AnimatePresence, motion } from 'framer-motion'
import { animationVariants } from '../../../utils/hooks/animationVariants'
import { IoChevronBackOutline } from 'react-icons/io5'
import NotificationIcon from '../../NotificationIcon'
import { Link } from 'react-router-dom'
import styles from './Notification.module.css'
const messages = [
    'پرداخت با موفقیت انجام شد',
    'کاربر"مهسا اکبری" ویدئوی شما را پسندید ',
    'پایان مهلت اعتبار بسته',
    'ویدئویی که بازگذاری کردید حذف شد',
    'تمدید بسته کاربری',
]
export default function NotificationMenu({ munesOpen, setMenuesOpen }) {
    return (
        <>
            {/* <NotificationIcon active unread /> */}
            {/* <NotificationIcon active /> */}
            {/* <NotificationIcon /> */}
            <NotificationIcon
                unread
                onClick={() =>
                    setMenuesOpen({
                        language: false,
                        notification: !munesOpen.notification,
                        profile: false,
                    })
                }
            />

            <AnimatePresence>
                {munesOpen.notification && (
                    <motion.div
                        variants={animationVariants}
                        animate="show"
                        initial="hide"
                        exit="hide"
                        className={styles.notificationMenu}
                    >
                        {messages.map((message) => (
                            <Link
                                to="/"
                                className={styles.notificationItem}
                                key={messages}
                            >
                                <IoChevronBackOutline color="#bbb" />
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <p>{message}</p>
                                    <NotificationIcon />
                                </div>
                            </Link>
                        ))}

                        <Link to="/" className={styles.notificationItem}>
                            مشاهده همه پیام ها
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
