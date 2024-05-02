import './Projects.css'

export default function Projects() {
  const projectsData = [
    {
      title: 'Today I Learn',
      image:  "/assets/images/todayilearn.png",
      descriptions: "It's based on Udemy course, and used Javascript and Supabase for backend.",
      link: 'https://github.com/somayehkhanbabaei/Today-I-Learn'
    }, 
    {
    title: 'Weather App',
    image: "/assets/images/weather.png",
    descriptions:"It's based on SheCodes course, using Html,Css,Javascript,Api and react.",
    link: 'https://github.com/somayehkhanbabaei/weather_app'
  },
    {
      title: 'Bankist App',
      image: "/assets/images/bankist.png",
      descriptions:"It's based on Udemy course, using Javascript, Dom and coming soon...",
      link: 'https://github.com/somayehkhanbabaei/bankist'
    }
  ]
  return (
    <>
      <h2 className='title'>My Projects</h2>
      <div className='container'id='projects'>
        {projectsData.map((projectData, index) => (
          <div className='card'  key={index}>
            <h4 className='card-title'>{projectData.title}</h4>
            <div className="card-image">
              <img src={projectData.image} alt={projectData.title}/>
            </div>
            <div className="card-main">
              <p>{projectData.descriptions}</p>
            </div>
            <div className="card-footer">
              <a href={projectData.link}>See more</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
