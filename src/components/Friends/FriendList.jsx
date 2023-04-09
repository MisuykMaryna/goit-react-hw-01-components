import { FriendListItem } from 'components/Friends/FriendListItem';

export const FriendList = ({friends}) => {
    return (<ul class="friend-list">
        {friends.map(({id, avatar, name, isOnline}) => (<FriendListItem key={id} avatar={avatar} name={name} isOnline = {isOnline} />))}
</ul>)
}