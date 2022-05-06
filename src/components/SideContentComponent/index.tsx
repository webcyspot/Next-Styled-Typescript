import * as S from './styles'
import SideBarEvernt from 'components/SideBarEvernt'
const SideContentComponent = ({
  title = 'Your Next events',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>

    <S.SideBarTitle>{title}</S.SideBarTitle>
    <SideBarEvernt />

  </S.Wrapper>
)

export default SideContentComponent
