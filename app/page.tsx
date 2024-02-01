import Image from 'next/image';
import styles from './styles/page.module.scss';
import SideBar from './components/SideBar';
import Promo from './components/Promo';
import New from './components/New';
import Top from './components/TopRated';
import logo from '../public/Sidebar/Logo_big.svg';

const IndexPage = () => {

  return (
    <>
      <Image
        src={logo}
        alt="TVOE Logo"
        className={styles.logo}
        fill={false}
      />
      <SideBar />
      <Promo />
      <main className={styles.main}>
        <New />
        <Top />
      </main>
    </>
  )
};

export default IndexPage;