interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Nome Indisponível'}</strong>
      <p>{props.repository?.description ?? 'Descrição Indisponível'}</p>
      <a href={props.repository?.html_url ?? 'Link Indisponível'}>Acessar repositório</a>
    </li>
  )
}
