import React, { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem';

import '../styles/repositories.scss';

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com'
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/rodffer/repos')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
9
  return (
    <section className='repository-list'>
      <h1>Repositórios [rodffer]</h1>
      <ul>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}
