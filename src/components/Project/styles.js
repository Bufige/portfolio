import styled from 'styled-components';


export const Container = styled.div`
    height: 220px;
    background-color: white;
    
    cursor: pointer;
    user-select: none;
    .bar {
        display: flex;
        position: relative;
        background-color: #ddd;
        width: 100%;
        height: 24px;
        color: #6a6a6a;
        h2 {
            font-size: 1.1em;
        }
        .dots {
            position: absolute;
        }
        .title {
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

    .content {
        top: 0;
        left: 0;
        height: calc(100% - 24px);
        background-image: url(${props => props.mainImage});
        background-position: center center;
        
        background-repeat: no-repeat;
        background-size: 100% 100%;

        transition: all 0.3s ease-in;
        :hover {
            background-image: url(${props => props.overlayImage});

            .overlay {
                opacity: 1;
                transform: scale(1);
            }
        }
        .overlay {
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.3);
            opacity: 0;
            transform: scale(0);

            transition: 
                opacity .8s ease-in-out,
                transform .6s ease-in-out
            ;

            .tags {
                padding-top: 30px;
                padding-left: 20px;
                * { 
                    margin: 0 8px 8px 8px;
                }
            }
        }
    }
`;