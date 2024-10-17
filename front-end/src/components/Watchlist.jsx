import React from 'react';

const Watchlist = ({ watchlist, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{watchlist.title}</h3>
      <p>{watchlist.description}</p>
      <button onClick={() => onEdit(watchlist)}>Edit</button>
      <button onClick={() => onDelete(watchlist._id)}>Delete</button>
      {/* Add functionality to display and manage movies in the watchlist */}
    </div>
  );
};

export default Watchlist;