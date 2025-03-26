import sass from '/styles/mainpage.module.scss';
import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { getPageComponent } from "@/vll/utils/getComponent";
import { AnimatedPageProps } from '@/vll/utils/interfaces/animatedPageProps';
import { Pages } from '@/models/enums/pages';
import dynamic from 'next/dynamic';

const AnimatedPage: FC<AnimatedPageProps> = ({ currentPage }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) 
        return 
            <div>Loading...</div>; /*Нужно добавить форму прогрузки*/

    let page = currentPage ?? Pages.Main;
    const pageToRender = getPageComponent(page);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                style={{ margin: '0' }}
                key={currentPage}
                className={sass.content_container}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                {pageToRender}
            </motion.div>
        </AnimatePresence>
    );
};

export default dynamic(() => Promise.resolve(AnimatedPage), { ssr: false });
