import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, getProductsDetail} from "../redux/action/productsAction";
import Layout from "../components/Layout/Layout";
import ProductsDetail from "../components/Detail/ProductsDetail";
import Best from "../components/Best/Best";

const Detail = () => {
    const { productsHit, productsLastCount } = useSelector((state) => state.products)
    const router = useRouter()
    const dispatch = useDispatch()
    const { productsDetail } = useSelector(state => state.products)
    useEffect(() => {
        if(router.query.id){
            dispatch(getProductsDetail(router.query.id))
        }
    }, [router.query.id, dispatch])
    useEffect(() => {
        dispatch(getProducts(false, true, productsLastCount))
    }, [productsLastCount, dispatch])
    return (
        <Layout title={productsDetail?.name} >
            <ProductsDetail productsDetail={productsDetail} />
            <br/>
            <br/>
           <hr/>
        </Layout>
    );
};

export default Detail