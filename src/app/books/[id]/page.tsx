import ReadButton from '@/comonents/bookDetails/ReadButton';
import WishlistButton from '@/comonents/bookDetails/WishlistButton';
import { IBook } from '@/types/book.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPage {
    params: Promise<{
        id: string
    }>;
}

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

const BookDetailsPage = async ({ params }: IBookDetailsPage) => {
    const { id } = await params;
    const booksData = await getBooksData()
    const book = booksData.find((book: IBook) => String(book.bookId) === String(id)) as IBook
    return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="card lg:card-side overflow-hidden border border-slate-200 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl">

        {/* Book Image */}
        <figure className="relative bg-gradient-to-br from-emerald-50 via-slate-50 to-green-100 p-6 lg:w-2/5 lg:p-10">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={book.image}
              alt={book.bookName}
              width={500}
              height={700}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />

            {/* Category Badge */}
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                {book.category}
              </span>
            </div>
          </div>
        </figure>

        {/* Details */}
        <div className="card-body justify-center p-6 md:p-8 lg:w-3/5 lg:p-10">

          {/* Category + Rating */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
              {book.category}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
              <span className="text-yellow-500">★</span>
              {book.rating} / 5
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-2 text-lg text-slate-500">
            by{" "}
            <span className="font-semibold text-slate-700">
              {book.author}
            </span>
          </p>

          {/* Description */}
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              About this book
            </h3>

            <p className="leading-7 text-slate-600">
              {book.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book Information */}
          <div className="mt-7 grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-5 md:grid-cols-4">

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Pages
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Published
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Publisher
              </p>
              <p className="mt-1 truncate font-bold text-slate-800">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Rating
              </p>
              <p className="mt-1 font-bold text-slate-800">
                {book.rating} ★
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="card-actions mt-7 flex flex-wrap gap-3">
            <ReadButton book={book}></ReadButton>
           

            <WishlistButton book={book}></WishlistButton>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;