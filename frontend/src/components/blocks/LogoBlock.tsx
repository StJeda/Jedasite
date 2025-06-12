import Image from 'next/image';
import styles from './LogoBlock.module.scss';

const LogoBlock = () => {
  return (
    <div className={styles.logoBlock}>
      <Image src="/Big LOGO.svg" alt="Big Logo" width={400} height={400} />
    </div>
  );
};

export default LogoBlock; 