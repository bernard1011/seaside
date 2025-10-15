import Button from "./Button";
import { ArrowRight } from "lucide-react";
import General from "../assets/general.jpeg";
import Top from "../assets/top.jpeg";
import Bottom from "../assets/bottom.jpeg";

const Welcome = () => {
  return (
    <div className="bg-blue-50">
    <section className="xl:px-10 xl:max-w-[1400px] xl:mx-auto w-full pt-16 px-3 pb-12  lg:flex lg:justify-center lg:items-center">
      <div className="flex flex-col gap-5 lg:w-1/2 lg:text-lg xl:text-xl">
        <h3 className="font-bold text-blue-500 uppercase">
          Welcome to MareSereno
        </h3>
        <h2 className="text-3xl font-dm lg:text-5xl">Luxury Seaside Accommodations</h2>
        <p className="text-gray-600">
          Nestled on the pristine Mediterranean coastline, MareSereno offers an
          exquisite collection of luxury apartments and hotel rooms. Our
          beachfront accommodations combine elegant design with modern comfort,
          creating the perfect setting for an unforgettable seaside getaway.
        </p>
        <p className="text-gray-600">
          Whether you're seeking a romantic escape, a family vacation, or a
          peaceful retreat, our diverse range of accommodations caters to every
          preference and need. Each space is thoughtfully designed to provide
          panoramic sea views and direct beach access.
        </p>
        <Button
          name={"Learn More"}
          width={"w-fit"}
          iconT={<ArrowRight size={18} />}
        />
      </div>
      <div className="relative pt-12 mb-24 flex justify-center">
        <img
          src={Top}
          alt="top"
          className="absolute w-2/4 md:w-2/6 rounded-2xl top-7 -right-3 md:-right-0 xl:right-5 shadow-xl"
        />
        <img
          src={General}
          alt="general"
          className="rounded-2xl md:w-3/4 xl:w-3/4"
        />
        <img
          src={Bottom}
          alt="bottom"
          className="absolute w-3/4 md:w-3/6 rounded-2xl -bottom-16 -left-3 md:-left-0 xl:left-5 shadow-xl"
        />
      </div>
    </section>
    </div>
  );
};

export default Welcome;
