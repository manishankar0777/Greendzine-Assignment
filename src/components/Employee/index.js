import {Component} from 'react'
import {IoMdSearch} from 'react-icons/io'
import Details from '../DetailsofEmployees'
import Header from '../Header'
import Group1 from '../img/Group1.png'
import moptrologo from '../img/moptrologo.png'
import './index.css'

class Employee extends Component {
  employees = [
    {
      ID: 1,
      Name: 'Arjun',
      DOB: '16-11-2000',
      Role: 'Software Engineer',
    },
    {
      ID: 2,
      Name: 'Mahesh',
      DOB: '16-11-1998',
      Role: 'Software Engineer',
    },
    {
      ID: 3,
      Name: 'Prakash',
      DOB: '16-11-2004',
      Role: 'Software Engineer',
    },
    {
      ID: 4,
      Name: 'Prakash',
      DOB: '16-11-1999',
      Role: 'Software Engineer',
    },
    {
      ID: 5,
      Name: 'Teja',
      DOB: '16-11-2001',
      Role: 'Software Engineer',
    },
    {
      ID: 6,
      Name: 'Mukesh',
      DOB: '16-11-2002',
      Role: 'Software Engineer',
    },
    {
      ID: 7,
      Name: 'Hitesh',
      DOB: '16-1-2000',
      Role: 'Software Engineer',
    },
  ]

  state = {result: this.employees, name: ''}

  getDetails = () => {
    const {result, name} = this.state
    const x = result.filter(each =>
      each.Name.toLowerCase().includes(name.toLowerCase()),
    )
    return x
  }

  onSearch = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {result} = this.state
    const filter = this.getDetails(result)
    if (filter.length === 0) {
      return (
        <div className="home-page">
          <div>
            <div className="home-page1">
              <img src={Group1} className="logo46" alt="logo2" />
            </div>
            <div className="home-page2">
              <img src={moptrologo} alt="logo1" />
            </div>
            <div className="details-each-employee">
              <div className="bar">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search with name"
                    className="name-text"
                    onChange={this.onSearch}
                  />
                  <IoMdSearch className="search-logo" />
                </div>
              </div>
              <p className="not-found">Not Found</p>
            </div>
          </div>
          <div className="navigate">
            <Header />
          </div>
        </div>
      )
    }
    return (
      <div className="home-page">
        <div>
          <div className="home-page1">
            <img src={Group1} className="logo46" alt="logo2" />
          </div>
          <div className="home-page2">
            <img src={moptrologo} alt="logo1" />
          </div>
          <div className="details-each-employee">
            <div className="bar">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search with name"
                  className="name-text"
                  onChange={this.onSearch}
                />
                <IoMdSearch className="search-logo" />
              </div>
            </div>
            <div>
              {filter.map(each => (
                <Details tes={each} key={each.ID} />
              ))}
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

export default Employee
