import React from 'react'
import './globals.css'
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Widgets from './Components/Widgets';



export const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="default-toggle">
            <Widgets/>
            <Sidebar/>
            <Header/>
           </div>
          <div className="tabs-2">
            <div className="icon-text-wrapper">
              <div className="icon-text">
                <div className="saas-application">
                  SaaS
                  <br />
                  Application
                </div>
                <div className="library">
                  <img
                    className="combined-shape-12"
                    alt="Combined shape"
                    src="https://c.animaapp.com/tJhVFtiO/img/combined-shape-2.svg"
                  />
                  <div className="rectangle-copy-6" />
                </div>
              </div>
            </div>
            <div className="item-16">
              <div className="icon-text-2">
                <div className="main-categories">
                  Main
                  <br />
                  Categories
                </div>
                <div className="layout-blocks-3">
                  <div className="overlap-group-10">
                    <div className="rectangle-6" />
                    <img
                      className="combined-shape-13"
                      alt="Combined shape"
                      src="https://c.animaapp.com/tJhVFtiO/img/combined-shape-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-17">
              <div className="icon-text-3">
                <div className="video-tutorials">
                  Video
                  <br />
                  Tutorials
                </div>
                <div className="movie-lane">
                  <div className="path-wrapper">
                    <img className="path-4" alt="Path" src="https://c.animaapp.com/tJhVFtiO/img/path-10.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-18">
              <div className="icon-text-4">
                <div className="sales-statistics">
                  Sales
                  <br />
                  Statistics
                </div>
                <div className="equalizer-2">
                  <div className="rectangle-copy-7" />
                  <div className="rectangle-copy-8" />
                  <div className="rectangle-copy-9" />
                  <div className="rectangle-copy-10" />
                </div>
              </div>
            </div>
            <div className="item-19">
              <div className="icon-text-5">
                <div className="ARC-security">
                  ARC
                  <br />
                  Security
                </div>
                <div className="shield-check-2">
                  <div className="overlap-group-11">
                    <img
                      className="check-path-2"
                      alt="Check path"
                      src="https://c.animaapp.com/tJhVFtiO/img/check-path.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-4">
            <div className="chart">
              <div className="overlap-15">
              <img src="images/Chart.png" alt="" /> 
                <div className="columns">  
                </div>
              </div>
            </div> 
            <div className="top-2">
              <div className="tabs-3">
                <div className="overlap-group-13">
                  <div className="text-wrapper-13">Day</div>
                </div>
                <div className="text-wrapper-14">Week</div>
                <div className="text-wrapper-15">Month</div>
              </div>
              <div className="text-wrapper-16">Recent Stats</div>
              <p className="text-wrapper-49">More than 400+ new members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const page = () => {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default page