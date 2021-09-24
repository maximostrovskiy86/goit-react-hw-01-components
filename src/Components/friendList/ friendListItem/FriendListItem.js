import style from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <li className={style.item}>
            <span className={isOnline ? style.active : style.disabled}> </span>
            <img className="avatar" src={avatar} alt={name} width="48"/>
            <p className={style.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;