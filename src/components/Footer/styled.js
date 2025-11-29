import styled from 'styled-components';
import { ReactComponent as YouTube } from '../../img/youtube.svg';
import { ReactComponent as Twitter } from '../../img/twitter.svg';
import { ReactComponent as LinkedIn } from '../../img/Linkedin.svg';
import { ReactComponent as Instagram } from '../../img/Instagram.svg';

export const Container = styled.div`
  width: 100%;
  padding: 24px 84px;

  @media (max-width: 850px) {
    padding: 24px 20px;
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

  @media (max-width: 450px) {
    padding: 0;
    flex-direction: column;
  }
`;
export const Title = styled.h2`
  color: white;
  font-size: 64px;
  justify-self: left;

  @media (max-width: 450px) {
    font-size: 32px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ListTitle = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 400;
  width: 100%;
`;
export const ListItem = styled.li`
  color: white;
  font-size: 20px;
`;
export const IconList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  max-width: 124px;
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

  @media (max-width: 450px) {
    flex-wrap: nowrap;
    max-width: 400px;
    flex-direction: column;
  }
`;
export const Label = styled.label`
  width: 100%;
  color: white;
  font-size: 24px;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: white;
  color: #343434;
  font-size: 24px;
  padding: 16px 22px;

  @media (max-width: 450px) {
    padding: 8px;
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
`;
