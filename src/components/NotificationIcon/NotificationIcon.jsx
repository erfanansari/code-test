import { IoNotificationsOutline } from 'react-icons/io5'

import styles from './NotificationIcon.module.css'

export default function NotificationIcon({ active, unread, onClick }) {
    let style = styles.button

    if (active) style = style.concat(' ', styles.active)
    if (unread) style = style.concat(' ', styles.unread)

    return (
        <button className={style} onClick={onClick}>
            <IoNotificationsOutline size={30} />
        </button>
    )
}
