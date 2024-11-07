import React, { useState } from 'react'
import Container from '../Container';
import { HighlightsType } from '@/type';
import Link from 'next/link';
const highlightsData = [
  { _id:1, title:'From $40.00',color:'#111', buttonTitle:'Browse Deals', name: "New Deals at Best Prices", _base:"/", image: "/assets/bannerOne.webp" },
  { _id:2, title:'From $40.00',color:'#fff', buttonTitle:'Shop Cellphone', name: "Colorful Redmi  Note 6 Pro", _base:"/", image: "/assets/bannerThree.webp" },
  { _id:3, title:'From $40.00',color:'#fff', buttonTitle:'Shop Now', name: "1000 mAh Power Bank", _base:"/", image: "/assets/bannerTwo.webp" },
];
const Hightlights = () => {
    return (
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightsData.map((item: HighlightsType) => (
          <div
            key={item?._id}
            className="relative h-60 rounded-lg shadow-md cursor-pointer overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(${item?.image})`,
                color: item?.color,
              }}
            ></div>
            <div
              className="relative z-10 p-6 flex flex-col justify-between h-full"
              style={{ color: item?.color }}
            >
              <div>
                <h3 className="text-2xl font-bold max-w-44">{item?.name}</h3>
                <p className="text-base font-bold mt-4">{item?.title}</p>
              </div>
              <Link href={item?._base} className="text-base font-normal">
                {item?.buttonTitle}
              </Link>
            </div>
          </div>
        ))}
      </Container>
    );
  };
  
  export default Hightlights;
