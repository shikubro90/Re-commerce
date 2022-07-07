import styled from 'styled-components'
import {categories} from '../data.js'
import CategoryItem from './CategoryItem';

const Container = styled.div`

`;

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item=>(
                    <CategoryItem item={}/>
                ))
            }
        </Container>
    );
};

export default Categories;