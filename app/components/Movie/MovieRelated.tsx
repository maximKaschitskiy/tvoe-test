import { v4 as ID } from "uuid";
import { StaticImageData } from "next/image";
import Cards from "../Cards";
import Card from '../Card';
import styles from '../../styles/components/movie/movieRelated.module.scss';
import Card_1 from '../../../public/Movie/Related/Cover_1.jpeg';
import Card_2 from '../../../public/Movie/Related/Cover_2.jpeg';
import Card_3 from '../../../public/Movie/Related/Cover_3.jpeg';
import Card_4 from '../../../public/Movie/Related/Cover_4.jpeg';
import Card_5 from '../../../public/Movie/Related/Cover_5.jpeg';
import Card_6 from '../../../public/Movie/Related/Cover_6.png';
import Card_7 from '../../../public/Movie/Related/Cover_7.png';


export type CardType = {
    title: string
    cover: StaticImageData
    rating?: string
};

const MovieRelated = () => {

    const selectedItem = '0';

    const items: CardType[] = [
        {
            title: '8 Подруг Оушена',
            cover: Card_1,
            rating: '10',
        },
        {
            title: 'Энканто',
            cover: Card_2,
            rating: '6,9'
        },
        {
            title: 'Красное уведомление',
            cover: Card_3,
            rating: '5,8'
        },
        {
            title: 'Синий жук',
            cover: Card_4,
            rating: '7,0'
        },
        {
            title: 'Мэр Кингстауна',
            cover: Card_5,
            rating: '7,0'
        },
        {
            title: 'Пять ночей с Фрэдди',
            cover: Card_6,
            rating: '7,0'
        },
        {
            title: 'Балерина',
            cover: Card_7,
            rating: '7,0'
        },
    ]

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>Похожее</h3>
            <Cards gap={24}>
                {items.map((item, index) =>
                    <Card
                        key={ID()}
                        item={item}
                        active={index.toString() === selectedItem}
                        size='small'
                        sticker={true}
                        title={false}
                    />
                )}
            </Cards>
        </section>
    )
};

export default MovieRelated;