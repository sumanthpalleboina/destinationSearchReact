import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="destination-card">
      <img src={imgUrl} alt="destinationImage" className="image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
