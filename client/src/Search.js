import React from 'react';
import styled from 'styled-components'

function Search({searchQuery, setSearchQuery}) {
    return (
        <Wrapper>
            <Input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        </Wrapper>
    )
}

const Input = styled.input`
    width: 200px;
`;

const Wrapper = styled.div`
    margin-top: 10px;
`;

export default Search;