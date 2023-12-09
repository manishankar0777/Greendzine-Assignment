import './index.css'

const Details = props => {
  const {tes} = props
  const {ID, Name, DOB, Role} = tes
  let t = ID % 2 === 0 ? 'even-num' : 'odd-num'
  return (
    <div className={`employees ${t}`}>
      <div>
        <h2>
          EMP ID : <span className="emp-id">{ID}</span>
        </h2>
        <h2>
          Name : <span className="name">{Name}</span>
        </h2>
        <h2>
          DOB : <span className="date-of-birth">{DOB}</span>
        </h2>
        <h2>
          Role : <span className="Role">{Role}</span>
        </h2>
      </div>
      <div className="number">{ID}</div>
    </div>
  )
}

export default Details
