import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import sliderImg1 from '../assets/shopifyimage.png'

    const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    `;

    const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left : ${(props)=> props.direction === "left" && "10px" };
    right : ${(props)=> props.direction === "right" && "10px" };
    cursor: pointer;
    opacity: 0.5;
    `;

    const Wrapper = styled.div`
        height: 100%;
    `;

    const Slide = styled.div`
        width: 100vw;
        height : 100vh;
        display: flex;
        align-items: center;
    `
    const ImgContainer = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    `
    
    const InfoContainer = styled.div`
        flex: 1;
        padding: 50px;
    `

    const Image = styled.img`
        height: 100%;
        width: ;
        object-fit: cover;
    `;

    const Title = styled.h1`
        font-size: 70px;
    `;

    const Desc = styled.p`
     margin: 50px 0px;
     font-size: 20px;
     font-weight: 500;
    `;

    const Button = styled.button`
    
    `;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={sliderImg1}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SELL</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;