'use client'
import React, { useState } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { IoClose, IoSearch } from 'react-icons/io5';
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { CategoryProps } from '@/type';

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const categories = [
  { _id:1, description:'', name: "Camera", _base:"/", image: "/category/cat-Camera.webp" },
  { _id:2, description:'', name: "Computer & Laptop", _base:"/", image: "/category/cat-Computer.webp" },
  { _id:3, description:'', name: "Gaming", _base:"/", image: "/category/cat-Gaming.webp" },
  { _id:4, description:'', name: "Headphone", _base:"/", image: "/category/cat-Headphone.webp" },
  { _id:5, description:'', name: "Powertool", _base:"/", image: "/category/cat-Powertool.webp" },
  { _id:6, description:'', name: "Robot & Clean", _base:"/", image: "/category/cat-Robot-Clean.webp" },
  { _id:7, description:'', name: "Smart & Watch", _base:"/", image: "/category/cat-Smart-Watch.webp" },
  { _id:8, description:'', name: "Sport & Watch", _base:"/", image: "/category/cat-Sport-Watch.webp" },
  { _id:9, description:'', name: "Tablet", _base:"/", image: "/category/cat-Tablet.webp" },
  { _id:10, description:'', name: "Tv & Audio", _base:"/", image: "/category/cat-Tv-Audio.webp" },
  { _id:11, description:'', name: "call Phone", _base:"/", image: "/category/catPhone.webp" },
  { _id:12, description:'', name: "Tv & Box", _base:"/", image: "/category/catTvBox.webp" },
];

export default function Header() {
  const [text, setText] = useState('');
  return (
    <div className='w-full bg-white border-b-1 shadow-sm md:sticky md:top-0 z-50'>
      <Container
        className='flex items-center justify-between'
      >
        {/* Logo */}
        <a href="">
          <Image
            src='/assets/logo.webp'
            width={150}
            height={150}
            alt='Logo'
          />
        </a>
        {/* Search */}
        <div className='hidden md:inline-flex max-w-3xl w-full relative'>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
            placeholder='Search'
            name='asdas'
            value={text}
          />
          {text ? (<IoClose
            onClick={() => setText('')}
            className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
          />) : (<IoSearch
            className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
          />)}
        </div>
        {/* MuneBar */}
        <div className='flex gap-x-4 items-center text-2xl' >
          <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          <div className='relative'>
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className='inline-flex items-center justify-center absolute -top-2 -right-1 text-[12px] bg-red-500 rounded-full w-4 h-4'>{0}</span>
          </div>
          <div className='relative'>
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
            <span className='inline-flex items-center justify-center absolute -top-2 -right-1 text-[12px] bg-red-500 rounded-full w-4 h-4'>{0}</span>
          </div>
        </div>
      </Container>
      <div className='bg-black w-full text-white '>
      <Container  className='py-2 max-w-4xl flex items-center justify-between gap-5 '>
        <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-400 hover:border-white py-1.5 px-3 font-semibold text-gray-300 hover:text-whiteText">
              Select Category <FaChevronDown className="text-base mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >  
        <MenuItems
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-black p-1 text-sm/6 text-gray-300 [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
              >
       {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      href={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-md"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
      </MenuItems>
      </Transition>
    </Menu>
        {bottomNavigation.map(({ title, link }) => (
            <Link
              href={link}
              key={title}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-white/90 hover:text-white duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
      </Container>
      </div>
    </div>
  )
}
