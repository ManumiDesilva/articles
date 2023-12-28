import React, { useState } from 'react';

function Articles({ articles }) {
    const [sortedArticles, setSortedArticles] = useState(articles);

    const sortByUpvotes = () => {
        const sortedByUpvotes = [...articles].sort((a, b) => b.upvotes - a.upvotes);
        setSortedArticles(sortedByUpvotes);
    };

    const sortByDate = () => {
        const sortedByDate = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
        setSortedArticles(sortedByDate);
    };

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Upvotes</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedArticles.map((article, index) => (
                        <tr data-testid={`article-${index}`} key={`article-${index}`}>
                            <td data-testid={`article-title-${index}`}>{article.title}</td>
                            <td data-testid={`article-upvotes-${index}`}>{article.upvotes}</td>
                            <td data-testid={`article-date-${index}`}>{article.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Articles;
