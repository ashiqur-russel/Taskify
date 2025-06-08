"use client";

import Header from '@/components/Header';
import { useSearchQuery } from '@/state/api';
import React, { useState } from 'react'

type Props = {}

const Search = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const {
        data: searchResults,
        isLoading,
        isError,
    } = useSearchQuery(searchTerm, {
        skip: searchTerm.length < 3,
    });

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="p-8">
            <Header name="Search" />
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-1/2 rounded border p-3 shadow"
                    onChange={handleSearch}
                />
            </div>
            <div className="p-5">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error occurred while fetching search results.</p>}
                {!isLoading && !isError && searchResults && (
                    <div>

                    </div>
                )}
            </div>
        </div>
    );

}

export default Search;