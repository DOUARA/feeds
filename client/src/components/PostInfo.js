import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const PostInfo = () => {
    return (
        <Container>
            <StyledTabs>
                <TabList>
                <Tab>Metadatas</Tab>
                <Tab>History</Tab>
                <Tab>Notes</Tab>
                </TabList>
                <TabPanel>
                    <Title>Published</Title>
                        <Content>
                            22 November 2017, 1:49AM
                        </Content>
                    <Title>Post Type</Title>
                        <Content>
                            Story
                        </Content>
                    <Title>Post ID</Title>
                        <Content>
                        1658331427539028
                        </Content>
                    <Title>Digital Signature</Title>
                        <Content>
                        Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        </Content>
                    <Title>Privacy Setting</Title>
                        <Content>
                        Public
                        </Content>
                </TabPanel>
                <TabPanel>
                   No Data
                </TabPanel>
                <TabPanel>
                   No Data
                </TabPanel>
            </StyledTabs>
        </Container>
    );
}

export default PostInfo;

const Container = styled.aside`
    background: #ffffff;
    position: sticky;
    top: 70px;
    width: 300px;
    right: 50px;
    padding: 15px;
    @media (max-width: 1020px) {
        width: 250px;
    }
    @media (max-width: 875px) {
        display: none;
    }
   
`;

const StyledTabs = styled(Tabs)`
  .react-tabs__tab {
    color: #4785a3;
    border-radius: 0;
    padding: 10px 15px;
    font-size: 14px;
  }

  .react-tabs__tab--selected {
    color: #333333;
  }
`;

const Title = styled.h2`
  border-bottom: 1px solid #333333;
  font-size: 14px;
  margin-top: 30px;

`

const Content = styled.p`
`
    