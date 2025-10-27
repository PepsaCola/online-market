import {
  Container,
  InformationTitle,
  EditInfo,
  Photo,
  CameraIcon,
  Buttons,
  EditButton,
  DeleteButton,
  SignUpInfo,
  LeftInfo,
  RightInfo,
  Input,
  Label,
} from './styled';
import React from 'react';
import { ProductsUser } from '../../components/ProductsUser/ProductsUser';

export const User = () => {
  return (
    <>
      <Container>
        <InformationTitle>Account Information</InformationTitle>

        <EditInfo>
          <Photo>
            <CameraIcon />
          </Photo>
          <Buttons>
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </Buttons>
        </EditInfo>

        <SignUpInfo>
          <LeftInfo>
            <Label>
              First Name
              <Input placeholder={'Jane'} />
            </Label>
            <Label>
              Email
              <Input placeholder={'myemail@example.com'} />
            </Label>
          </LeftInfo>
          <RightInfo>
            <Label>
              Last Name
              <Input placeholder={'Smith'} />
            </Label>
            <Label>
              Phone Number
              <Input placeholder={'+38 (050) 25 55 555'} />
            </Label>
          </RightInfo>
        </SignUpInfo>

        <InformationTitle>Order History</InformationTitle>

        <ProductsUser />
      </Container>
    </>
  );
};
