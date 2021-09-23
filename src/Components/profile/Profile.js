import PropTypes from 'prop-types';
import style from "./Profile.module.css"

const Profile = (props) => {
    const {name, avatar, location, stats, tag} = props;
    return (
        <div className={style.wrapper}>
            <h2 className={style.h2}>User</h2>
            <div className={style.profile}>
                <div className={style.description}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={style.avatar}
                    />
                    <p className="name">{name}</p>
                    <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                </div>
                <ul className={style.stats}>
                    {Object.entries(stats).map(stat => (
                        <li className={style.item} key={stat[0]}>
                            <span className={style.label}>{stat[0]}</span>
                            <span className="quantity">{stat[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}

export default Profile;