import React from "react";
import styles from "./detail.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, basketAction } from "../../redux/action/basketAction";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " next-button-slick"}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " prev-button-slick"}
            style={{ ...style, display: "block", background: "transparent" }}
            onClick={onClick}
        />
    );
}

const ProductsDetail = ({ productsDetail }) => {
    const { basket } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    function onClickButton(e) {
        e.preventDefault();
        addBasket(productsDetail.id);
        dispatch(basketAction());
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="container" style={{'marginTop' : '6em', 'marginBottom' : '4em'}}>
            <div className={styles.content}>
                <div className={styles.slider}>
                    <Slider {...settings}>
                        <div>
                            {productsDetail.image && (
                                <Image
                                    loader={() => productsDetail.image}
                                    src={productsDetail.image}
                                    objectFit={"contain"}
                                    alt=""
                                    width={600}
                                    height={600}
                                    unoptimized
                                />
                            )}
                        </div>
                        {productsDetail.image2 && (
                            <div>
                                {productsDetail.image2 && (
                                    <Image
                                        loader={() => productsDetail.image2}
                                        src={productsDetail.image2}
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                                )}
                            </div>
                        )}
                        {productsDetail.image3 && (
                            <div>
                                {productsDetail.image3 && (
                                    <Image
                                        loader={() => productsDetail.image3}
                                        src={productsDetail.image3}
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                                )}
                            </div>
                        )}
                        {productsDetail.image4 && (
                            <div>
                                {productsDetail.image4 && (
                                    <Image
                                        loader={() => productsDetail.image4}
                                        src={productsDetail.image4}
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                                )}
                            </div>
                        )}
                        {productsDetail.image5 && (
                            <div>
                                {productsDetail.image5 && (
                                    <Image
                                        loader={() => productsDetail.image5}
                                        src={productsDetail.image5}
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                                )}
                            </div>
                        )}
                        {productsDetail.image6 && (
                            <div>
                                {productsDetail.image6 && (
                                    <Image
                                        loader={() => productsDetail.image6}
                                        src={productsDetail.image6}
                                        objectFit={"contain"}
                                        alt=""
                                        width={600}
                                        height={600}
                                        unoptimized
                                    />
                                )}
                            </div>
                        )}
                    </Slider>
                </div>
                <div>
                    <div className={styles.name}>
                        <h2>{productsDetail.name}</h2>

                        {productsDetail.sale && (
                            <div className={styles.sale}>
                                <div>{productsDetail.discount}%</div>
                            </div>
                        )}
                    </div>

                    <div style={{'marginBottom' : '1.5em'}}><strong>Под котегория:</strong> {productsDetail.subcategory}</div>
                    <div style={{'marginBottom' : '1.5em'}}><strong>Комплектация:</strong> {productsDetail.prod_set}</div>
                    <div style={{'marginBottom' : '1.5em'}}><strong>Цвет:</strong> {productsDetail.color}</div>
                    <div style={{'marginBottom' : '1.5em'}}><strong>Описание:</strong> {productsDetail.description}</div>
                    <div className={styles.btn_card_price}>
                        <div className={styles.price}>
                            <strong>Цена:</strong>{" "}
                            <span
                                className={
                                    productsDetail.sale ? styles.dis_price : ""
                                }
                            >
                                {productsDetail.price &&
                                    productsDetail.price.replace(
                                        /\..*/,
                                        ""
                                    )}{" "}
                                сом
                            </span>{" "}
                            {productsDetail.sale && (
                                <span>{productsDetail.discount_price} сом</span>
                            )}
                        </div>
                        <div
                            className={styles.best_card_btn}
                            onClick={onClickButton}
                        >
                            {basket.indexOf(productsDetail.id) !== -1
                                ? "Удалить из корзины"
                                : "В корзину"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;
