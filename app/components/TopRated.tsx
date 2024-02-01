import { v4 as ID } from "uuid";
import { StaticImageData } from "next/image";
import { archivo } from '../fonts';
import Cards from "./Cards";
import Card from './Card';
import styles from '../styles/components/toprated.module.scss';
import Card_1 from '../../public/Main/Top/1_Cover.png';
import Card_2 from '../../public/Main/Top/2_Cover.jpeg';
import Card_3 from '../../public/Main/Top/3_Cover.jpeg';

export type CardType = {
    position?: string;
    cover: StaticImageData;
    title: string;
};

const TopRated = () => {

    const items: CardType[] = [
        {
            position: '1',
            cover: Card_1,
            title: 'Мое прекрасное несчастье',
        },
        {
            position: '2',
            cover: Card_2,
            title: 'Красное уведомление',
        },
        {
            position: '3',
            cover: Card_3,
            title: 'Ведьмак',
        },
    ];

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>
                <span className={styles.title_colored}>
                    ТОП-10
                </span>
                просмотров за неделю
            </h3>
            <Cards gap={100}>
                {items.map((item) =>
                    <div
                        className={styles.cardWrapper}
                        key={ID()}
                    >
                        <p className={`${archivo.className} ${styles.cardPosition}`}>{item.position}</p>
                        <Card
                            item={item}
                            size='large'
                            sticker={false}
                            title={false}
                        />
                    </div>
                )}
            </Cards>
        </section>
    )
};

export default TopRated;