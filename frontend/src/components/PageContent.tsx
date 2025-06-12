'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './PageContent.module.scss';
import LogoBlock from './blocks/LogoBlock';
import ContentBlock from './blocks/ContentBlock';
import ScrollIndicator from './ScrollIndicator';

const PageContent = () => {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Обробка прокрутки для десктопу
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 450) return; // Тільки для десктопу
      
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentBlock < 5) {
        setCurrentBlock(prev => prev + 1);
      } else if (e.deltaY < 0 && currentBlock > 0) {
        setCurrentBlock(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentBlock, isScrolling]);

  // Обробка прокрутки для мобільних пристроїв
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 450) return; // Тільки для мобільних
      
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      // Конвертуємо прогрес прокрутки в номер блоку (0-5)
      const blockIndex = Math.min(Math.floor(scrollPercent * 6), 5);
      setCurrentBlock(blockIndex);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блоки для десктопу
  const desktopBlocks = [
    {
      id: 1,
      content: <LogoBlock />
    },
    {
      id: 2,
      content: <ContentBlock title="Блок 2" content="Тут буде контент другого блоку" />
    },
    {
      id: 3,
      content: <ContentBlock title="Блок 3" content="Тут буде контент третього блоку" />
    },
    {
      id: 4,
      content: <ContentBlock title="Блок 4" content="Тут буде контент четвертого блоку" />
    },
    {
      id: 5,
      content: <ContentBlock title="Блок 5" content="Тут буде контент п'ятого блоку" />
    },
    {
      id: 6,
      content: <ContentBlock title="Блок 6" content="Тут буде контент шостого блоку" />
    }
  ];

  return (
    <div className={styles.pageContent}>
      {/* Десктопна версія */}
      <div className={styles.desktopVersion}>
        {desktopBlocks.map((block, index) => (
          <div
            key={block.id}
            className={`${styles.block} ${index === currentBlock ? styles.active : ''}`}
            style={{ transform: `translateY(${(index - currentBlock) * 100}vh)` }}
          >
            {block.content}
          </div>
        ))}
        
        {/* Полоса прокрутки для десктопу */}
        <ScrollIndicator 
          currentBlock={currentBlock}
          totalBlocks={desktopBlocks.length}
          onBlockChange={setCurrentBlock}
          isMobile={false}
        />
      </div>

      {/* Мобільна версія */}
      <div className={styles.mobileVersion}>
        <div className={styles.mobileLogo}>
          <Image src="/Big LOGO.svg" alt="Big Logo" width={300} height={300} />
        </div>
        <div className={styles.mobileContent}>
          <h2>Мобільний контент</h2>
          <p>Тут буде суцільна стрічка контенту для мобільних пристроїв</p>
          <p>Цей контент можна прокручувати як зазвичай</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
          <p>Додайте більше контенту тут...</p>
        </div>
        
        {/* Полоса прокрутки для мобільних */}
        <ScrollIndicator 
          currentBlock={currentBlock}
          totalBlocks={desktopBlocks.length}
          onBlockChange={setCurrentBlock}
          isMobile={true}
          scrollProgress={scrollProgress}
        />
      </div>
    </div>
  );
};

export default PageContent; 