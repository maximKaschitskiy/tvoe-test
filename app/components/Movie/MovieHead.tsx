import Image from 'next/image';
import { StaticImageData } from "next/image";
import { v4 as ID } from "uuid";
import styles from '../../styles/components/movie/movieHead.module.scss';
import logo from '../../../public/Movie/Wednesday/Logo.svg';
import bg from '../../../public/Movie/Wednesday/Poster_large.png';
import like from '../../../public/Movie/Icons/Like.svg';
import bookmark from '../../../public/Movie/Icons/Bookmark.svg';

type AbstractParams = {
    [key: string]: string;
};

type MovieObj = {
    info: {
        [key: string]: string;
    };
    tinted: string[];
    cover: StaticImageData;
    logo: string;
    tagline: string;
    title: string;
};

const MovieHead = () => {

    const movieObj: MovieObj | AbstractParams = {
        logo: logo,
        cover: bg,
        info: {
            rating: '10',
            dates: '2022-...',
            season: '1 сезон',
            county: 'США',
            genre: 'Ужасы',
            age: '0+',
        },
        tinted: ['rating'],
        title: 'Уэнздэй',
        tagline: 'Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного серийного убийцу и раскрыть тайну родителей.'
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.bgWrapper}>
                <Image
                    src={movieObj.cover}
                    alt={movieObj.title}
                    className={styles.bg}
                    fill={false}
                />
            </div>
            <div className={styles.content}>
                <Image
                    src={movieObj.logo}
                    alt={movieObj.title}
                    className={styles.logo}
                    fill={false}
                />
                <ul className={styles.brief}>
                    {Object.keys(movieObj.info).map((item, _index) =>
                        <li key={ID()} className={`${styles.briefItem} ${!movieObj.tinted.includes(item) || styles.briefItem_highlighted}`}>{movieObj.info[item]}</li>
                    )}
                </ul>
                <p className={styles.tagline}>{movieObj.tagline}</p>
                <div className={styles.controls}>
                    <button className={`${styles.control} ${styles.control_colored}`}>
                        Смотреть
                    </button>
                    <button className={`${styles.control} ${styles.control_tint}`}>
                        О фильме
                    </button>
                    <button className={`${styles.control} ${styles.control_tint}`}>
                        <Image
                            src={bookmark}
                            alt="Add to bookmarks"
                            className={styles.linkIcon}
                            fill={false}
                        />
                    </button>
                    <button className={`${styles.control} ${styles.control_tint}`}>
                        <Image
                            src={like}
                            alt="Like this"
                            className={styles.linkIcon}
                            fill={false}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
};

export default MovieHead;