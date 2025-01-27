import React from "react";

export function Filters({ categories, onFilter, activeCategory }) {
  return (
    <div className="filters">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className={category === activeCategory ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
