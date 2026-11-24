import { siteContent } from '../data/siteContent';
import { ArrowAction } from './ArrowAction';
import { MediaImage } from './MediaImage';
import { SectionHeading } from './SectionHeading';
import styles from './Projects.module.css';

type Project = (typeof siteContent.projects.items)[number];

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDescription}>{project.description}</p>
        </div>
        <ArrowAction href={project.href} ariaLabel={project.actionLabel} size="small" className={styles.projectAction} />
      </header>
      <div className={styles.media}>
        {project.imageUrl ? (
          <MediaImage src={project.imageUrl} alt={project.title} fallback={siteContent.projects.imagePlaceholder} className={styles.projectImage} />
        ) : (
          <span className={styles.placeholder}>{siteContent.projects.imagePlaceholder}</span>
        )}
      </div>
      <ul className={styles.meta}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </article>
  );
}

export function Projects() {
  return (
    <section id={siteContent.sectionIds.projects} className={styles.section}>
      <div className="container">
        <SectionHeading className={styles.sectionHeading}>{siteContent.projects.title}</SectionHeading>
        <div className={styles.grid}>
          {siteContent.projects.items.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
