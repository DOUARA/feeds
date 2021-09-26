import styled from 'styled-components';
import logo from '../images/navigation-logo.png';

const Navigation = () => {
    return (
        <Container>
            <NavigationHeader> 
                <img src={logo} alt="Pagefreezer Logo"/>
                <h2>PageFreezer</h2>
                <h3>@PageFreezerSoftwareinc</h3>
            </NavigationHeader>
            <List>
                <ListItem active={true}>Timeline</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Photos</ListItem>
                <ListItem>Videos</ListItem>
                <ListItem>Visitor Posts</ListItem>
            </List>
        </Container>
    );
}
export default Navigation;

const Container = styled.aside`
    position: sticky;
    top: 70px;
    left: 50px;
    display: flex;
    width: 170px;
    flex-direction: column;
    @media (max-width: 1230px) {
        display: none;
    }
`;

const List = styled.ul`
    margin-top: 10px;
    padding: 0;
`

const ListItem = styled.li`
    font-size: 14px;
    list-style: none;
    padding: 10px;
    font-weight: bold;
    color: #898989;
    cursor: pointer;
    ${props => props.active ? 
       `background: #dddfe2;
        border-left: 4px solid #4467b1; 
        color: #3D3D3D;
        `
    : ''}
`

const NavigationHeader = styled.div`   
    img {
        width: 120px;
    }

    h2 {
        font-size: 18px;
        margin: 10px 0 0 0;
        color: #3D3D3D;
    }

    h3 {
        font-size: 12px;
        margin: 0;
        color: #8a8a8c;
    }
`;