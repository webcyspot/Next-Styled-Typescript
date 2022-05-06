import styled from 'styled-components'

export const Wrapper = styled.main`
  padding-top:34px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`
export const EventSection  = styled.div`
  width:849px
  @media (max-width: 768px) {
    flex-direction: column;
    width:100%
  }
  @media (max-width: 992px) {
    flex-direction: column;
    width:100%
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    width:100%
  }
  
`
export const EventContent  = styled.div`
  width:100%
  display: flex;
  height: 136px;
  // background:red;
  padding: 16px;
  margin:16px
`

export const Title = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 26px;
/* identical to box height, or 144% */

display: flex;
align-items: center;

color: #1F2937;
`

export const Description = styled.h2`

  font-size: 2rem;
  font-weight: 400;
`

export const Hrline = styled.h2`
  background: #D1D5DB;
  width: 849px;
  height: 1px;
  margin-top:9px;
  @media (max-width: 540px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
   
  }

`
