import PropTypes from 'prop-types';

const Profile = (props) => {
    const {name, avatar, location, stats, tag} = props;
    return (
        <>
            <div className="profile">
                <div className="description">
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className="avatar"
                    />
                    <p className="name">{name}</p>
                    <p className="tag">{tag}</p>
                    <p className="location">{location}</p>
                </div>
                <ul className="stats">
                    {Object.entries(stats).map(stat => (
                        <li key={stat[0]}>
                            <span className="label">{stat[0]}: </span>
                            <span className="quantity">{stat[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}

Profile.prototype = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.number.isRequired)
}

export default Profile;