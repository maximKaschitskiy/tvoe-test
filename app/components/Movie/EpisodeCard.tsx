import Image from 'next/image';
import styles from '../../styles/components/movie/movieCard.module.scss';
import type { EpisodeType } from './MovieSeasons';
import { formattedDuration, secondsToMinutes } from '@/app/utils/time';

const EpisodeCard = (
    { item }: {
        item: EpisodeType
    }) => {

    const duration = ('duration' in item) ? formattedDuration(secondsToMinutes(item.duration)) : null;

    return (
        <li className={`${styles.wrapper}`}>
            <Image
                src={item.cover}
                alt={item.title}
                className={styles.cover}
                fill={false}
            />
            <h6 className={`${styles.title}`}>
                {('title' in item) ? item.title : null}
            </h6>
            {duration ?
                <p className={`${styles.duration}`}>{duration}</p> :
                <></>
            }
        </li>
    )
}

export default EpisodeCard;