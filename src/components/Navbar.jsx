import { Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
  padding  : 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

    const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
    `;
    const Center = styled.div`
        flex: 1;
        text-align: center;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
    `;
    const Language = styled.div`
        font-size: 14px;
        cursor: pointer;
    `;
    const SearchContainer = styled.div`
        border  : 0.5px solid lightgray;
        display: flex;
        margin-left: 20px;
        padding : 5px;
        align-items: center;
    `;
    const Input = styled.input`
        border : none ;
        outline: none;
    `;
    const Logo = styled.h1`
      font-weight: bold;
    `;

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
    `;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color : "gray", fontSize : 16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>RE-COMMERCE</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sing In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;