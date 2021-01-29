import { useParams } from 'react-router-dom';

export default function Category() {
  const params = useParams();


  return (
    <h1>Trang Category - Slug = {params.slug}</h1>
  )
}