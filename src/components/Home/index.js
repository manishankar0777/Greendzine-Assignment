import {Component} from 'react'
import Header from '../Header'
import Group1 from '../img/Group1.png'
import moptrologo from '../img/moptrologo.png'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page1">
          <img src={Group1} className="logo46" alt="logo2" />
        </div>
        <div className="home-page2">
          <img src={moptrologo} alt="logo1" />
          <div className="employee-detail">
            <div className="employee-card">
              <h2>Employee Productivity Dashboard</h2>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Monday</p>
                <div className="layout"> </div>
              </div>
              <p className="percent">4%</p>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Tuesday</p>
                <div className="layout1"> </div>
              </div>
              <p className="percent">92%</p>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Wednesday</p>
                <div className="layout2"> </div>
              </div>
              <p className="percent">122%</p>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Thursday</p>
                <div className="layout3"> </div>
              </div>
              <p className="percent">93%</p>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Friday</p>
                <div className="layout4"> </div>
              </div>
              <p className="percent">89%</p>
            </div>
            <div className="details">
              <div>
                <p className="productivity">Productivity on Saturday</p>
                <div className="layout5"> </div>
              </div>
              <p className="percent">98%</p>
            </div>
          </div>
        </div>
        <div className="navigate">
          <Header />
        </div>
      </div>
    )
  }
}

export default Home
