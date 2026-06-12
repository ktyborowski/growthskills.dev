import { useState, useMemo } from 'preact/hooks';
import Fuse from 'fuse.js';

interface Skill {
  slug: string;
  description: string;
  author: string;
  topics: string[];
}

interface Props {
  skills: Skill[];
}

export default function SkillsSearch({ skills }: Props) {
  const [query, setQuery] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(skills, {
        keys: ['slug', 'description', 'author', 'topics'],
        threshold: 0.3,
        useTokenSearch: true,
      }),
    [skills]
  );

  const results = useMemo(() => {
    if (!query.trim()) return skills;
    return fuse.search(query).map((r) => r.item);
  }, [query, fuse, skills]);

  return (
    <>
      <input
        type="text"
        class="search-input"
        placeholder="Search skills..."
        value={query}
        onInput={(e) => setQuery(e.currentTarget.value)}
      />
      <div class="skills-grid">
        {results.map((skill) => (
          <a href={`/skills/${skill.slug}`} class="skill-card">
            <strong>{skill.slug}</strong>
            <em>by {skill.author}</em>
            <p>{skill.description}</p>
          </a>
        ))}
      </div>
    </>
  );
}
