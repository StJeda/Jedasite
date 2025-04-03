import { FC } from "react";
import scss from "@/styles/aboutUs.module.scss"
import fonts from "@/styles/fonts.module.scss";
import Image from "next/image";

const AboutUs: FC = () => {
    return (
        <div className={scss.container}>
            <header className={scss.header}>
                <h1 className={`${scss.pageTitle} ${fonts.exo}`}>Why choose us?</h1>
                <p className={`${scss.slogan} ${fonts.exo}`}>We create innovative digital solutions — websites, applications, and systems to help your business grow.</p>
            </header>
            <main className={scss.main}>
                <div className="col-1">
                    <Image
                        width={314}
                        height={447}
                        alt="Group Photo"
                        src="/Group photo.png"
                    />
                </div>
                <div className="col-2">

                </div>
                <div className="col-3">

                </div>
            </main>
            <div className={scss.ourTeam}>
                <div className={scss.memberCard}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate dolorem sequi sapiente aspernatur, non neque alias dolorum minus atque deleniti, eum perspiciatis ad. Asperiores placeat totam facilis minima sapiente labore.</div>
                <div className={scss.memberCard}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil molestiae perferendis, porro expedita nulla.</div>
                <div className={scss.memberCard}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae delectus reiciendis expedita quibusdam necessitatibus!</div>
            </div>
        </div>
    )
}

export default AboutUs;