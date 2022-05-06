import React, { useEffect, useState } from 'react';
import * as S from './styles'
import EventContent from 'components/EventContent'

const MainContentComponent = ({
  title = 'Today, Jan 20',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
  
}) => (
  <S.Wrapper>
   
    <S.EventSection>
      <S.Title>{title}</S.Title>
      <S.Hrline></S.Hrline>
      
     
        <EventContent />
    </S.EventSection>
    
  </S.Wrapper>
)

export default MainContentComponent
