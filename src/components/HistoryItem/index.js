/* eslint-disable arrow-body-style */

import './index.css'

const HistoryItem = props => {
  const {history, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item">
      <div className="time-logo-container">
        <p className="time-text">{timeAccessed}</p>
        <div className="logo-title-container">
          <img className="logo" src={logoUrl} alt="domain logo" />
          <div className="desc-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button data-testid="delete" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="del-logo"
        />
      </button>
    </li>
  )
}

export default HistoryItem
