import Providers from './providers'
import './globals.css'

import { Press_Start_2P } from 'next/font/google'

const fontGoogle = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default async function RootLayout({ children }) {
  const data = await getData();
  
  return (
    <html lang="en">
      <head>
        <title>{data.meta.title}</title>
        <meta desctiption={data.meta.description} />
      </head>
      {/* <body className={fontGoogle.className}> */}
      <body>
        <Providers template={data.template}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

//import path from 'path';
import { promises as fs } from 'fs';

async function getData() {
  //const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile('index.json', 'utf8');
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}