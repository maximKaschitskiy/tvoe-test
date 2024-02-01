import { v4 as ID } from "uuid";
import { StaticImageData } from "next/image";
import Cards from "./Cards";
import Card from './Card';
import styles from '../styles/components/new.module.scss';
import Card_1 from '../../public/Main/New/1_Card.png';
import Card_2 from '../../public/Main/New/2_Card.png';
import Card_3 from '../../public/Main/New/3_Card.jpeg';
import Card_4 from '../../public/Main/New/4_Card.jpeg';

export type CardType = {
    title: string;
    cover: StaticImageData;
    rating?: string;
};

const New = () => {

    const selectedItem = 0;

    const items: CardType[] = [
        {
            title: 'Синий жук',
            cover: Card_1,
            rating: '10',
        },
        {
            title: 'Домашняя игра',
            cover: Card_2,
            rating: '6,9'
        },
        {
            title: 'Салют 7',
            cover: Card_3,
            rating: '5,8'
        },
        {
            title: 'Поймай меня, если сможешь',
            cover: Card_4,
            rating: '7,0'
        },
    ];

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>Новинки</h3>
            <Cards gap={44}>
                {items.map((item, index) =>
                    <Card
                        key={ID()}
                        item={item}
                        active={index === selectedItem}
                        size='large'
                        sticker={true}
                        title={true}
                    />
                )}
            </Cards>
        </section>
    )
};

export default New;