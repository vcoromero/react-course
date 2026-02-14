import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gif.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['Hollow Knigth'])

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    const handleSearch = (query: string = '') => {
        query = query.toLocaleLowerCase().trim()
        if (query.length === 0) return

        if (previousTerms.includes(query)) return

        setPreviousTerms([query, ...previousTerms.splice(0, 7)])


    }

    return (
        <>
            { /* Header */}
            <CustomHeader title="Gifs searcher" description="Find the best gifs for your search" />

            { /* Search input */}
            <SearchBar placeholder="Search what you want" onQuery={handleSearch} />

            {/* Previous searches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}