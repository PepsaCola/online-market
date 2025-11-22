import React, { useState } from 'react';
import { NavContainer, NavItems, NavItem, ArrowRight } from './styled';

export const StyledSpan = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Product', 'Clothes', 'Sport', 'Kids', 'Domestic', 'School'];

  return (
    <NavContainer>
      <NavItems>
        {categories.map((category) => (
          <NavItem
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </NavItem>
        ))}
      </NavItems>
      <ArrowRight width={40} height={35} />
    </NavContainer>
  );
};
