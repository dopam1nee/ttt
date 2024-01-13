import PropTypes from 'prop-types'
import styles from './information.module.css'

// шаблон (stateless) / разметка
export const InformationLayout = ({ information }) => (
	<div className={styles.information}>{information}</div>
)

InformationLayout.propTypes = {
	information: PropTypes.string,
}
