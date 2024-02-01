import Image from 'next/image';
import styles from '../../styles/movie/page.module.scss';
import MovieHead from '../../components/Movie/MovieHead';
import MovieSeasons from '../../components/Movie/MovieSeasons';
import MovieDescription from '../../components/Movie/MovieDescription';
import SideBar from '../../components/SideBar';
import logo from '../../../public/Sidebar/Logo_big.svg';
import MovieRelated from '../../components/Movie/MovieRelated';
import MovieInfo from '../../components/Movie/MovieInfo';

const MoviePage = () =>
  <>
    <Image
      src={logo}
      alt="TVOE Logo"
      className={styles.logo}
      fill={false}
    />
    <SideBar />
    <main className={styles.main}>
      <MovieHead />
      <MovieSeasons />
      <MovieDescription />
      <MovieRelated />
      <MovieInfo />
    </main>
  </>

export default MoviePage;