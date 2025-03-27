import Technologies from "@/models/enums/technologies";
import DirectionCard from "./cards/directionCard";
import sass from "/styles/mainpage.module.scss";
import fonts from "@/styles/fonts.module.scss";

import { FC, useState } from "react";

const MainComponent: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Technologies | null>(null);

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
            <div className="animatedBlock" style={{ position: 'fixed',  width: '10vw', whiteSpace: 'nowrap', zIndex: 500 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={fonts.exo} style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800, marginRight: '10px' }}>
                        CREATING A
                    </p>
                    <p className={fonts.exoItalic} style={{ color: '#D8FF4C', fontSize: '1.6rem', fontWeight: 800 }}>
                        DIGITAL FUTURE
                    </p>
                </div>
                <div>
                    <p className={fonts.exo} style={{marginTop: '-3vh', color: 'white', fontSize: '1.6rem', fontWeight: 800, marginRight: '10px' }}>
                        FOR YOUR BUSSINESS
                    </p>
                </div>
                <div>
                    <p className={fonts.exo} style={{color: 'white', fontSize: '0.7rem', fontWeight: 300}}>
                        We design, develop, and optimize digital experiences that drive.
                    </p>
                    <p className={fonts.exo} style={{marginTop: '-1vh', color: 'white', fontSize: '0.7rem', fontWeight: 300}}>
                        Enhance visibility, and keep you ahead in an evolving market.
                    </p>
                    <p className={fonts.exo} style={{marginTop: '-1vh', color: 'white', fontSize: '0.7rem', fontWeight: 300}}>
                        Let’s build your future - efficient, scalable, and impactful.
                    </p>
                </div>
                <div style={{paddingTop: '38vh', marginLeft: '-1vh', marginBottom: '2vh'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className={fonts.exo} style={{color: 'white', border: '1px solid white', margin: '0.9vh', padding: '5px'}}>
                                Design
                            </p>
                            <p className={fonts.exo} style={{color: 'white', border: '1px solid white', margin: '1vh', padding: '5px'}}>
                                Server
                            </p>
                            <p className={fonts.exo} style={{color: 'white', border: '1px solid white', margin: '1vh', padding: '5px'}}>
                                Interface
                            </p>
                            <p className={fonts.exo} style={{color: 'white', border: '1px solid white', margin: '0.9vh', padding: '5px'}}>
                                CI/CD
                            </p>
                    </div>
                </div>
                <div>
                    <button 
                        className={fonts.exo} 
                        style={{
                            background: '#282828', 
                            color: '#23E1BC', 
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: '4px solid #23E1BC',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.4)',
                            width: '21.4vw',
                            height: '6vh',
                            borderBottomLeftRadius: '0.44rem',
                            borderBottomRightRadius: '0.44rem',
                            marginBottom: '7vh'
                        }}
                    >
                        START THE PROJECT
                    </button>
                </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '22vw', marginRight: '2vw' }}>
                <div className={sass.logo}>
                    <svg width="80vh" height="80vw" viewBox="0 0 817 807" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dd_1226_3352)">
                            <path fill={isFocused(Technologies.Design) ? "#673ad0" : "#282828"} fill-rule="evenodd" clip-rule="evenodd" d="M410.5 745.3C602.032 745.3 757.3 590.032 757.3 398.5C757.3 206.968 602.032 51.7 410.5 51.7C218.968 51.7 63.7 206.968 63.7 398.5C63.7 590.032 218.968 745.3 410.5 745.3ZM410.5 781C621.749 781 793 609.749 793 398.5C793 187.251 621.749 16 410.5 16C199.251 16 28 187.251 28 398.5C28 609.749 199.251 781 410.5 781Z"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M340.516 149.766L340.517 321.798C340.517 325.11 337.06 327.287 334.073 325.856L175.955 250.093C172.734 248.549 172.508 244.048 175.559 242.191L333.676 145.923C336.674 144.097 340.516 146.255 340.516 149.766Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M480.346 149.766L480.344 321.798C480.344 325.11 483.802 327.287 486.789 325.856L644.907 250.093C648.128 248.549 648.353 244.048 645.302 242.191L487.186 145.923C484.187 144.097 480.346 146.255 480.346 149.766Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M169.886 461.359L339.572 572.805C340.839 573.637 341.602 575.051 341.602 576.566V630.645C341.602 634.261 337.553 636.4 334.566 634.362L164.88 518.602C163.651 517.764 162.916 516.372 162.916 514.885V465.12C162.916 461.54 166.894 459.394 169.886 461.359Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M651.114 461.359L481.428 572.805C480.161 573.637 479.398 575.051 479.398 576.566V630.645C479.398 634.261 483.447 636.4 486.434 634.362L656.12 518.602C657.349 517.764 658.084 516.372 658.084 514.885V465.12C658.084 461.54 654.106 459.394 651.114 461.359Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Backend) ? "#106fdc" : "#282828"} d="M437.04 128.315V667.177C437.04 669.536 435.931 671.757 434.045 673.174L415.006 687.474C412.337 689.478 408.666 689.478 405.998 687.474L386.959 673.174C385.073 671.757 383.963 669.536 383.963 667.177V128.315C383.963 126.011 385.022 123.835 386.836 122.413L405.874 107.487C408.591 105.357 412.412 105.357 415.129 107.487L434.168 122.413C435.981 123.835 437.04 126.011 437.04 128.315Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M169.359 313.548L339.045 394.796C340.607 395.544 341.602 397.123 341.602 398.855V502.527C341.602 506.04 337.757 508.198 334.758 506.368L165.072 402.831C163.733 402.014 162.916 400.559 162.916 398.99V317.607C162.916 314.295 166.372 312.118 169.359 313.548Z" stroke="#282828"/>
                            <path fill={isFocused(Technologies.Frontend) ? "#09b65a" : "#282828"} d="M651.168 313.548L481.482 394.796C479.92 395.544 478.926 397.123 478.926 398.855V502.527C478.926 506.04 482.771 508.198 485.769 506.368L655.455 402.831C656.794 402.014 657.611 400.559 657.611 398.99V317.607C657.611 314.295 654.155 312.118 651.168 313.548Z"  stroke="#282828"/>
                        </g>
                        <defs>
                            <filter id="filter0_dd_1226_3352" x="0" y="0" width="817" height="807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="4" dy="4"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1226_3352"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="-8" dy="6"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_1226_3352" result="effect2_dropShadow_1226_3352"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1226_3352" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div>
            <div style={{marginTop: '6vh'}}>
                <DirectionCard
                    header="UI/UX Design"
                    description="We create intuitive and visually stunning interfaces. UX enhances interactions, while UI ensures aesthetics and conversions."
                    technology={Technologies.Design}
                    isOnFocus={isFocused(Technologies.Design)}
                    onMouseEnter={() => setFocusedCard(Technologies.Design)}
                    onMouseLeave={() => setFocusedCard(null)}
                />
            </div>
            <div style={{marginLeft: '4vw'}}>
                <DirectionCard
                    header="Frontend"
                    description="We make web apps fast, responsive and seamless cutting-edge tech ensures smooth performance and instant loading"
                    technology={Technologies.Frontend}
                    isOnFocus={isFocused(Technologies.Frontend)}
                    onMouseEnter={() => setFocusedCard(Technologies.Frontend)}
                    onMouseLeave={() => setFocusedCard(null)}
                />
            </div>
            <DirectionCard
                header="Backend"
                description="We build secure and scalable server solutions. Reliable architecture and APIs keep your business running smoothly"
                technology={Technologies.Backend}
                isOnFocus={isFocused(Technologies.Backend)}
                onMouseEnter={() => setFocusedCard(Technologies.Backend)}
                onMouseLeave={() => setFocusedCard(null)}
            />
        </div>
        </div>
    );
    function isFocused(targetTechnology: Technologies): boolean {
        return focusedCard === targetTechnology ? true : false;
    }
    
};

export default MainComponent;