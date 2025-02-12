'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store.hook';
import { Product } from '../types/product.types';
import { getProducts } from '../store/features/products.slice';
import Card from './_components/Card/Card';

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, isFetched } = useAppSelector((store) => {
    return store.productReducer;
  });
  console.log(data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <main className="py-20">
        <div className="container">
          <form action="" className="text-center">
            <input
              type="search"
              placeholder="Enter Your Name Product"
              className="px-3 py-2 shadow-md rounded-lg w-3/4 bg-gray-200  focus:bottom-0 focus:outline-none text-black"
            />
          </form>
          <section className="cards grid grid-cols-12 gap-5 py-12 ">
            {isFetched && data
              ? data.map((product: Product) => (
                  <Card key={product.id} productInfo={product} />
                ))
              : 'refai'}
          </section>
        </div>
      </main>
    </>
  );
}
