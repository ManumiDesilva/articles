import React, { useState } from 'react';

function Articles({ articles }) {
  const [sortedBy, setSortedBy] = useState('upvotes'); // State to track sorting type

  // Function to sort articles based on upvotes or date
  const sortArticles = (type) => {
    setSortedBy(type);
  };

  // Sort articles based on the chosen criteria
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortedBy === 'upvotes') {
      return b.upvotes - a.upvotes; // Sort by upvotes in descending order
    } else if (sortedBy === 'date') {
      return new Date(b.date) - new Date(a.date); // Sort by date in descending order
    }
    return 0;
  });

  return (
    <div className="card w-50 mx-auto">
      <div className="btn-group" role="group">
        {/* Buttons to sort articles */}
        <button
          onClick={() => sortArticles('upvotes')}
          data-testid="most-upvoted-link"
        >
          Most Upvoted
        </button>
        <button
          onClick={() => sortArticles('date')}
          data-testid="most-recent-link"
        >
          Most Recent
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Render articles dynamically */}
          {sortedArticles.map((article, index) => (
            <tr key={`article-${index}`} data-testid="article">
              <td data-testid="article-title">{article.title}</td>
              <td data-testid="article-upvotes">{article.upvotes}</td>
              <td data-testid="article-date">{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
