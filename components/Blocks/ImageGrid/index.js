import cn from 'classnames'
import Image from 'next/image'
import styles from './index.module.scss'
import { useWindowSize } from '../../../lib/utils'
import { useEffect, useState } from 'react'
import Tilt from 'react-tilt'

const ImageGrid = () => {
  const windowSize = useWindowSize()
  const [vh, setVh] = useState(null)
  const [vw, setVw] = useState(null)

  useEffect(() => {
    setVh(windowSize.height)
    setVw(windowSize.width)
  }, [windowSize])

  const tiltOptions = { max: 20, scale: 1, speed: 500, perspective: 1000 }

  return (
    <section
      className={styles.section}
      style={{ '--vh': vh * 0.01 + 'px', '--vw': vw * 0.01 + 'px' }}>
      <Tilt className={styles.image} options={tiltOptions}>
        <Image
          src="/images/smile.jpg"
          alt="Black and white photo of Jennifer, smiling on a sidewalk"
          layout="fill"
          objectFit="cover"
        />
      </Tilt>
      <Tilt className={styles.image} options={tiltOptions}>
        <Image
          src="/images/light-2.jpg"
          alt="Black and white photo of Jennifer, smiling on a sidewalk"
          layout="fill"
          objectFit="cover"
        />
      </Tilt>
      <Tilt className={styles.image} options={tiltOptions}>
        <Image
          src="/images/my-desk.jpg"
          alt="Black and white photo of Jennifer, smiling on a sidewalk"
          layout="fill"
          objectFit="cover"
        />
      </Tilt>
      <Tilt className={styles.image} options={tiltOptions}>
        <Image
          src="/images/olive.jpg"
          alt="Black and white photo of Jennifer, smiling on a sidewalk"
          layout="fill"
          objectFit="cover"
        />
      </Tilt>
      <Tilt className={styles.image} options={tiltOptions}>
        <Image
          src="/images/sand.jpg"
          alt="Black and white photo of Jennifer, smiling on a sidewalk"
          layout="fill"
          objectFit="cover"
        />
      </Tilt>

      <div className={styles.caption}>
        <span className={styles.counter}>1 of 5</span>
        <p>
          Photo Credit –{' '}
          <a
            href="https://www.instagram.com/caterobesonpickens/"
            target="_blank"
            rel="noreferrer">
            Cate Robeson-Pickens
          </a>
        </p>
      </div>
    </section>
  )
}

export default ImageGrid
