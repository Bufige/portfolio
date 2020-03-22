import styled from 'styled-components';

export const Container = styled.i`
    height: ${props => props.height || '12px'};
    width: ${props => props.width || '12px'};
    display: inline-block;
    background-color: ${props => props.color};
    border-radius: 50%;
    margin-left: 5px;
    margin-top: 5px;

    &.active {
        transform: scale(1.3);
        opacity: 0.7;
    }
`;