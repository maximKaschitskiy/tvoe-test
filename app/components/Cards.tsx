import styles from '../styles/components/cards.module.scss';
import type { ReactNode } from "react";

const Cards = (
    { children, gap }: {
        children: ReactNode,
        gap: number
    }) =>

    <div className={styles.cardsWrapper}>
        <div className={styles.cards} style={{gap: `${gap}px`}}>
          {children}
        </div>
    </div>

export default Cards;