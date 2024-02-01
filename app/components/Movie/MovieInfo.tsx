import { v4 as ID } from "uuid";
import InfoItem from "./InfoItem";
import styles from '../../styles/components/movie/movieInfo.module.scss';

export type InfoType = {
    title: string
    value: string
    tint?: boolean
}

const MovieInfo = () => {

    const items: InfoType[] = [
        {
            title: 'Премьера в мире',
            value: '31 октября 2022',
        },
        {
            title: 'Страна',
            value: 'США',
        },
        {
            title: 'Язык аудиодорожки',
            value: 'Rus, Eng',
        },
        {
            title: 'Оригинальное название',
            value: 'Wednesday',
        },
        {
            title: 'Жанры',
            value: 'Фентези, Комедия, Криминал, Детектив',
        },
        {
            title: 'Качество',
            value: 'Full HD',
            tint: true
        },
    ]

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>Информация</h3>
            <ul className={styles.table}>
                {items.map((item, _index) =>
                  <InfoItem key={ID()} item={item} />
                )}
            </ul>
        </section>
    )
}

export default MovieInfo;