import React from 'react';
import { NavContainer, NavItems, NavItem, ArrowRight } from './styled';

export const StyledSpan = ({ categories, activeCategorySlug, onCategoryChange }) => {
  return (
    <NavContainer>
      <NavItems>
        {/* Кнопка "All" */}
        <NavItem active={activeCategorySlug === null} onClick={() => onCategoryChange(null)}>
          All
        </NavItem>

        {categories.map((category) => (
          <NavItem
            key={category._id}
            active={activeCategorySlug === category.slug}
            onClick={() => onCategoryChange(category.slug)}
          >
            {category.name}
          </NavItem>
        ))}
      </NavItems>
      <ArrowRight width={40} height={35} />
    </NavContainer>
  );
};
