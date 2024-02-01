import { v4 as ID } from "uuid";
import type { StaticImageData } from "next/image";
import EpisodeCard from "./EpisodeCard";
import Cards from "../Cards";
import styles from '../../styles/components/movie/movieSeasons.module.scss';
import Episode_1 from '../../../public/Movie/Wednesday/Episode/Screenshot_1.png';
import Episode_2 from '../../../public/Movie/Wednesday/Episode/Screenshot_2.jpeg';
import Episode_3 from '../../../public/Movie/Wednesday/Episode/Screenshot_3.jpeg';
import Episode_4 from '../../../public/Movie/Wednesday/Episode/Screenshot_4.jpeg';

export type EpisodeType = {
    title: string
    duration: number
    cover: StaticImageData
};

export type SeasonsType = EpisodeType[];

const MovieSeasons = () => {

    const selectedSeason = 0;

    const seasons: SeasonsType[] = [
        [
            {
                title: '1 серия',
                cover: Episode_1,
                duration: 2580
            },
            {
                title: '2 серия',
                cover: Episode_2,
                duration: 2460
            },
            {
                title: '3 серия',
                cover: Episode_3,
                duration: 2280
            },
            {
                title: '4 серия',
                cover: Episode_4,
                duration: 2580
            },
        ], [], []
    ];

    return (
        <section className={styles.wrapper}>
            <div className={styles.head}>
                <h3 className={styles.title}>Сезоны</h3>
                <div className={styles.selector}>
                    {seasons.map((_, _index) =>
                        <button className={`${styles.select} ${selectedSeason !== _index || styles.select_active}`} key={ID()}>
                            {_index + 1}
                        </button>)}
                </div>
            </div>
            <Cards gap={20}>
                {seasons[selectedSeason].map((item, _index) =>
                    <EpisodeCard
                        key={ID()}
                        item={item}
                    />
                )}
            </Cards>
        </section>
    )
}

export default MovieSeasons;