import React, { useEffect } from "react";
import Layout from "../../../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
    getSubCategories,
    getSubCategoriesDetail,
} from "../../../../redux/action/subCategoriesAction";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { BestCardCatalog } from "../../../../components/catalog/catalog";
import styles from "./styles.module.css";
import { getProducts } from "../../../../redux/action/productsAction";
import { BestCard } from "../../../../components/Best/Best";

const SubCategory = () => {
    const { subCategories, subCategoriesDetail } = useSelector(
        (state) => state.subCategories
    );
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const query = useRouter();
    console.log(products)
    useEffect(() => {
        if (query.query.subcategory) {
            dispatch(getSubCategoriesDetail(+query.query.subcategory));
            dispatch(getProducts(false, false, 20, false))
        }
    }, [query.query.subcategory, dispatch]);

    useEffect(() => {
        dispatch(getSubCategories());
    }, [dispatch]);

    return (
        <Layout title="id">
            <div className={styles.content + " container"}>
                <div>
                    <Image
                        loader={() => subCategoriesDetail.image}
                        src={
                            subCategoriesDetail.image
                                ? subCategoriesDetail.image
                                : "./kreslo.png"
                        }
                        alt=""
                        width={450}
                        height={300}
                        objectFit="cover"
                        unoptimized
                    />
                </div>
                <div>
                    <p>{subCategoriesDetail.name}</p>
                </div>
            </div>
            <div className="container">
                <div className={styles.best_card_wrapper}>
                {
                    products?.results?.filter(item => item.subcategory === subCategoriesDetail.name).map((item) => (
                        <Link
                            href="/[id]"
                            as={`/${item.id}`}
                            key={item.id}
                        >
                            <a style={{cursor: "auto"}}>
                                <BestCardCatalog content={item} />
                            </a>
                        </Link>
                    ))
                }
                </div>
            </div>
            <div className="container">
                <h3 className={styles.h3}>Все категорий</h3>
                <div className={styles.best_card_wrapper}>
                    {subCategories?.map((item) => (
                        <Link
                            href="/catalog/[category]/[subcategory]"
                            as={`/catalog/[category]/${item.id}`}
                            key={item.id}
                        >
                            <a>
                                <BestCardCatalog content={item} />
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default SubCategory;