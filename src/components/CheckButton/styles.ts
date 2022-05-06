import styled from 'styled-components'

export const Wrapper = styled.div`
@media (max-width: 540px) {
  display:flex;
  flex-direction: column;
  width:100%;

}
`

export const ButtonContent = styled.button<{
  checked: boolean;
}>`
  display: flex;
  background: #F5F3FF;
  border: 1px solid #E5E7EB;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 8px 16px 8px 12px;
  Height:36px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  gap:6px;
  color: ${(props) => props.checked === true ? '#4F46E5' : '#1F2937'}
  
`

export const CheckIconContent = styled.div<{
  checked: boolean;
}>`
  display:flex;
  justify-content: center;
  align-items: center;
  width:15px;
  display: ${(props) => props.checked === true ? 'block' : 'none'}
`
export const Attending = styled.div`
 
`