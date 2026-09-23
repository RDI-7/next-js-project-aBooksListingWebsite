import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-sm">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4">
          <div className="flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <span className="text-yellow-400">★</span>
            {book.rating}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          by <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Review */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">

          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Publisher</p>
            <p className="mt-1 truncate text-sm font-semibold text-slate-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Rating</p>
            <p className="mt-1 text-sm font-semibold text-slate-700">
              {book.rating} / 5
            </p>
          </div>

        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-md">
            View Details →
          </button>
        </Link>

      </div>
    </div>
  );
};

export default BookCard;