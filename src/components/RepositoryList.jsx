import React from 'react'
import RepositoryItem from './RepositoryItem';

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com'
}

export default function RepositoryList() {
  return (
    <section className='repository-list'>
      <h1>Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  )
}
