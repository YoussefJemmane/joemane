/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Head from 'next/head';
import Link from 'next/link';
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
            <div class="navbar bg-base-100 rounded-lg" data-theme="light">
              <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">Youssef Jemmane</a>
              </div>
              <div class="flex-none">
                <div className="dropdown dropdown-left dropdown-hover" >
                  <label tabIndex={0} className="btn m-1 btn-primary" data-theme='light'>Translate</label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" data-theme='light'>
                    <li><Link href='/'>English</Link></li>
                    <li><Link href='/lang'>French</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-center m-5' >
              <div className="card w-96 bg-base-100 shadow-xl" data-theme='light'>
                <figure className='m-5'><img className='rounded-xl' src="/p.jfif" width={1000} height={100} effects="blur" /></figure>
                <div className="card-body ">
                  <h2 className="card-title">My name is {data.name}</h2>
                  <p>I'm studying Full Stack development at OFPPT in Morocco</p>
                  <div className="card-actions justify-center">
                    <a href="./YJ.pdf" className='btn btn-primary' download>This is My CV</a>
                  </div>
                </div>
              </div>
            </div>
            <section className='container px-6 py-4 mx-auto'>
              <div className='grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-1'>
                <div className="flex items-center p-4  rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Profile &rarr;</h2>
                    <p>
                      As a full stack student at OFPPT, I have developed a strong knowledge of front-end and back-end technologies, including <strong>React</strong>, <strong>Redux</strong>, <strong>the Redux Toolkit</strong>, <strong>API development</strong>, <strong>Laravel</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>. I am skilled in building modern, dynamic web applications that provide users with a seamless and intuitive experience.
                      I am passionate about using my skills and knowledge to create innovative solutions that solve real-world problems, and I am always looking for new challenges and opportunities to learn and grow as a developer. In the future, I hope to continue learning and advancing my skills, and to eventually use my expertise to make a positive impact on the world through technology.
                    </p>

                  </div>
                </div>
              </div>
              <div className='grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-2'>
                <div className="flex items-center p-4  rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Skills &rarr;</h2>
                    <p>I am skilled in creating CRUD websites using PHP, MySQL, Laravel, React, and Redux. I am able to combine my knowledge of front-end and back-end technologies to create well-rounded and user-friendly web applications. I am passionate about using technology to solve real-world problems, and I am always looking for new opportunities to learn and grow as a developer.</p>

                  </div>
                </div>
                <div className="flex  items-center p-4 rounded-lg shadow-sm  " data-theme='light'>
                  <div className="card-body">
                    <h2 className="card-title">Hobbies &rarr;</h2>
                    <p>I am passionate about solving ciphers, playing basketball, and playing video games. These interests have helped me to develop a wide range of valuable skills, including problem-solving, coordination, teamwork, strategic thinking, and critical analysis. My favorite game, The Legend of Zelda, has particularly inspired me to develop my creativity and problem-solving abilities.</p>
                  </div>
                </div>
              </div>

              <div className="flex  items-center p-4 rounded-lg shadow-sm  " data-theme='light'>
                <div className="card-body">
                  <h2 className="card-title">Certifications &rarr;</h2>
                  <div>
                    <div className='grid gap-6 mb-8 max-sm:grid-cols-1 lg:grid-cols-3'>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">IT Basics &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1630178096840.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Fundamentals &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1629573666888.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">HTML &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1632138539959.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">
                            SQL &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1654463240612.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                      <div className="flex items-center  rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">
                            Python &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1659707694021.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Laravel &rarr; </h2>
                          <div><a href="https://storage.googleapis.com/programminghub/certificate%2F1664479336955.pdf" className='btn btn-primary'>Click</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
            <section className='container px-6 py-4 mx-auto'>


              <div className="flex  items-center p-4 rounded-lg shadow-sm  " data-theme='light'>

                <div className="card-body">
                  <h2 className="card-title">Projects &rarr;</h2>
                  <div>
                    <div className='grid gap-6 mb-8 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Cinema Management &rarr; Laravel</h2>
                          <div>
                            <a href="https://github.com/YoussefJemmane/Cinema_Management.git" className='btn btn-secondary'>GitHub</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Dice &rarr; React, Redux Toolkit</h2>
                          <div>
                            <a href="https://github.com/YoussefJemmane/Dice.git" className='btn btn-secondary mr-5 mb-5'>GitHub</a>
                            <a href="https://dice-joe.vercel.app" className='btn btn-success'>Demo</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Newspaper &rarr; React, Redux Toolkit</h2>
                          <div>
                            <a href="https://github.com/YoussefJemmane/articles.git" className='btn btn-secondary mr-5 mb-5'>GitHub</a>
                            <a href="https://article-jemmane.vercel.app" className='btn btn-success'>Demo</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center rounded-lg shadow-sm  " data-theme='synthwave'>
                        <div className="card-body">
                          <h2 className="card-title">Show Countries &rarr; React, API</h2>
                          <div>
                            <a href="https://github.com/YoussefJemmane/RESTCountries.git" className='btn btn-secondary mr-5 mb-5'>GitHub</a>
                            <a href="https://joe-country.vercel.app" className='btn btn-success'>Demo</a>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <a href='https://github.com/YoussefJemmane'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="24" height="24"
                  viewBox="0 0 28 24"
                  className="fill-current">
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                </a>

              </div>
            </div>


          </footer>
        </div>
      </Client>
    </HydrationProvider>
  )
}
