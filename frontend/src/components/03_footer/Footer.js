import { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  } from "./FooterStyle"

const Footer = () => {
    return (
        <Wrapper>
            <TopBlock>
                <TextBlock>
                    <Heading>OUR CONTACTS</Heading>
                    <BodyText>07706204681</BodyText>
                    <LinkText to="#">contact@teachlearn.co.uk</LinkText>
                </TextBlock>
                <TextBlock>
                    <Heading>USEFUL LINKS</Heading>
                    <LinkText to="#">Oxford English</LinkText>
                    <LinkText to="#">Cambridge English</LinkText>
                    <LinkText to="#">Grammar and Style</LinkText>
                </TextBlock>
                <TextBlock>
                    <Heading>ABOUT</Heading>
                    <LinkText to="#">About Us</LinkText>
                    <LinkText>Send a Message</LinkText>
                </TextBlock>
                <TextBlock>
                    <Heading>SOCIAL MEDIA</Heading>
                    <Instagram />
                    <X />
                    <Facebook />
                </TextBlock>
            </TopBlock>
            <BottomBlock>
                <TeachLearn to="#">TeachLearn.co.uk</TeachLearn>
            </BottomBlock>
        </Wrapper>
    )
}

export default Footer