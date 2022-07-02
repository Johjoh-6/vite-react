import { Container, Logo, Title, Nav, NavItem, NavLink } from '../Header/style';
import favicon from '../../favicon.svg';

const Header = () => {
    return (
        <Container>
            <Logo src={favicon} alt="favicon" />
            <Title>Vite React</Title>
            <Nav>
                <NavItem><NavLink href='/'>Home</NavLink></NavItem>
                <NavItem><NavLink href='https://vitejs.dev/' target="_blank">Vite.js</NavLink></NavItem>
                <NavItem><NavLink href='https://reactjs.org/' target="_blank">React.js</NavLink></NavItem>
            </Nav>
        </Container>
    );
}

export default Header;