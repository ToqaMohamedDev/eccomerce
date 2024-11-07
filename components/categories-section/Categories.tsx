import { CategoryProps } from "../../type";
import Container from "../Container";
import Title from "../Title";
import Link from "next/link";

const Categories = () => {
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
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Popular categories" />
          <Link
            href={"/category/tvAndAudio"}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{" "}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
          <Link
            href={`/category/${item?._base}`}
            key={item?._id}
            className="w-full h-auto relative group overflow-hidden"
          >
            <img
              src={item?.image}
              alt="categoryImage"
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
              <p className="text-sm md:text-base font-bold">{item?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
