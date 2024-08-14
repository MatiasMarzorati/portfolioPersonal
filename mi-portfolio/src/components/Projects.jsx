import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1.',
            link: '#',
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2.',
            link: '#',
        },
        // Añade más proyectos aquí
    ];

    return (
        <section className="p-5 bg-gray-100 text-gray-800">
            <h2 className="text-3xl font-bold">Proyectos</h2>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="border p-4 bg-white">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2">{project.description}</p>
                        <a href={project.link} className="text-blue-500 mt-2 inline-block">Ver más</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
