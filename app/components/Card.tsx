import Image from 'next/image';
import Link from 'next/link'
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


    const demetions = {
        large: {
            width: 398,
            heigth: 597
        },
        small: {
            width: 255,
            height: 382
        }
    }

    return (
        <Link href="/movie/1">
            <figure className={`${styles.wrapper} ${styles[`wrapper_${size}`]}`}>
                <div className={`${styles.coverWrapper} ${styles[`coverWrapper_${size}`]} ${active ? styles.coverWrapper_active : null}`}>
                    <p className={`${styles.sticker} ${sticker ? styles[`sticker_${size}`] : null}`}>
                        {('rating' in item) ? item.rating : null}
                    </p>
                    <Image
                        src={item.cover}
                        alt={item.title}
                        className={styles.cover}
                        width={demetions[`${size}`].width}
                    />
                </div>
                <figcaption className={`${title ? styles.title : styles.title_hide}`}>
                    {('title' in item) ? item.title : null}
                </figcaption>
            </figure>
        </Link>
    )
};

export default Card;