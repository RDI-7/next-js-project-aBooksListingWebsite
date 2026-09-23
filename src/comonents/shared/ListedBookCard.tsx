import { IBook } from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface BookCardProps {
    book: IBook;
}

const ListedBookCard = ({ book }: BookCardProps) => {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">

            {/* Book Image */}
            <div className="relative shrink-0 bg-slate-100 sm:w-52">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={300}
                    height={420}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                    {book.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 md:p-6">

                {/* Title + Rating */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                            {book.bookName}
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            By{" "}
                            <span className="font-semibold text-slate-700">
                                {book.author}
                            </span>
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-700">
                        <span className="text-yellow-500">★</span>
                        {book.rating}
                    </div>
                </div>

                {/* Review */}
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                    {book.review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Information */}
                <div className="mt-5 grid grid-cols-2 gap-4 border-y border-slate-100 py-4 sm:grid-cols-4">

                    <div>
                        <p className="text-xs text-slate-400">Pages</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            {book.totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Published</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Publisher</p>
                        <p className="mt-1 truncate font-semibold text-slate-700">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-slate-400">Category</p>
                        <p className="mt-1 font-semibold text-slate-700">
                            {book.category}
                        </p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

                    <p className="text-sm text-slate-400">
                        Published in {book.yearOfPublishing}
                    </p>

                    <div className="flex gap-2">
                        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
                            Wishlist ♡
                        </button>

                        <Link href={`/books/${book.bookId}`}>
                            <button className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700" >
                                View Details →
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;

