import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .images {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
			background-position: center; /* Center the image */
  			background-repeat: no-repeat; /* Do not repeat the image */
  			background-size: cover; 
        }
        .arrow {
            position: relative;
            top: -60%;
            opacity: 0.5;
            user-select: none;
            outline-style: none;
            &.left {
                
            }
            &.right {
                float: right;
            }

            :hover {
                background-color: rgba(0,0,0, 0.6);
            }

            cursor: pointer;
        }
    }
    .dots {
        position: relative;
        display: flex;
        justify-content: center;
        top: -30px;
    }
`;