// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <div className="alert-container">
        <div className="container">
          <AiFillCheckCircle className="success-icons" />
          <h1 className="success-text">Success</h1>
        </div>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <div className="alert-container">
        <div className="container">
          <RiErrorWarningFill className="error-icons" />
          <h1 className="error-text">Error</h1>
        </div>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <div className="alert-container">
        <div className="container">
          <MdWarning className="warning-icons" />
          <h1 className="warning-text">Warning</h1>
        </div>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotification = () => (
    <Notification>
      <div className="alert-container">
        <div className="container">
          <MdInfo className="info-icons" />
          <h1 className="info-text">Info</h1>
        </div>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="alert-container-app">
      <div className="responsive-container">
        <h1 className="text-heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}
export default AlertNotifications
