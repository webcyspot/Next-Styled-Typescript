import styled from 'styled-components'

export const Wrapper = styled.main`
  
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.div`
  margin-top:17px;
  padding:16px;
  background: #FFFFFF;
  width: 265px;
  height: 120px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  width:100%;
`

export const SideImg = styled.img.attrs({
  src: '../../img/Cover.png'
})`
width: 267px;
height: 160px;
`
export const EventDate = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Light / Grey */

  color: #6B7280;
`


export const EventTitle = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  
  display: flex;
  align-items: center;

  /* Gray / gray-10 */

  color: #000000;
`
export const EventCatagory = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Light / Grey */

  color: #6B7280;
`
export const EventDetails = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
export const EventType = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  display: flex;
  align-items: center;

  /* System / Success / 4 */

  color: #059669;
`
export const EventDuration = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Light / Grey */

  color: #6B7280;
`
export const EventNowTitle = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* or 150% */

display: flex;
align-items: center;
margin: 8px 0px;
color: #000000;
text-align: initial;
`
export const EventNowCatagory = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
display: flex;
margin: 8px 0px;

color: #6B7280;
`
export const EventNowType = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
/* identical to box height, or 114% */

display: flex;
align-items: center;
margin: 8px 0px;

color: #059669;
`
export const SideDetails = styled.div`
  margin: 16px;
`
export const NowEvent = styled.div`
border: 1px solid #E5E7EB;
border-radius: 8px;
margin-top:17px;
width:100%;
`
