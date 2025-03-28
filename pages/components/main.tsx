import Directions from "@/models/enums/directions";
import DirectionCard from "./cards/directionCard";
import sass from "/styles/mainpage.module.scss";
import fonts from "@/styles/fonts.module.scss";

import { FC, useState } from "react";
import JedaLogo from "./svgs/jedaLogo";

const MainComponent: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Directions | null>(null);

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="animatedBlock" style={{ position: 'fixed', width: '10vw', whiteSpace: 'nowrap', zIndex: 500 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className={fonts.exo} style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800, marginRight: '10px' }}>
                        CREATING A
                    </p>
                    <p className={fonts.exoItalic} style={{ color: '#D8FF4C', fontSize: '1.6rem', fontWeight: 800 }}>
                        DIGITAL FUTURE
                    </p>
                </div>
                <div>
                    <p className={fonts.exo} style={{ marginTop: '-3vh', color: 'white', fontSize: '1.6rem', fontWeight: 800, marginRight: '10px' }}>
                        FOR YOUR BUSSINESS
                    </p>
                </div>
                <div>
                    <p className={fonts.exo} style={{ color: 'white', fontSize: '0.7rem', fontWeight: 300 }}>
                        We design, develop, and optimize digital experiences that drive.
                    </p>
                    <p className={fonts.exo} style={{ marginTop: '-1vh', color: 'white', fontSize: '0.7rem', fontWeight: 300 }}>
                        Enhance visibility, and keep you ahead in an evolving market.
                    </p>
                    <p className={fonts.exo} style={{ marginTop: '-1vh', color: 'white', fontSize: '0.7rem', fontWeight: 300 }}>
                        Let’s build your future - efficient, scalable, and impactful.
                    </p>
                </div>
                <div style={{ paddingTop: '38vh', marginLeft: '-1vh', marginBottom: '2vh' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <p className={fonts.exo} style={{ color: 'white', border: '1px solid white', margin: '0.9vh', padding: '5px' }}>
                            Design
                        </p>
                        <p className={fonts.exo} style={{ color: 'white', border: '1px solid white', margin: '1vh', padding: '5px' }}>
                            Server
                        </p>
                        <p className={fonts.exo} style={{ color: 'white', border: '1px solid white', margin: '1vh', padding: '5px' }}>
                            Interface
                        </p>
                        <p className={fonts.exo} style={{ color: 'white', border: '1px solid white', margin: '0.9vh', padding: '5px' }}>
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
                    <JedaLogo focusedCard={focusedCard} />
                </div>
            </div>
            <div className="animatedBlock">
                <div style={{ marginTop: '6vh', paddingBottom: '26vh' }}>
                    <DirectionCard
                        header="UI/UX Design"
                        description="We create intuitive and visually stunning interfaces. UX enhances interactions, while UI ensures aesthetics and conversions."
                        direction={Directions.Design}
                        isOnFocus={isFocused(Directions.Design)}
                        onMouseEnter={() => setFocusedCard(Directions.Design)}
                        onMouseLeave={() => setFocusedCard(null)}
                    />
                </div>
                <div style={{ marginLeft: '4vw', paddingBottom: '26vh' }}>
                    <DirectionCard
                        header="Frontend"
                        description="We make web apps fast, responsive and seamless cutting-edge tech ensures smooth performance and instant loading"
                        direction={Directions.Frontend}
                        isOnFocus={isFocused(Directions.Frontend)}
                        onMouseEnter={() => setFocusedCard(Directions.Frontend)}
                        onMouseLeave={() => setFocusedCard(null)}
                    />
                </div>
                <div style={{ paddingBottom: '26vh' }}>
                    <DirectionCard
                        header="Backend"
                        description="We build secure and scalable server solutions. Reliable architecture and APIs keep your business running smoothly"
                        direction={Directions.Backend}
                        isOnFocus={isFocused(Directions.Backend)}
                        onMouseEnter={() => setFocusedCard(Directions.Backend)}
                        onMouseLeave={() => setFocusedCard(null)}
                    />
                </div>
            </div>
        </div>
    );
    function isFocused(targetDirection: Directions): boolean {
        return focusedCard === targetDirection ? true : false;
    }

};

export default MainComponent;