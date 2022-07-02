import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--color-tertiary);
    width: min(1200px, 100%);
    margin-inline: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Btn = styled.button`
    border-radius: 10px;
    padding: 0.5rem;
    background-color: var(--color-secondary);
    transition: all .3s;
    cursor: pointer;
    color: var(--color-white);
    &:hover {
        background-color: var(--color-secondary-hover);
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`;

export const ListItem = styled.li`
    border-radius: 10px;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 0.5rem;
    cursor: copy;
`;