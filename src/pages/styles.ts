import styled from 'styled-components';

export const Content = styled.div`
  width: 1140px;
  height: 100%;
  padding-top: 40px;
  justify-content: center;
  margin:auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 40px;
    justify-content: center;
    margin:30px;
  }
 
 


`;

export const PageContainer = styled.div`
  width:100%;
  display:flex;
  gap:25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }


`