import * as S from './styles'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CheckButtonType } from '../../global_types'
const CheckButton = (props: CheckButtonType) => {
  const {label, checked} = props
  return (
    <S.Wrapper>
      <S.ButtonContent checked={checked}>
        <S.CheckIconContent checked={checked}>
          <FontAwesomeIcon icon={faCheck} />
        </S.CheckIconContent>
        
        <S.Attending>{label}</S.Attending>
      </S.ButtonContent>
    </S.Wrapper>
    
  )
}

export default CheckButton
