/* eslint-disable @next/next/no-img-element */
import { Product } from '@/types/product.types';
import React from 'react';

export default function Card({ productInfo }: { productInfo: Product }) {
  const { title, price, category, description, image } = productInfo;
  return (
    <div className="group/parent card bg-white shadow-md rounded-md overflow-hidden  col-span-12 sm:col-span-6 md:col-span-4  lg:col-span-3">
      <div className="image-card relative cursor-pointer  ">
        <img src={image} className="w-full h-48 object-contain" alt="" />
        <ul className="opacity-0 pl-3 justify-center flex gap-5 flex-col absolute group-hover/parent:opacity-100 duration-500 transition-opacity inset-0 bg-black bg-opacity-15 top-50 ">
          <li
          // onClick={() => {
          //   addProuductWishList({ productId: id });
          // }}
          >
            <i className="fa-regular fa-heart"></i>
          </li>
          <li
            className="animation-icon bg-white text-primary-500"
            // onClick={() => {
            //   addProductToCart({ productId: id });
            // }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="animation-icon bg-white text-primary-500">
            {/* <Link to={`/productdetails/${id}`}>
              <i className="fa-regular fa-eye"></i>
            </Link> */}
          </li>
        </ul>
      </div>
      <div className="card-body py-5 px-3 space-y-3">
        <header className="header-body space-y-2">
          <h2 className="Category text-sm font-medium text-primary-500 mb-1">
            {category}
          </h2>
          <h3
            // to={`/productdetails/${id}`}
            className="namec-category text-xl  font-medium line-clamp-1"
          >
            {title}
          </h3>
          <p className="description line-clamp-2 text-slate-500">
            {description}
          </p>
        </header>
        <footer className="footer-body flex justify-between items-center">
          <p>
            {price} <span className="">EGP</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
