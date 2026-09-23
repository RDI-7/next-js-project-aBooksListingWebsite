import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 shadow-sm md:grid-cols-2 md:p-10 lg:p-14">

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Discover Your Next Read
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Books to freshen up{" "}
              <span className="text-emerald-600">
                your bookshelf
              </span>
            </h1>

            <p className="max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Explore amazing books, discover new stories, and find your next
              favorite read—all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-emerald-700 hover:shadow-lg">
                Explore Books →
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:border-emerald-500 hover:text-emerald-600">
                Learn More
              </button>
            </div>

            {/* Small stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Books</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-500">Categories</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900">4.8★</p>
                <p className="text-sm text-slate-500">Rating</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={bannerImg}
                alt="Books on a bookshelf"
                className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg md:-left-6">
              <p className="text-sm font-medium text-slate-500">
                Find your next
              </p>
              <p className="font-bold text-slate-900">
                Favorite Book 📚
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;