import Image from 'next/image';
import styles from '../styles/components/promo.module.scss';
import logo from '../../public/Main/Promo/logo_small.png';
import bg from '../../public/Main/Promo/bg_large.png';

const Promo = () => {

    const promoObj = {
        title: 'Индиана джонс',
        tagline: 'Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.',
        logo: logo,
        cover: bg,
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.bgWrapper}>
                <Image
                    src={promoObj.cover}
                    alt={promoObj.title}
                    className={styles.bg}
                    fill={false}
                />
            </div>
            <div className={styles.content}>
                <Image
                    src={promoObj.logo}
                    alt={promoObj.title}
                    className={styles.logo}
                    fill={false}
                />
                <p className={styles.tagline}>{promoObj.tagline}</p>
                <div className={styles.controls}>
                    <button className={`${styles.control} ${styles.control_colored}`}>
                        Смотреть
                    </button>
                    <button className={`${styles.control} ${styles.control_tint}`}>
                        О фильме
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Promo;