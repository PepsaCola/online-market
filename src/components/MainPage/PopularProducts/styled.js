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

  @media (max-width: 1024px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    min-height: auto;
  }
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    gap: 20px;
    z-index: 1;
    overflow-x: auto;
    align-items: stretch;
    max-width: 1280px;
    margin: 0 auto;
  }
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
  text-align: left;

  @media (max-width: 600px) {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
