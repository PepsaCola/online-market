import styled from 'styled-components';
import { ReactComponent as YouTube } from '../../img/youtube.svg';
import { ReactComponent as Twitter } from '../../img/twitter.svg';
import { ReactComponent as LinkedIn } from '../../img/Linkedin.svg';
import { ReactComponent as Instagram } from '../../img/Instagram.svg';

export const Container = styled.div`
  width: 100%;
  padding: 24px 84px;

  @media (max-width: 1024px) {
    padding: 24px 40px;
  }

  @media (max-width: 600px) {
    padding: 24px 16px;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  background-color: #1f2937;
  padding: 64px 100px 64px 52px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    padding: 40px 30px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 64px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ListTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 400;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ListItem = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  max-width: 124px;

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const YouTubeIcon = styled(YouTube)`
  cursor: pointer;
`;
export const TwitterIcon = styled(Twitter)`
  cursor: pointer;
`;
export const LinkedInIcon = styled(LinkedIn)`
  cursor: pointer;
`;
export const InstagramIcon = styled(Instagram)`
  cursor: pointer;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Label = styled.label`
  width: 100%;
  color: white;
  font-size: 24px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: white;
  color: #343434;
  font-size: 24px;
  padding: 16px 22px;
  flex: 1;
  min-width: 200px;

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const Btn = styled.button`
  border: none;
  background-color: #4a6cf7;
  padding: 18px 57px;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background-color: #3a5bd9;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 14px;
    font-size: 18px;
  }
`;
