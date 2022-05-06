import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #231651;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const SideImg = styled.img.attrs({
  src: '../../img/image.png'
})`
width: 267px;
height: 160px;
`
export const SideDetails = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`
