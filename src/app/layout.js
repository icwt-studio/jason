import Providers from './providers'
import './globals.css'


export default async function RootLayout({ children }) {
  const data = await getData();

  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
        <meta desctiption={data.description} />
      </head>
      <body> <Providers>{children}</Providers></body>
    </html>
  )
}

//import path from 'path';
import { promises as fs } from 'fs';

async function getData() {
  //const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile('data.json', 'utf8');
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}