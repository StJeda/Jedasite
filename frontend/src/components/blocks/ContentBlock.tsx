import styles from './ContentBlock.module.scss';

interface ContentBlockProps {
  title: string;
  content: string;
}

const ContentBlock = ({ title, content }: ContentBlockProps) => {
  return (
    <div className={styles.contentBlock}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContentBlock; 