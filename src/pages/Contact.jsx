import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <section className="">
      <div className="container">
        <h1>
          Contact
        </h1>
        <p>
          Hello, my name is VinoFernando, start my journey in fullstack web developer.
          Experienced build a simple authentication for backend using node and express.
          Here are some projects that I have made, some from bootcamps and personal projects :
        </p>

        <a
          href="https://github.com/Vinofernando?tab=repositories"
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className='icon'/>
        </a>
      </div>
    </section>
  );
}
