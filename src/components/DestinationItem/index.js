import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {name, imgUrl} = eachDestination
  return (
    <li className="card-container">
      <img className="image-card" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
/*https://vidyadestine.ccbp.tech*/
