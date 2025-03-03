import 'normalize.css'
import { Hero } from './Hero'
import './styles/main.scss'

import musifyUrl from '../public/musify.png'
import appsuseUrl from '../public/appsuse.png'

function App() {
  const heroes = [
    {
      title: 'Musify - Spotify Clone',
      imgUrl: musifyUrl,
      siteUrl: 'https://musify-tcob.onrender.com/',
      githubUrl: 'https://github.com/orenshaya/musify/',
    },
    {
      title: 'Appsuse - Gmail, Google Notes clone',
      imgUrl: appsuseUrl,
      siteUrl: 'https://sshahar.github.io/appsuse/#/mail',
      githubUrl: 'https://github.com/sshahar/appsuse',
    },
  ]

  return (
    <>
      <h1>Shahar Margalit</h1>
      <ul>
        {heroes.map((hero) => (
          <li>
            <Hero hero={hero} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
