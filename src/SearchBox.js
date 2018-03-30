import React from 'react';

const SearchBox = ({ onChange, input }) => {
  return (
    <div className="pa2 pb3">
      <input
        type="search"
        placeholder="Find a Robo"
        className="pa3 ba b--yellow bg-light-red"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
