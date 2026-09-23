"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book: IBook}) => {
    const {readBooks, setReadBooks} = useContext(BooksContext)

    const handleReadBook = () => {
        setReadBooks([...readBooks, book])
        toast.success(`You have read "${book.bookName}"`)
    }
    return (
        <button className="btn border-0 bg-emerald-600 px-6 text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg" 
        onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;