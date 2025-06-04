

/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/sql-pic.svg',
    label: 'SQL',
    desc: 'Database Query Tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/jira.svg',
    label: 'Jira',
    desc: 'Task Tracking'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/clickup1.svg',
    label: 'ClickUp',
    desc: 'Project Management'
  },
  {
    imgSrc: '/images/slack.svg',
    label: 'Slack',
    desc: 'Team Communication'
  },
  {
    imgSrc: '/images/github1.svg',
    label: 'Github',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/firestore.svg',
    label: 'Firebase',
    desc: 'Backend Services'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools I use
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Explore the powerful tools and technologies I rely on to build high-performance websites and the tools used for project management, team collaboration, and keeping timelines on track.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill