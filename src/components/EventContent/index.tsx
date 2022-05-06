import * as Style from './styles'
import  EventJsondata from '../../JSON/Event.json'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AvatarGroup from 'react-avatar-group';
import StackedAvatar from './Statusavatar'
// import Avatar from "react-avatar";


const EventContent = () => {

  const elements = EventJsondata.map(item => {
    if(item.image){
      return (
        <Style.Wrapper key={item.title}>
        <Style.EventImg/>
        <Style.EventDescription>
          <Style.EventConDetails>
            <Style.EventDate>{item.date}</Style.EventDate>
            <Style.EventTitle>{item.title}</Style.EventTitle>
            <Style.EventCatagory>{item.catagory}</Style.EventCatagory>
            <Style.EventDetails>
              <Style.EventType>{item.type}</Style.EventType>
              <Style.EventDuration>{item.duration}</Style.EventDuration>
            </Style.EventDetails>
          </Style.EventConDetails>
          {item.attending?<Style.EventConButton>
            <Style.CheckIconContent>
              <FontAwesomeIcon icon={faCheck} />
            </Style.CheckIconContent>
            <Style.Attending>Attending</Style.Attending>
            
          </Style.EventConButton>:''}
          
        </Style.EventDescription>
      </Style.Wrapper>
      )
     
    } else{
     return (
      <Style.Wrapper key={item.title}>
      <Style.EventDescription>
        <Style.EventConDetails>
          <Style.EventTodayDate>{item.date}</Style.EventTodayDate>
            <Style.EventTitle>{item.title}</Style.EventTitle>
            <Style.EventCatagory>{item.catagory}</Style.EventCatagory>
            <Style.EventDetails>
              <Style.EventType>{item.type}</Style.EventType>
              <Style.EventDuration>•{item.duration}</Style.EventDuration>

              {/* <AvatarGroup
                avatars={[
                  "James", 
                  "Ava", 
                  {
                    avatar: "Jackson",
                    fontColor: "FF00FF",
                    tooltip: "This is a custom tooltip"
                  }
                ]}
              /> */}
              <StackedAvatar/>
              

            </Style.EventDetails>
        </Style.EventConDetails>
        {item.attending?<Style.EventConButton>
            <Style.CheckIconContent>
              <FontAwesomeIcon icon={faCheck} />
            </Style.CheckIconContent>
            <Style.Attending>Attending</Style.Attending>
            </Style.EventConButton>:''}
      </Style.EventDescription>
    </Style.Wrapper>)
    }

  
  });
  return (
  <>
  {elements}
  </>
    
  )
}




export default EventContent
