import React from "react";
import BookCard from "@/comonents/shared/BookCard";
import { IBook } from "@/types/book.type";

const getBooksData = async () => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error){
    console.log("Error fethcing books data:", error);
    return [];
  }; 
};

const Books = async () => {
  const booksData = await getBooksData();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Explore Our Collection
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Featured Books
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Discover amazing stories, timeless classics, and exciting new
            books curated specially for you.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.map((book: IBook, ind:number) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Books;