import styled from 'styled-components'

const Container = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.h1``;
const Button = styled.button``;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image/>
            <Info>
                <Title>Features</Title>
                <Button>Get It</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;