import Providers from './providers'
import './globals.css'

import { VT323 } from 'next/font/google'

const fontGoogle = VT323({
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
      {/* <body className={fontGoogle.className}> <Providers>{children}</Providers></body> */}
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
  const fileContents = await fs.readFile('data.json', 'utf8');
  //Return the content of the data file in json format
  return JSON.parse(fileContents);
}