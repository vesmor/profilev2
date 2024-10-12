interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    link:string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <a href={"/projects/" + props.link}>
        <div className="project-card flex flex-col md:flex-row max-w-screen-lg  h-64
                        p-1 my-4 border-spacing-0
                        bg-foreground rounded-2xl shadow-lg">
            <div className="project-card-info flex-1 pr-4 mb-4 md:mb-0">
                <h1 className="text-xl font-bold my-4 mx-4">{props.name}</h1>
                <p className="text-gray-600 mx-4">{props.description}</p>
            </div>
            <div className="project-card-image flex-shrink-0 md:w-1/3 md:h-40">
                <img className="w-auto h-60 object-fill float-right m-1 rounded-2xl" src={props.image} alt="project"/>
            </div>
        </div>
        </a>
    )
}
