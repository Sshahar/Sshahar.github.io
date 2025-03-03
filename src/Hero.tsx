import styles from './Hero.module.scss'

export type HeroType = {
  title: string
  imgUrl: string
  siteUrl: string
  githubUrl: string
}

export function Hero({ hero }: { hero: HeroType }) {
  const { title, imgUrl, siteUrl, githubUrl } = hero

  return (
    <div className={styles.heroCmp}>
      <h2>{title}</h2>
      <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
        <img src={imgUrl} alt='' className={styles.image} />
      </a>
      <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
        Source: {githubUrl}
      </a>
    </div>
  )
}
