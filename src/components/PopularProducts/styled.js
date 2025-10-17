import styled from 'styled-components';

export const ShowcaseSection = styled.section`
  width: 100%;
  min-height: 611px;
  position: relative;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  padding: 24px 84px;
  box-sizing: border-box;
`;

export const CardsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;

export const ShowcaseBackground = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: rgba(227, 237, 253, 0.7);
  border-radius: 11px;
  z-index: 0;
`;

export const SectionTitle = styled.h2`
  color: #334155;
  font-size: 32px;
  font-weight: 500;
  word-wrap: break-word;
  margin-bottom: 30px;
  z-index: 1;
  margin-top: 0;
`;
