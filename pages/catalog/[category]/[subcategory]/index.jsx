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

const SubCategory = () => {
    const { subCategories, subCategoriesDetail } = useSelector(
        (state) => state.subCategories
    );
    const dispatch = useDispatch();
    const query = useRouter();

    useEffect(() => {
        if (query.query.subcategory) {
            dispatch(getSubCategoriesDetail(+query.query.subcategory));
        }
    }, [query.query.subcategory]);

    useEffect(() => {
        dispatch(getSubCategories());
    }, []);

    return (
        <Layout title="id">
            <div className={styles.content}>
                <div>
                    <Image
                        loader={() => subCategoriesDetail.image}
                        src={subCategoriesDetail.image ? subCategoriesDetail.image : "./kreslo.png"}
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
            <h3 className={styles.h3}>Все категорий</h3>
            <div className={styles.bestCardCatalog}>
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
        </Layout>
    );
};

export default SubCategory;

// export async function getServerSideProps({ query }) {
//     const strValue = query.category;
//     const title = strValue.slice(0, -1);
//     const id = strValue.slice(-1);
//     const res = await fetch(
//         `http://212.42.103.101:8920/subcategory/?category=${id}`
//     );
//     const subcategories = await res.json();
//     return { props: { title, subcategories } };
// }
