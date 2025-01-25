'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/store.hook';
import { getSingleProduct } from '@/store/features/products.slice';
// import { getSingleProduct } from '../../../store/features/products.slice';
// import { useAppDispatch, useAppSelector } from '../../../hooks/store.hook';

// import { useAppDispatch, useAppSelector } from '@/hooks/store.hook';
// import { getSingleProduct } from '@/store/features/products.slice';
import { use, useEffect } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);

  const dispatch = useAppDispatch();
  const { singleProduct } = useAppSelector((store) => {
    return store.productReducer;
  });

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, []);
  return (
    <>
      {singleProduct ? (
        <div className="container mx-auto p-6 grid grid-cols-12  gap-6">
          <div className="flex justify-center items-center col-span-4">
            <img
              src={singleProduct.image}
              alt="Product"
              className="w-full  rounded-lg "
            />
          </div>

          <div className="flex flex-col justify-center space-y-6 col-span-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {singleProduct.title}
            </h1>

            <p className="text-2xl font-semibold text-green-600">
              ${singleProduct.price}
            </p>

            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-yellow-500 text-lg">★</span>
              <span className="text-gray-400 text-lg">★</span>
              <p className="text-sm text-gray-600 ml-2">
                {singleProduct.rating.rate}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {singleProduct.description}
            </p>

            <div className="flex flex-wrap space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
