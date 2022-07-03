import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesDetail } from "../../../redux/action/categoriesAction";
import { BestCardCatalog } from "../../../components/catalog/catalog";
import styles from "./category.module.css"

const Subcategory = () => {
    const { categoriesDetail } = useSelector((state) => state.categories);
    const query = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if(query.query.category){
            dispatch(getCategoriesDetail(+query.query.category))
        }
    }, [query.query.category])

    return (
        <Layout title={categoriesDetail.name}>
            <div className={styles.content + " container"}>
                <div>
                    <Image 
                        loader={() => categoriesDetail.image}
                        src={categoriesDetail?.image ? categoriesDetail?.image : "./kreslo.png"}
                        alt=""
                        width={450}
                        height={300}
                        objectFit="cover"
                        unoptimized
                    />
                </div>
                <div>
                    <p>{categoriesDetail.name}</p>
                </div>
            </div>
            <div className={"container " + styles.best_card_wrapper}>
                {categoriesDetail?.sub_categories?.map((item) => (
                        <Link
                            href='/catalog/[category]/[subcategory]'
                            as={`${query.asPath}/${item.id}`}
                            key={item.id}
                        >
                            <a>
                                <BestCardCatalog content={item} />
                            </a>
                        </Link>
                ))}
            </div>
        </Layout>
    );
};

export default Subcategory;