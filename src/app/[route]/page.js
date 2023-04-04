import RenderPage from '../components/RenderPage';
import { promises as fs } from 'fs';

export default async function Route ({ params }) {
  const { route } = params
  const data = await getData(route);

  return (
    <main>
      <RenderPage data={data} />
    </main>
  )
}

async function getData(route) {
  try {
    const fileContents = await fs.readFile(`${route}.json`, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    const notFoundtContents = await fs.readFile('notFound.json', 'utf8');
    return JSON.parse(notFoundtContents);
  }
}
