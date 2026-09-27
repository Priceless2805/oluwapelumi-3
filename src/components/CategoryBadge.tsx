import React from 'react';

interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span className="text-xs uppercase tracking-wider font-semibold text-red-800">
      {category}
    </span>
  );
};
