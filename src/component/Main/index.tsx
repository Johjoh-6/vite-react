import React from "react";
import { Container, Btn, List, ListItem } from "./style";
import { uid } from "@/util/uid";


type Uid = string; 

const Main = () => {
    const [itemUid, setItemUid] = React.useState<Uid[]>([]);

    const addItem = () => {
        let newNumber = uid();
        setItemUid([...itemUid, newNumber]);
    };
    const handleCopyToClipboard = (e: Uid) => {
        navigator.clipboard.writeText(e);
    }

    return (
        <Container>
            <Btn onClick={addItem}>Generate new Unique Id</Btn>
            <List>
                {itemUid.map((item) => (
                    <ListItem onClick={() => handleCopyToClipboard(item)} key={item}>{item}</ListItem>
                ))}
            </List>
        </Container>
    )
}

export default Main;