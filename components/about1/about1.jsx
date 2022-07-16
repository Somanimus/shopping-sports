import React from "react";
import styles from "./about1.module.css";

import Image from "next/image";

const About = () => {
    return (
        <section className="container">
            <div className={styles.about__content}>
                <div className={styles.about_left}>
                    <h1 className={styles.about_h1}>О компании</h1>
                    <p className={styles.about_p}>
                        Кыргызская производственная компания Corpus.kg –
                        стабильный лидер по производству мебели, пластиковой и
                        металлической продукции широкого спектра.
                        <br />
                        <br />
                        Компания обладает собственными заводами. Благодаря
                        процессу развития производственных мощностей и
                        приобретению высокотехнологичного оборудования, а также,
                        сбалансированной стратегии производства, доля
                        кыргызстанского содержания в готовой продукции
                        составляет около 90%.
                    </p>
                </div>

                <div className={styles.about_right}>
                    <Image
                        id="img"
                        src="/proto.jpg"
                        alt="image"
                        width={600}
                        height={450}
                        unoptimized
                    />
                </div>
            </div>
            <div className={styles.dop_info}>
                <p>
                    Основным направлением деятельности является производство
                    мягкой и корпусной мебели, кресел, стульев и столов для дома
                    и офиса. Кроме того, компания занимается производством
                    мебели для школьных и медицинских учреждений, салонов
                    красоты, а также мебели для гостиничного и ресторанного
                    бизнеса, кресел для конференц-залов и кинотеатров.
                </p>
            </div>
        </section>
    );
};

export default About;
