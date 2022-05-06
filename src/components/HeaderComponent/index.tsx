import React from 'react'
import * as S from './styles'
import CheckButton from 'components/CheckButton'
import Select from 'react-select';
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];
const HeaderComponent = ({
  title = 'Events',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.CreateMeet>
      <S.SelectsContent>
          {/* <Select
            value="Data"
            options={options}
          /> */}
          <select className="form-select" id='select_data' aria-label='Dates select' style={{width:"169px"}} defaultValue={"0"}>
            <option value={"0"}>Dates</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
          <select className="form-select" id='select_workplace'aria-label='Workplaces select' style={{width:"291px"}} defaultValue={"0"}>
            <option value={"0"}>Workplaces</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
          
        </S.SelectsContent>
        <S.CreateButton>Create Meetup!</S.CreateButton>
    </S.CreateMeet>
    <S.CheckButtonGroup>
        <CheckButton label={'Events'} checked={true} />
        <CheckButton label={'Meetups'} checked={false} />
        <CheckButton label={'Online'} checked={true} />
        <CheckButton label={'In Person'} checked={true} />
    </S.CheckButtonGroup>

    
  </S.Wrapper>
)

export default HeaderComponent
