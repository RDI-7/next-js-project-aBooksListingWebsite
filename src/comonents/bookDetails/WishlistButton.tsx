"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/book.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}:{book: IBook}) => {
    const {wishlist, setWishlist} = useContext(BooksContext)

    const handleWishlistBook = () => {
        setWishlist([...wishlist, book])
        toast.success(`You have wishlisted "${book.bookName}"`)
    }
    return (
        <button className="btn border-0 bg-emerald-600 px-6 text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg" 
        onClick={() => handleWishlistBook()}>
            Wishlist
        </button>
    );
};

export default WishlistButton;