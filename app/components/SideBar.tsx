'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/sidebar.module.scss';
import icon_search from '../../public/Sidebar/1_Search.svg';
import icon_home from '../../public/Sidebar/2_Home.svg';
import icon_movie from '../../public/Sidebar/3_Movie.svg';
import icon_tv from '../../public/Sidebar/4_TV.svg';
import icon_fave from '../../public/Sidebar/5_Fave.svg';
import icon_user from '../../public/Sidebar/6_User.svg';
import icon_top from '../../public/Sidebar/OnTop.svg';


const SideBar = () => {

  const menuItems = [
    {
      icon: icon_search,
      link: ''
    },
    {
      icon: icon_home,
      link: ''
    },
    {
      icon: icon_movie,
      link: ''
    },
    {
      icon: icon_tv,
      link: ''
    },
    {
      icon: icon_fave,
      link: ''
    },
    {
      icon: icon_user,
      link: ''
    }
  ];

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 

  return (
    <div className={styles.wrapper}>
      <nav className={styles.menu}>
        <ul className={styles.links}>
          {
            menuItems.map((item, index) =>
              <li key={index} className={styles.link_wrapper}>
                <Link
                  href={item.link}
                  className={styles.link}
                >
                  <Image
                    src={item.icon}
                    alt="Logo"
                    className={styles.icon}
                    priority
                    fill={false}
                  />
                </Link>
              </li>
            )
          }
        </ul>
        <button className={styles.button} onClick={scrollToTop}>
            <Image
              src={icon_top}
              alt="Logo"
              className={styles.icon}
              priority
              fill={false}
            />
          </button>
      </nav>
    </div>
  )
};

export default SideBar;