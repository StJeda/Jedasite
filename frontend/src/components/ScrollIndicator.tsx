import styles from './ScrollIndicator.module.scss';

interface ScrollIndicatorProps {
  currentBlock: number;
  totalBlocks: number;
  onBlockChange: (blockIndex: number) => void;
  isMobile?: boolean;
  scrollProgress?: number;
}

const ScrollIndicator = ({ currentBlock, totalBlocks, onBlockChange, isMobile = false, scrollProgress = 0 }: ScrollIndicatorProps) => {
  if (isMobile) {
    return (
      <div className={styles.mobileScrollIndicator}>
        <div className={styles.mobileScrollTrack}>
          <div 
            className={styles.mobileScrollThumb}
            style={{ 
              width: `${100 / totalBlocks}%`,
              left: `${scrollProgress * (100 - 100 / totalBlocks)}%`
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.desktopScrollIndicator}>
      {Array.from({ length: totalBlocks }).map((_, index) => (
        <div
          key={index}
          className={`${styles.desktopScrollDot} ${index === currentBlock ? styles.active : ''}`}
          onClick={() => onBlockChange(index)}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator; 