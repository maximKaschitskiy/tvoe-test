import styles from '../../styles/components/movie/movieInfoItem.module.scss';

export type InfoType = {
    title: string;
    value: string;
};

const InfoItem = ({item}: { item: InfoType }) => 

        <li className={styles.wrapper}>
          <p className={styles.title}>{item.title}</p>
          <p className={`${styles.value} ${('tint' in item) && item.tint ? styles.value_tinted : null} `}>{item.value}</p>
        </li>

export default InfoItem;