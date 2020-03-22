import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: inherit;

    transition: all 1s ease-in-out;

    user-select: none;
    top: 0;
    right: 0;
    z-index: 999;

    .burger {
        float: right;
    }
    .content {
        width: 100%;
        height: 100%;
        
        &.default {
            transform: scale(0);
        }
        &.collapse {
            transform: scale(1);
        }

        transition: all 1s ease-in-out;
        .menu {
            width: 100%;
            height: 100%;

            margin-top: 15%;
            a {
                text-decoration: none;
            }
            .item {
                cursor: pointer;
                .text {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                height: 12.5%;
                margin-left: 15%;
                margin-right: 15%;
                margin-bottom: 1%;

                background-color: rgba(0,0,0,.02);
                border: 2px solid grey;

                color: #5a5a5a;
                font-size: 2rem;

                transition: 
                    opacity 1s ease-in-out,
                    transform 0.3s ease-in-out, 
                    background-color .8s ease-in-out, 
                    margin-top 0.3s ease-in-out,
                    margin-bottom 0.3s ease-in-out,
                    color 0.3s ease-in-out;

                :hover {
                    transform: scale(1.05);
                    background-color: rgba(0,0,0,.2);
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            }
            
        }
    }
`;