import Categories from "@/components/categories-section/Categories";
import DiscountedBanner from "@/components/DiscountedBanner/DiscountedBanner";
import Hightlights from "@/components/hightlights-section/Hightlights";
import HomeBanner from "@/components/homebanner-section/HomeBanner";

export default function Home() {
  return (
   <main> 
    <HomeBanner/>
    <Hightlights/>
    <Categories/>
    <DiscountedBanner/>
   </main>
  );
}
/*
git add .
git commit -m "first commit"
git push -u origin main
*/
