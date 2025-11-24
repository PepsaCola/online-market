export const getOptionsForProduct = (product) => {
  if (!product || !product.category) return [];

  const categoryName = (
    product.category.name ||
    product.category.slug ||
    product.category
  ).toLowerCase();

  switch (categoryName) {
    case 'clothing':
    case 'sports':
      return [
        { type: 'Color', variants: ['Black', 'White', 'Blue', 'Grey'] },
        { type: 'Size', variants: ['XS', 'S', 'M', 'L', 'XL'] },
      ];

    case 'electronics':
    case 'gadgets':
      return [
        { type: 'Color', variants: ['Black', 'Silver', 'Gold'] },
        { type: 'Memory', variants: ['64GB', '128GB', '256GB'] }, // Приклад
      ];

    case 'beauty':
      return [{ type: 'Volume', variants: ['30ml', '50ml', '100ml'] }];

    case 'home decor':
    case 'kitchen':
    case 'accessories':
    case 'toys':
      return [
        { type: 'Color', variants: ['Standard', 'Special Edition'] }, // Або пустий масив, якщо опцій не треба
      ];

    case 'books':
      return [{ type: 'Format', variants: ['Hardcover', 'Paperback'] }];

    default:
      return [];
  }
};
