// import PropTypes from 'prop-types'
import "./style.css"
// import colors from "../../data/colors";


const Statistics = ({title, stats, colors}) => {

    // function randomInteger(min, max) {
    //     let rand = min - 0.5 + Math.random() * (max - min + 1);
    //     return Math.round(rand);
    // }

    //
    // const randomColor = () => {
    //     const arrayColors = colors.map(color => color.rgb);
    //     return `rgb(${arrayColors[randomInteger(0, arrayColors.length - 1)]})`;
    // }

    // const style = {
    //     backgroundColor: randomColor(),
    // }

    return (
        <section className="statistics">
            <h2 className="title">{title !== 0 && title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (

                    <li key={stat.id} className="item" style={{backgroundColor: '#4599ff'}}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

// Statistics.PropTypes = {
    // stats: PropTypes.arrayOf(PropTypes.shape({
        // id :PropTypes.string,
        // label :PropTypes.string.isRequired,
        // percentage: PropTypes.number.isRequired,
    // }))
// }

export default Statistics;