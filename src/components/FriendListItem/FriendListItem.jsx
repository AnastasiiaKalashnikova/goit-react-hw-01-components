import { Item, StatusLight } from "./FriendListItem.styled"

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return (
        <Item key={id}>
            <StatusLight $status={isOnline}></StatusLight>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </Item>
    )
}