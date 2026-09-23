import React from "react";
import BookCard from "@/comonents/shared/BookCard";
import { IBook } from "@/types/book.type";

const getBooksData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await res.json();

  return data;
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
          {booksData.slice(0,6).map((book: IBook, ind:number) => (
            <BookCard key={ind} book={book} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Books;