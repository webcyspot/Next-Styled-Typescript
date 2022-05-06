/* istanbul ignore file */
import {
  Content,
  PageContainer
} from './styles'
import "@fontsource/inter";
import HeaderComponent from 'components/HeaderComponent'
import MainContentComponent from 'components/MainContentComponent'
import SideContentComponent from 'components/SideContentComponent'
export default function Home() {
  return (
    <Content>
        <HeaderComponent />
        <PageContainer>
            <MainContentComponent />
            <SideContentComponent />
        </PageContainer>
    </Content>
  )
}
