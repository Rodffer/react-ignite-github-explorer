import React, { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodffer/repos')
      .then(res => res.json())
      .then(data => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Repositórios [rodffer]</h1>
      <ul>
        {repositories.map((repo) => (
          <RepositoryItem key={repo.id} repository={repo}/>
        ))}
      </ul>
    </section>
  )
}
