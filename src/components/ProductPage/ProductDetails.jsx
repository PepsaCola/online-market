import { ProductDetails, TabButton, TabContent } from '../../pages/ProductPage/styled';
import { useState } from 'react';

const details = [
  {
    id: 'description',
    title: 'Description',
    content:
      'Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look. Made with premium materials for lasting comfort and style.',
  },
  {
    id: 'characteristics',
    title: 'Characteristics',
    content: [
      { name: 'Category', value: 'Shoes' },
      { name: 'Main Material', value: 'Patent Leather' },
      { name: 'Sole', value: 'Synthetic' },
      { name: 'Heel Type', value: 'Block Heel' },
      { name: 'Heel Height', value: '3 inches' },
      { name: 'Made in', value: 'Italy' },
    ],
  },
  {
    id: 'reviews',
    title: 'Reviews',
    content: [
      {
        id: 'r1',
        author: 'Jane D.',
        rating: 5,
        date: '2025-10-15',
        comment:
          'Absolutely stunning! Even better in person. Very comfortable for a heel of this height.',
      },
      {
        id: 'r2',
        author: 'Mark S.',
        rating: 4,
        date: '2025-10-12',
        comment:
          'Great shoes, very stylish. The color is a bit lighter than pictured, but still beautiful. Good quality.',
      },
      {
        id: 'r3',
        author: 'Emily K.',
        rating: 5,
        date: '2025-10-10',
        comment:
          'I wore these to a wedding and got so many compliments. They were comfortable all night!',
      },
    ],
  },
];

const ProductDetailsContainer = ({ singleProduct }) => {
  const [activeTab, setActiveTab] = useState(null);
  const activeDetail = details.find((detail) => detail.id === activeTab);

  return (
    <ProductDetails>
      <ul>
        {details.map((detail) => (
          <TabButton
            key={detail.id}
            onClick={() => setActiveTab(detail.id)}
            isActive={detail.id === activeTab}
          >
            {detail.title}
          </TabButton>
        ))}
      </ul>
      <TabContent>
        {activeDetail && (
          <li key={activeDetail.id}>
            {activeDetail.id === 'description' && (
              <p>{singleProduct.description || activeDetail.content}</p>
            )}
            {activeDetail.id === 'characteristics' && <p></p>}
            {activeDetail.id === 'reviews' && <p></p>}
          </li>
        )}
      </TabContent>
    </ProductDetails>
  );
};

export default ProductDetailsContainer;
