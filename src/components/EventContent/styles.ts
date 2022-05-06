import styled from 'styled-components'


export const Wrapper = styled.main`
  width:100%;
  display:flex;
  height: 136px;
  padding: 16px;
  margin-top:16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  gap:16px;
  @media (max-width: 540px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;

  }
  @media (max-width: 1024px) {
  }

`

export const Title = styled.h1`
  font-size: 2.5rem;
`
export const EventImg = styled.img.attrs({
    src: '../../img/image.png'
  })`

  width: 169px;
  height: 104px;
  @media (max-width: 540px) {
    width:267px;
    height:auto;
    justify-content: center;
    align-items: center;

  }
`
export const EventDescription = styled.div`
 width:100%;
 display:flex;
 justify-content: space-between;
 @media (max-width: 540px) {
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
 
`

export const EventConButton = styled.div`
  width: 108px;
  height: 32px;
  display:flex;
  padding-left:16px;
  background: #ECFDF5;
  justify-content: center;
  align-items: center;
  color: #059669;
 
`

export const EventConDetails = styled.div`
 width:80%;
 display:flex;
 flex-direction: column;
`
export const EventDate = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6366F1;
  margin: 2px 0px;
`
export const EventTodayDate = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6B7280;
`
export const EventTitle = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
color: #000000;
margin: 2px 0px;
`
export const EventCatagory = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6B7280;
  margin: 2px 0px;
`
export const EventDetails = styled.div`
 width:100%;
 display:flex;
 margin: 2px 0px;
`
export const EventType = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #059669;
`
export const EventDuration = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6B7280;
  margin-left:18px
`
export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
export const CheckIconContent = styled.div`
  padding-right : 6px;
  width:20px;
  dispaly:flex;
  color: #059669;
`
export const Attending = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #059669;
`
export const AvatarBoder = styled.div`
  margin-left:-8px;
  background: #FFFFFF;
  border-radius: 8px;
`
