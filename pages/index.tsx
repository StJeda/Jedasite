import { FC } from 'react';
import sass from '/styles/mainpage.module.scss';
import { usePageTransition } from '@/vll/utils/hooks/usePageTransition';
import AnimatedPage from './components/core/animatedPage';


const Home: FC = () => {
  const { currentPage } = usePageTransition();

  return (
    <div className={sass.layout}>
      <div className={sass.contentContainer}>
        <AnimatedPage currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Home;
