import {
  Btn,
  Container,
  Form,
  IconList,
  Input,
  InstagramIcon,
  Label,
  LinkedInIcon,
  List,
  ListItem,
  ListTitle,
  Title,
  TwitterIcon,
  Wrap,
  YouTubeIcon,
} from './styled';

export const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrap>
        <Title>MARKET</Title>
        <List>
          <ListTitle>Support</ListTitle>
          <ListItem>FAQ</ListItem>
          <ListItem>Shipping</ListItem>
          <ListItem>Return</ListItem>
          <ListItem>Contact US</ListItem>
        </List>
        <List>
          <ListTitle>Company</ListTitle>
          <ListItem>About US</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
        <IconList>
          <ListTitle>Connect</ListTitle>
          <YouTubeIcon width={48} height={48} />
          <TwitterIcon width={48} height={48} />
          <LinkedInIcon width={48} height={48} />
          <InstagramIcon width={48} height={48} />
        </IconList>
        <Form onSubmit={onSubmit}>
          <Label htmlFor="email">Support Us</Label>
          <Input id="email" type="email" placeholder={'Email...'} />
          <Btn type="submit">Sent</Btn>
        </Form>
      </Wrap>
    </Container>
  );
};
