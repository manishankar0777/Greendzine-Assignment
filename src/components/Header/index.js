import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <Link to="/home">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/12/06/26/home-2741413_960_720.png"
          alt="home"
          className="home-image"
        />
      </Link>
    </div>
    <div>
      <Link to="/employee">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfa5H3kxgDRUMcOJqThSFWIE98q8USmLH8GA&usqp=CAU"
          alt="employee logo"
          className="home-image"
        />
      </Link>
    </div>
  </div>
)

export default Header
