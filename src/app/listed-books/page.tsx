"use client";
import BookCard from '@/comonents/shared/BookCard';
import ListedBookCard from '@/comonents/shared/ListedBookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext, useState } from 'react';

const ListedBooksPage = () => {
    const { readBooks, wishlist } = useContext(BooksContext);
    const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating")

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if(sortBy === "rating"){
            sortedBooks.sort((a,b) => b.rating - a.rating);
        } else if(sortBy === "pages"){
            sortedBooks.sort((a,b) => b.totalPages - a.totalPages);
        } else if(sortBy === "year"){
            sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
        }

        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks)
    const sortedWhislist = sortBooks(wishlist)

    console.log(readBooks, "readBooks");

    return (
        <div className='container mx-auto py-[20px]'>
            <h2 className='my-4 bg-amber-100 rounded-3xl py-16 font-bold text-4xl
            text-center'> Listed Books</h2>

            <div className='text-center'>
                <select 
                defaultValue="Pick a Runtime" 
                className="select select-success"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
                >
                    <option disabled={true}>Sort by</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"pages"}>Number of pages</option>
                    <option value={"year"}>Publisher year</option>
                </select>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.length > 0 ? sortedReadBooks.map((book: IBook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }) : (
                            <p className='text-center text-lg font-semibold'>
                                No read books found
                            </p>
                        )
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWhislist.length > 0 ? sortedWhislist.map((book: IBook) => {
                            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                        }) : (
                            <p className='text-center text-lg font-semibold'>
                                No wishlist books found
                            </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;