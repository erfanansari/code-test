import { IoSettingsSharp, IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import LanguagesMenu from '../Menus/Languages'
import ProfileMenu from '../Menus/Profile'
import NotificationMenu from '../Menus/Notification'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../utils/hooks/useDebounce'

export default function Header() {
    const [munesOpen, setMenuesOpen] = useState({
        language: false,
        notification: false,
        profile: false,
    })
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
                )
                const data = await res.json()
                setMovies(data.slice(0, 3))
            } catch (err) {
                console.error(err)
            }
        }
        if (searchTerm === '') setMovies(null)
        if (debouncedSearchTerm) fetchMovies()
    }, [debouncedSearchTerm])

    return (
        <header className={styles.header}>
            <div className={styles.panel}>
                <ProfileMenu
                    munesOpen={munesOpen}
                    setMenuesOpen={setMenuesOpen}
                />

                <NotificationMenu
                    munesOpen={munesOpen}
                    setMenuesOpen={setMenuesOpen}
                />
                <LanguagesMenu
                    munesOpen={munesOpen}
                    setMenuesOpen={setMenuesOpen}
                />
            </div>
            <div className={styles.searchBox}>
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="جستجوی فیلم، سریال، انیمیشن، مستند، بازیگر و..."
                />
                <button>
                    جستجوی پیشرفته
                    <IoSettingsSharp size={15} />
                </button>
                {movies && searchTerm && (
                    <div className={styles.searchResults}>
                        <div className={styles.allResults}>
                            <Link to="/">مشاهده همه نتایج</Link>
                            <p>محتوای مورد نظر را پیدا نکردید؟</p>
                        </div>
                        {movies.map((movie, i) => (
                            <Link to="/" key={movie.show.id}>
                                <div
                                    className={styles.movies}
                                    style={{
                                        borderBottomLeftRadius:
                                            i === 2 ? '12px' : 0,
                                        borderBottomRightRadius:
                                            i === 2 ? '12px' : 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            marginRight: 'auto',
                                            marginLeft: '0.5rem',
                                        }}
                                    >
                                        <IoChevronBackOutline color="#bbb" />
                                    </div>

                                    <p className={styles.name}>
                                        {movie.show.name}
                                    </p>
                                    <p className={styles.date}>
                                        {movie.show.premiered &&
                                            new Date(
                                                movie.show.premiered,
                                            ).getFullYear()}
                                        {new Date(
                                            movie.show.ended,
                                        ).getFullYear() ===
                                            new Date(
                                                movie.show.premiered,
                                            ).getFullYear() || !movie.show.ended
                                            ? ''
                                            : '- ' +
                                              new Date(
                                                  movie.show.ended,
                                              ).getFullYear()}
                                    </p>
                                    <img
                                        src={
                                            movie.show.image
                                                ? movie.show.image.medium
                                                : '/default_thumbnail.svg'
                                        }
                                        alt={movie.show.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <div className={styles.logo}>
                <Link to="/">
                    <img src="/logo.png" alt="logo" />
                </Link>
                <img className={styles.menu} src="/menu.png" alt="menu" />
            </div>
        </header>
    )
}
