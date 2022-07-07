import styled from 'styled-components'
import {categories} from '../data.js'

const Container = styled.div`

`;

const Categories = () => {
    return (
        <Container>
            {
                categories.map()
            }
        </Container>
    );
};

export default Categories;