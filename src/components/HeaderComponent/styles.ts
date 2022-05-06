import styled from 'styled-components'

export const Wrapper = styled.main`
width: 100%;
`

export const Title = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
display: flex;
align-items: center;
color: #1F2937;
`
export const PageTitle = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1F2937;
`
export const CreateMeet = styled.div`
  width: 100%;
  margin-top:24px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 540px) {
    flex-direction: column;

  }
`

export const CreateButton = styled.button`
  background: #4F46E5;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
`

export const CheckButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;
  @media (max-width: 540px) {
    flex-direction: column;
    width:100%
  }
`

export const SelectsContent = styled.div`
  display: flex;
  @media (max-width: 540px) {
    width:100%;
    height:40px;
    margin-bottom:20px;
  }
`