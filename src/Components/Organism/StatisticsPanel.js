import React from 'react';
import styled from 'styled-components';

import { FlexColumn } from '../../Theme/mixins';

const Container = styled.div`
    position: absolute;
    ${FlexColumn};
    border: 1px solid black;
    border-radius: .5rem;
`

const StatisticsPanel = () => {
    return (
        <Container>
            
        </Container>
    )
}

export default StatisticsPanel;
