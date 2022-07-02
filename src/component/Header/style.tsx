import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: min(1200px, 100%);
    margin-inline: auto;
    padding: 0.5rem;
    height: 100px;
    align-items: center;
   background-color: var(--color-primary);
`;

const Logo = styled.img`
    width: 80px;
    height: 80px;
`;

const Title = styled.p`
    font-size: var(--font-title);
    font-weight: bold;
    color: var(--color-white);
    flex-grow: 2;
    text-align: center;
`;

const Nav = styled.ul`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
    color: var(--color-white);
    font-size: var(--font-text);
    transition: all .3s;
    cursor: pointer;
    &:hover {
        color: var(--color-tertiary);
    }
`;

export { Container, Logo, Title, Nav, NavItem, NavLink };