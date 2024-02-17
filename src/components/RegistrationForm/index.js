import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    bothAreProvided: false,
  }

  getFormBack = () => {
    this.setState({bothAreProvided: false})
  }

  onSubmitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    this.onBlurFirstName()
    this.onBlurLastName()

    if (firstName !== '' && lastName !== '') {
      this.setState({bothAreProvided: true})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLastNameError: true})
    }
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  render() {
    const {firstName, lastName} = this.state

    const {showFirstNameError, showLastNameError, bothAreProvided} = this.state

    return (
      <div className="bgCon">
        <h1 className="heading">Registration</h1>
        {bothAreProvided ? (
          <div className="successCon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              className="successBtn"
              type="submit"
              onClick={this.getFormBack}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="formCon" onSubmit={this.onSubmitForm}>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              value={firstName}
              id="firstName"
              placeholder="First name"
              className="inputBox"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {showFirstNameError ? <p className="errorMsg">Required</p> : ''}
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              value={lastName}
              id="lastName"
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.onBlurLastName}
            />
            {showLastNameError ? <p className="errorMsg">Required</p> : ''}
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
