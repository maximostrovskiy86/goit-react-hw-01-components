import FriendListItem from "./ friendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            <h2>Friends</h2>
            {friends.map(friend => (
                <FriendListItem isOnline={friend.isOnline} name={friend.name} avatar={friend.avatar} key={friend.id}/>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList;