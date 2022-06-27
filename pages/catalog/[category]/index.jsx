import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Layout from "../../../components/Layout/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesDetail } from "../../../redux/action/categoriesAction";

const Subcategory = ({ title }) => {
    const { categoriesDetail } = useSelector((state) => state.categories);
    const query = useRouter();
    const dispatch = useDispatch();

    console.log(query)

    useEffect(() => {
        if(query.query.category){
            console.log(query.query.category)
            dispatch(getCategoriesDetail(+query.query.category))
        }
    }, [query.query.category])

    return (
        <Layout title={title}>
            {categoriesDetail?.sub_categories?.map((item) => (
                <div key={item.name}>
                    <Link
                        href='/catalog/[category]/[subcategory]'
                        as={`${query.asPath}/${item.name}${item.id}`}
                    >
                        <a>
                            <div>{item.name}</div>
                            <Image
                                id='img'
                                src={item.image}
                                alt='image'
                                width={500}
                                height={500}
                                loader={() => item.image}
                                unoptimized
                            />
                        </a>
                    </Link>
                </div>
            ))}
        </Layout>
    );
};

export default Subcategory;

// export async function getServerSideProps({ query }) {
//     const strValue = query.category;
//     const title = strValue.slice(0, -1);
//     const id = strValue.slice(-1);
//     const res = await fetch(
//         `http://212.42.103.101:8920/subcategory/?category=${id}`
//     );
//     const subcategories = await res.json();
//     return { props: { title, subcategories, id } };
// }
