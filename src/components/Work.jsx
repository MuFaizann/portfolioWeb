
/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/housePic.png',
    title: 'House Renting Website',
    tags: ['React', 'MongoDB', 'Tailwind','Web-Design'],
    projectLink: 'https://website-house.vercel.app',
    githubLink: 'https://github.com/MuFaizann/websiteHouse'
  },
  {
    imgSrc: '/images/proj.png',
    title: 'Project Management Dashboard',
    tags: ['React', 'Web-Design', 'Firebase'],
    projectLink: 'https://project-mng.vercel.app',
    githubLink: 'https://github.com/MuFaizann/ProjectMng'
  },
  {
    imgSrc: '/images/Frog1.webp',
    title: 'Frog Game',
    tags: ['Unity', 'C#', 'Game-Design'],
    projectLink: 'https://frogger-gf8lw4uql-faizans-projects-eba7961e.vercel.app',
    githubLink: 'https://github.com/MuFaizann/FroggerWeb'
  },
  {
    imgSrc: '/images/cubeShoot.png',
    title: 'Cube Shooter',
    tags: ['Unity', 'C#', 'Game-Design'],
    projectLink: 'https://cube-shoot.vercel.app',
    githubLink: 'https://github.com/MuFaizann/cubeShoot'
  },
  {
    imgSrc: '/images/APIpic.png',
    title: 'Github API Project',
    tags: ['React', 'GSAP', 'Tailwind', 'Web-design', 'Development'],
    projectLink: 'https://github-api-mu-beryl.vercel.app',
    githubLink: 'https://github.com/MuFaizann/githubAPI'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://portfolio-m1h09rrq4-faizans-projects-eba7961e.vercel.app',
    githubLink: 'https://github.com/MuFaizann/portfolioWeb'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink, githubLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              githubLink={githubLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
