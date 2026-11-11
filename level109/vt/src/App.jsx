import slogo from './assets/slogo.png'
import './App.css'

function App() {
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="fhalf">
            <div className="forimg">
              <div className="divB"><img src={slogo} className="base" alt="img broke" /><p className="pp6">NEONCORE</p></div>
              
              <p className='minor'>0/5 READY</p>
            </div>
            
            <h1>// JOIN THE NEXUS</h1>
            <p className="pp1">Initialize your NEONCORE identity</p>
            <div className="bline">d</div>
            <div className="sdiv"><p className='majority'>OPERATOR ID</p><p className='revert'></p></div>
            <h3>UNASSIGNED</h3>
            <div className="tdiv"><p className='majority'>CALLSIGN</p><div className="line"></div><p className='majority'>PENDING</p></div>
            <div className="tdiv"><p className='majority'>EMAIL</p><div className="line"></div><p className='majority'>PENDING</p></div>
            <div className="tdiv"><p className='majority'>PASSWORD</p><div className="line"></div><p className='majority'>PENDING</p></div>
            <div className="tdiv"><p className='majority'>CONFIRM</p><div className="line"></div><p className='majority'>PENDING</p></div>
            <div className="tdiv"><p className='majority'>TERMS</p><div className="line"></div><p className='majority'>REQUIRED</p></div>
          </div>
          <div className="shalf">
            <div className="sinner">
            <div className="head"><p className="ppp1">NEW OPERATOR</p><p id='fid' className="pp2">ALL FIELDS REQUIRED</p></div>
            <div className="lines"></div>
            {/* <div className="forinp"></div> */}
            <p className='pp3'>CALLSIGN</p>
            <input name='alin' type="text" placeholder='   e.g. vortex' className="styl" />
            <p className="pp4">3-20 characters: letters, numbers, _ or -</p>

            <p className='pp3'>EMAIL</p>
            <input name='alin' type="email" placeholder='   your@example.com' className="styl" />
            <p className="pp4">3-20 characters: letters, numbers, _ or -</p>

            <p className='pp3'>PASSWORD</p>
            <input name='alin' type="password" placeholder='' className="styl" />
            <div className="cn"><div className="smallin"></div><div className="smallin"></div><div className="smallin"></div><div className="smallin"></div></div>
            <p className="pp4">at least 8 characters</p>

            <p className='pp3'>CONFIRM PASSWORD</p>
            <input name='alin' type="password" placeholder='' className="styl" />

            <div className="divA"><input className='box' type="checkbox" /><p className="pp5">i accept the <span>Terms</span> and <span>Privacy Policy</span></p></div>
            <button className="submit">INITIALIZE ACCOUNT</button>
            <div className="center2">
              <p className="pp5">Already an operator? <span>Log In</span></p>
            </div>
            
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App











    // <>
    //   <section id="center">
    //     <div className="hero">
    //       <img src={logo} className="base" width="170" height="179" alt="" />
    //     </div>
    //     <div>
    //       <h1>Get started</h1>
    //       <p>
    //         Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
    //       </p>
    //     </div>
    //     <button
    //       type="button"
    //       className="counter"
    //       onClick={() => setCount((count) => count + 1)}
    //     >
    //       Count is {count}
    //     </button>
    //   </section>

    //   <div className="ticks"></div>

    //   <section id="next-steps">
    //     <div id="docs">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#documentation-icon"></use>
    //       </svg>
    //       <h2>Documentation</h2>
    //       <p>Your questions, answered</p>
    //       <ul>
    //         <li>
    //           <a href="https://vite.dev/" target="_blank">
    //             <img className="logo" src={viteLogo} alt="" />
    //             Explore Vite
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://react.dev/" target="_blank">
    //             <img className="button-icon" src={reactLogo} alt="" />
    //             Learn more
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div id="social">
    //       <svg className="icon" role="presentation" aria-hidden="true">
    //         <use href="/icons.svg#social-icon"></use>
    //       </svg>
    //       <h2>Connect with us</h2>
    //       <p>Join the Vite community</p>
    //       <ul>
    //         <li>
    //           <a href="https://github.com/vitejs/vite" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#github-icon"></use>
    //             </svg>
    //             GitHub
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://chat.vite.dev/" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#discord-icon"></use>
    //             </svg>
    //             Discord
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://x.com/vite_js" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#x-icon"></use>
    //             </svg>
    //             X.com
    //           </a>
    //         </li>
    //         <li>
    //           <a href="https://bsky.app/profile/vite.dev" target="_blank">
    //             <svg
    //               className="button-icon"
    //               role="presentation"
    //               aria-hidden="true"
    //             >
    //               <use href="/icons.svg#bluesky-icon"></use>
    //             </svg>
    //             Bluesky
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </section>

    //   <div className="ticks"></div>
    //   <section id="spacer"></section>
    // </>