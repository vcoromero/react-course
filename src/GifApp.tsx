import { mockGifs } from "./mock-data/gif.mock,"

export const GifApp = () => {
    return (
        <>
            { /* Header */}
            <div className="content-center">
                <h1> Gifs searcher</h1>
                <p>Find the best gifs for your search</p>
            </div>

            { /* Search input */}
            <div className="search-container">
                <input type="text" placeholder="Search gifs" />
                <button>Search</button>
            </div>

            {/* Previous searches */}
            <div className="previous-searches">
                <h2>Previous searches</h2>
                <ul className="previous-searches-list">
                    <li>Hollow Knight</li>
                    <li>Silksong</li>
                    <li>Hades</li>
                </ul>
            </div >

            {/* Gifs */}
            <div className="gifs-container">
                {mockGifs.map((gif) => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height}(1.5mb)</p>
                    </div>
                ))}
            </div>
        </>
    )
}