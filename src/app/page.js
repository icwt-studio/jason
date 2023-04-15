
import styles from './page.module.css'
import RenderPage from './components/RenderPage';


export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <RenderPage data={data} />
    </main>
  )
}

import { promises as fs } from 'fs';

async function getData() {
  //const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile('index.json', 'utf8');
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}