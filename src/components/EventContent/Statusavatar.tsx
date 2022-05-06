import * as Style from './styles'
import Avatar from "react-avatar";


const Statusavatar = () => {
  const avatars = [
    { url: "https://i.postimg.cc/Dw9p6YNg/Ellipse-134.png", name: "SoorajSethumadhavan",},
    { url: "https://i.postimg.cc/9Qdy38M1/Ellipse-134-1.png", name: "Jorgen Evens",},
    { url: "https://i.postimg.cc/s2SjHqgD/Ellipse-134-4.png", name: "asdsad Evens",},
    { url: "https://i.postimg.cc/ydZZPvwF/Ellipse-134-3.png", name: "www",},
    { url: "https://i.postimg.cc/fRNB00S2/Ellipse-134-2.png", name: "Wim Mostmans",}
    
  ];

  const elements = avatars.map(item => 
    (
    <Style.AvatarBoder>
        <Avatar
      key={item.name}
      name={item.name}
      size="24"
      round={true}
      src={item.url}
    />
    </Style.AvatarBoder>
      
      )
  );
  return (
  <>
  {elements}
  </>
    
  )
}
export default Statusavatar