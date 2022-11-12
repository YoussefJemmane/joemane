/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Head from 'next/head';
import { Client, HydrationProvider } from "react-hydration-provider";




export default function Home() {
  const data = {
    name: 'Youssef Jemmane',
  }
  return (
    <HydrationProvider>
      <Client>
        <div className='p-1' >
          <Head >
            <title>Welcome to My CV</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />

          </Head>

          <main className='m-5'>

            <div className='flex justify-center' >
              <div className="card w-96 bg-base-100 shadow-xl" data-theme='light'>
                <figure ><img src="/p.jfif" width={1000} height={100} effects="blur" /></figure>
                <div className="card-body ">
                  <h2 className="card-title">My name is {data.name}</h2>
                  <p>I'm studying Full Stack development at OFPPT in Morocco</p>
                  <div className="card-actions justify-center">
                    <a href="./CV.pdf" className='btn btn-primary' download>This is My CV</a>
                  </div>
                </div>
              </div>
            </div>
            <section className='container px-6 py-4 mx-auto'>
              <div className='grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3'>
                <div className="flex items-center p-4  rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Skills &rarr;</h2>
                    <p>I'm able to create a CRUD website using PHP and MySQL or Laravel, and I have the knowledge to create a UI using React and Redux</p>

                  </div>
                </div>
                <div className="flex items-center p-4  rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Hobbies &rarr;</h2>
                    <p>I love solving ciphers and playing BasketBall, I adore playing AAA and RPG Games My favourite game is The legends of Zelda</p>
                  </div>
                </div>
                <div className="flex items-center p-4  rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Certifications &rarr;</h2>
                    <p><a href="https://storage.googleapis.com/programminghub/certificate%2F1630178096840.pdf">IT Basics</a></p>
                    <p><a href="https://storage.googleapis.com/programminghub/certificate%2F1629573666888.pdf">Fundamentals</a></p>
                  </div>
                </div>
              </div>
              
            </section>


          </main>


          <footer className="footer p-10 bg-neutral text-neutral-content justify-center">

            <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a href='https://twitter.com/YoussefJemmane'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a href='https://www.linkedin.com/in/jemmane-youssef-685875212/'><svg xmlns="http://www.w3.org/2000/svg" x="4px" y="0px"
                  width="30" height="30"
                  viewBox="0 0 30 34"
                  className="fill-current">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                </svg></a>

              </div>
            </div>


          </footer>
        </div>
      </Client>
    </HydrationProvider>
  )
}
