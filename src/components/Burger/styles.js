import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;
    .line {
        width: 42px;
        height: 2px;
        margin: 8px;
        background-color: #7a7a7a;
        transition: all 0.3s ease-in-out;

        &.collapse {
            transition: all 0.3s ease-in-out;
            :nth-child(1) {
                transform: rotate(45deg);
                transform-origin: 10% 10%;
            }
            :nth-child(2) {
                opacity: 0;
            }
            :nth-child(3) {
                transform: rotate(-45deg);
                transform-origin: 17% 90%;
            }
        }
    }

    :hover {
        .line {
            margin-bottom: 12px;
        }
        .collapse {
            margin-bottom: 8px;
        }
    }
`;