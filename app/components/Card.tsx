import Image from 'next/image';
import styles from '../styles/components/card.module.scss';
import type { CardType as NewCardType } from './New';
import type { CardType as TopCardType } from './TopRated';

const Card = (
    { item, active, size, sticker, title }: {
        item: NewCardType | TopCardType,
        active?: boolean,
        size: 'large' | 'small',
        sticker: boolean,
        title: boolean
    }) => {

    return (
        <figure className={`${styles.wrapper} ${styles[`wrapper_${size}`]}`}>
            <div className={`${styles.coverWrapper} ${styles[`coverWrapper_${size}`]} ${active ? styles.coverWrapper_active : null}`}>
                <p className={`${styles.sticker} ${sticker ? styles[`sticker_${size}`] : null}`}>
                    {('rating' in item) ? item.rating : null}
                </p>
                <Image
                    src={item.cover}
                    alt={item.title}
                    className={styles.cover}
                    fill={true}
                />
            </div>
            <figcaption className={`${title ? styles.title : styles.title_hide}`}>
                {('title' in item) ? item.title : null}
            </figcaption>
        </figure>
    )
};

export default Card;