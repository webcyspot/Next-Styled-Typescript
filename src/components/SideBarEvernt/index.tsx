import * as S from './styles'

const SideBarEvernt = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>
    <S.Description>
        <S.EventDate>Today, 18:15</S.EventDate>
        <S.EventTitle>🍕Celebrate Team Lunch</S.EventTitle>
        <S.EventCatagory>Office: District 2 HQ </S.EventCatagory>
        <S.EventType>In Person</S.EventType>
    </S.Description>
    <S.NowEvent>
      <S.SideImg />
      <S.SideDetails>
          <S.EventDuration>Today, 17:00 - 18:15</S.EventDuration>
          <S.EventNowTitle>Fireside Chat: Meet ACME CEO Amy Miller</S.EventNowTitle>
          <S.EventNowCatagory>Office: District 2 HQ </S.EventNowCatagory>
          <S.EventNowType>In Person</S.EventNowType>
      </S.SideDetails>
    </S.NowEvent>
    

  </S.Wrapper>
)

export default SideBarEvernt
