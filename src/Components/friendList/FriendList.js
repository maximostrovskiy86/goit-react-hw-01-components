import PropTypes from "prop-types";
import FriendListItem from "./ friendListItem/FriendListItem";


const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar} key={friend.id} />
            ))}
        </ul>
    );
}

export default FriendList;