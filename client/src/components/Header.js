import styled from 'styled-components';
import logo from '../images/header-logo.png';
import { ReactComponent as HomeIcon } from '../images/icons/home.svg';

const Header = () => {

    return (
        <Container>
            <LogoImg src={logo} alt="Logo"/>
            <DashboardLink src="#">
                <HomeIcon />
                    Dashboard
            </DashboardLink>
        </Container>
    );
}

export default Header;

const Container = styled.header`
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #4a4b4f;
    padding: 5px 10px;
    z-index: 2;
`;

const LogoImg = styled.img`
    width: 200px;
    padding-left: 25px;
    @media (max-width: 400px) {
        width: 120px;
        padding-left: 10px;
    }
`;

const DashboardLink = styled.a`
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-right: 50px;
    @media (max-width: 400px) {
        padding-right: 20px;
    }
    svg {
        margin-right: 5px;
        width: 15px;
    }
        
    path {
        fill: #fff;
    }
`;
