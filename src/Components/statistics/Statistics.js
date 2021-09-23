import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

const Statistics = ({title, stats, colors}) => {
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    const randomColor = () => {
        const arrayColors = colors.map(color => color.rgb);
        return `rgb(${arrayColors[randomInteger(0, arrayColors.length - 1)]})`;
    }

    return (
        <section className={s.statistics}>
            <h2 className="title">{title.length && title}</h2>

            <ul className={s.statList}>
                {stats.map(stat => (

                    <li key={stat.id} className={s.item} style={{backgroundColor: randomColor()}}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Statistics;