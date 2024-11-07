// 'use client';
// import React from 'react';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import CustomRightArrow from './CustomRightArrow';
// import CustomLeftArrow from './CustomLeftArrow';
// import { CategoryProps } from '@/type';
// import Image from 'next/image';

// const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

// const responsive = {
//     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
//     tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
//     mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
// };

// const categories: CategoryProps[] = [
//     { _id: 1, description: '', name: 'Camera', _base: '/', image: '/category/cat-Camera.webp' },
//     { _id: 2, description: '', name: 'Computer & Laptop', _base: '/', image: '/category/cat-Computer.webp' },
//     { _id: 3, description: '', name: 'Gaming', _base: '/', image: '/category/cat-Gaming.webp' },
//     { _id: 4, description: '', name: 'Headphone', _base: '/', image: '/category/cat-Headphone.webp' },
//     { _id: 5, description: '', name: 'Powertool', _base: '/', image: '/category/cat-Powertool.webp' },
//     { _id: 6, description: '', name: 'Robot & Clean', _base: '/', image: '/category/cat-Robot-Clean.webp' },
//     { _id: 7, description: '', name: 'Smart & Watch', _base: '/', image: '/category/cat-Smart-Watch.webp' },
//     { _id: 8, description: '', name: 'Sport & Watch', _base: '/', image: '/category/cat-Sport-Watch.webp' },
//     { _id: 9, description: '', name: 'Tablet', _base: '/', image: '/category/cat-Tablet.webp' },
//     { _id: 10, description: '', name: 'Tv & Audio', _base: '/', image: '/category/cat-Tv-Audio.webp' },
//     { _id: 11, description: '', name: 'Call Phone', _base: '/', image: '/category/catPhone.webp' },
//     { _id: 12, description: '', name: 'Tv & Box', _base: '/', image: '/category/catTvBox.webp' },
// ];

// const BannerCategories = () => {
//     return (
//         <Carousel
//             responsive={responsive}
//             infinite
//             autoPlay
//             transitionDuration={1000}
//             className="flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative h-50"
//             customRightArrow={<CustomRightArrow />}
//             customLeftArrow={<CustomLeftArrow />}
//         >
//             {categories.map((item) => (
//                 <Link
//                     key={item._id}
//                     href={`/category/${item._base}`}
//                     className="flex items-center gap-x-2 p-1 border border-gray-100 mr-1 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
//                 >
//                     <Image
//                         src={item.image}
//                         alt={`${item.name} image`}
//                         className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <p className="text-sm font-semibold">{item.name}</p>
//                 </Link>
//             ))}
//         </Carousel>
//     );
// };

// export default BannerCategories;
