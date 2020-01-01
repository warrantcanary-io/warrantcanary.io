import React from "react"
import "../components/wc.scss"

import Image from "../components/image"


const IndexPage = () => {
  return (
    <div id="landing-page">
      <section id="hero" className="hero-container has-overlay-image">
        <div className="hero is-medium has-background-primary">
          {/* <div className="hero-head">
            <nav className="navbar is-fixed-top">

            </nav>
          </div> */}
          <div className="hero-body">
            <div className="container is-small has-text-centered">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-2 is-spaced">Warrant Canary</h1>
                  <h2 className="subtitle">&ldquo;Sunlight is said to be the best of disinfectants&rdquo;<br/>
                    &mdash; <em><a href="https://opengovdata.io/2014/sunlight-as-disinfectant/">Brandeis</a></em></h2>
                  {/* <p className="content">Cool content. Using Bulma!</p> */}
                </div>
              </div>
              <div className="columns">
                <div className="column is-2 is-offset-5">
                  <figure className="image">
                    <Image />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why" className="section has-background-white is-medium">
        <div className="container is-small has-text-centered">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <h1 className="title is-spaced">What is this?</h1>
              <h2 className="subtitle is-spaced">I&rsquo;m building a fully automated, up-to-date index of all warrant canaries worldwide. My hope is that organizations everywhere use the platform to host their signed messages and that citizens, especially journalists, use it to shed light on secret activity.</h2>            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndexPage