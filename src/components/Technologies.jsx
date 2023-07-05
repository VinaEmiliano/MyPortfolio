import Navigation from "./navigation"
import Tech from "./Tech"

const Technologies = () => {
  
  const techs = ['git & github', 'figma', 'HTML5', 'CSS3', 'SASS', 'TailWind', 'React.js', 'Next.js', 'JavaScrip ES6', 'Strapi', 'Prisma', 'vite', 'SWR']
  
  return (
    <main className="technologies">
      <h3>Technologies</h3>
      <div className="technologies-list">
        {techs.map(tech =>
        <Tech key={tech} tech={tech} /> 
        )}
      </div>
      <div>
        <Navigation />
      </div>
    </main>
  )
}

export default Technologies