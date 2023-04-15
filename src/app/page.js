
import styles from './page.module.css'
import RenderPage from './components/RenderPage';

import { Press_Start_2P } from '@next/font/google'
const fontGoogle = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default async function Home() {
  const data = await getData();
  console.log(data);

  const font = () => {
    if (data.template === 'retroMonitor') {
      return fontGoogle.className
    }
  }

  return (
    <main className={font()}>
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