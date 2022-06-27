import React, {useEffect} from 'react';
import Layout from '../../../../components/Layout/Layout';
import {useDispatch, useSelector} from "react-redux";
import {getSubCategories} from "../../../../redux/action/subCategoriesAction";
import Image from "next/image";

const SubCategory = () => {
    const { subCategories } = useSelector(state => state.subCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubCategories())
    }, [])

    return (
        <Layout title='id'>
            {subCategories?.map((item) => (
                <div key={item.id}>
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
                </div>
            ))}
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
