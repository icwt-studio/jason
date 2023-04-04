import RenderPage from '../components/RenderPage';
import { promises as fs } from 'fs';

export default async function Route ({ params }) {
  const { route } = params
  const data = await getData(route);

  return (
    <main>
      <h1>Esto es un post {route} </h1>
      <RenderPage data={data} />
    </main>
  )
}

async function getData(route) {
  const fileContents = await fs.readFile(`${route}.json`, 'utf8');
  return JSON.parse(fileContents);
}
