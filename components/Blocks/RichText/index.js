import classNames from 'classnames'
import styles from './index.module.scss'
import PropTypes from 'prop-types'

const RichText = ({ children, position }) => {
  return (
    <section className={classNames(styles.section, styles[position])}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  )
}

RichText.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
}

export default RichText
