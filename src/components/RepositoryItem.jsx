import React from 'react'

export default function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Nome Indisponível'}</strong>
      <p>{props.repository?.description ?? 'Descrição Indisponível'}</p>
      <a href={props.repository?.html_url ?? 'Link Indisponível'}>Acessar repositório</a>
    </li>
  )
}
