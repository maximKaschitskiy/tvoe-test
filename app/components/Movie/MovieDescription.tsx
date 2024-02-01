import Image from 'next/image';
import attention from '../../../public/Movie/Icons/Attention.svg';
import styles from '../../styles/components/movie/movieDescription.module.scss';

const MovieDescription = () => 

        <article className={styles.wrapper}>
            <h6 className={styles.title}>Описание</h6>
            <p className={styles.article}>
                Детективная история, наполненная сверхъестественными силами. Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в академии.
            </p>
            <div className={styles.noticeWrapper}>
                <Image
                    src={attention}
                    alt="Attention"
                    className={styles.attention}
                    fill={false}
                />
                <p className={styles.notice}>
                    Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит вашему здоровью.
                </p>
            </div>
        </article>

export default MovieDescription;