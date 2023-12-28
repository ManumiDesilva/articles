import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
    const [currentArticles, setCurrentArticles] = useState(articles);

    const handleMostUpvoted = () => {
        const sortedByUpvotes = [...currentArticles].sort((a, b) => b.upvotes - a.upvotes);
        setCurrentArticles(sortedByUpvotes);
    };

    const handleMostRecent = () => {
        const sortedByDate = [...currentArticles].sort((a, b) => new Date(b.date) - new Date(a.date));
        setCurrentArticles(sortedByDate);
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handleMostUpvoted}>
                    Most Upvoted
                </button>
                <button data-testid="most-recent-link" className="small" onClick={handleMostRecent}>
                    Most Recent
                </button>
            </div>
            <Articles articles={currentArticles} />
        </div>
    );
}

export default App;

