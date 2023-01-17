import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Best from "../components/Best/Best";
import Hero from "../components/Hero/Hero";
import Last from "../components/Last/Last";
import Layout from "../components/Layout/Layout";
import Look from "../components/Looked/Looked";
import New from "../components/New/New";
import Withus from "../components/Withus/Withus";
import { getCotegories } from "../redux/action/categoriesAction";
import { getColors } from "../redux/action/colorsAction";
import { getFabrics } from "../redux/action/fabricsAction";
import { Dispatch } from "redux";
import { getOrder } from "../redux/action/orderAction";
import { getProducts } from "../redux/action/productsAction";
import { getSets } from "../redux/action/setsAction";
import { getSubCategories } from "../redux/action/subCategoriesAction";
import {addBasket} from "../redux/action/basketAction";

export default function Home() {
    const { products, productsNew, productsHit, productsNewCount, productsLastCount } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(true, false, productsNewCount))
    }, [productsNewCount, dispatch])

    useEffect(() => {
        dispatch(getProducts(false, false, productsLastCount))
        dispatch(getProducts(false, true, productsLastCount))
    }, [productsLastCount, dispatch])

    return (
        <Layout title="Главная">
            <Hero />
            <Withus />
            <New productsNew={productsNew} />
            <Best productsHit={productsHit} />
            <Last product={products}/>
        </Layout>
    )
}