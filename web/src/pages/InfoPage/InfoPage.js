import BlogLayout from 'src/layouts/BlogLayout'
import React from 'react'
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'
import { string } from 'prop-types'

const InfoPage = () => {
  const [file, setFile] = React.useState(null)
  const [countryId, setCountryId] = React.useState('217')
  const [statesID, setStateId] = React.useState('3528')

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const changeCountry = (event) => {
    setCountryId(event.target.value)
  }

  const changeState = (event) => {
    setStateId(event.target.value)
  }

  const selectCountry = () => {
    const arr = csc.getAllCountries()

    return (
      <select
        className="form-control"
        name="Country"
        id="country"
        onChange={changeCountry}
        required
      >
        {arr.map((elem, idx) => (
          <option key={idx} value={elem.id} selected={elem.name === 'Thailand'}>
            {elem.name}
          </option>
        ))}
      </select>
    )
  }

  const selectState = () => {
    const states = csc.getStatesOfCountry(countryId)

    return (
      <select
        className="form-control"
        name="State"
        id="state"
        onChange={changeState}
        required
      >
        {states.map((elem, idx) => (
          <option key={idx} value={elem.id} selected={elem.name === 'Bangkok'}>
            {elem.name}
          </option>
        ))}
      </select>
    )
  }

  const selectCities = () => {
    const cities = csc.getCitiesOfState(statesID)

    return (
      <select className="form-control" name="Cities" id="cities">
        {cities.map((elem, idx) => (
          <option key={idx} value={elem.id} selected={elem.name === 'Bangkok'}>
            {elem.name}
          </option>
        ))}
      </select>
    )
  }

  return (
    <BlogLayout>
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              onChange={handleChange}
            ></input>
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              {!file ? 'Choose file' : file.name}
            </label>
          </div>
        </div>

        <img
          src={!file ? null : URL.createObjectURL(file)}
          width="250"
          height="300"
        />

        <div className="form-group row">
          <div className="col-1">
            <label name="Student ID">Student ID:</label>
          </div>
          <div className="col-2 -ml0.5">
            <input
              type="text "
              className="form-control-plaintext"
              id="student-id"
              aria-describedby="StudentID"
              placeholder="Student ID"
              readOnly
            />
          </div>
          <div className="col-1">
            <label name="CMKL Email">CMKL Email:</label>
          </div>
          <div className="col-2 -ml0.5">
            <input
              type="text "
              className="form-control-plaintext"
              id="cmkl-email"
              aria-describedby="CMKLEmail"
              placeholder="CMKL Email"
              readOnly
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <label name="First Name">First Name</label>
          </div>
          <div className="col-4">
            <label name="Middle Name">Middle Name</label>
          </div>
          <div className="col-4">
            <label name="Last Name">Last Name</label>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="first-name"
              aria-describedby="FirstName"
              placeholder="First Name"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="middle-name"
              aria-describedby="MiddleName"
              placeholder="Middle Name"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="last-name"
              aria-describedby="LastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <label htmlFor="Genders">Gender:</label>
          </div>
          <div className="col-4">
            <label name="Phone Number">Phone Number</label>
          </div>
          <div className="col-4">
            <label name="Region">Region</label>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-4">
            <select
              name="Genders"
              id="genders"
              className="form-control"
              data-gender="Gender"
              required
            >
              <option value="Choose your Gender" disabled selected>
                Choose your gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="phone-number"
              aria-describedby="PhoneNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="region"
              aria-describedby="PhoneNumber"
              placeholder="Region"
              required
            />
          </div>
        </div>
        <div className="form-group row-3">
          <label className="form-email" name="Personal Email">
            Personal Email
          </label>
        </div>
        <div className="form-group row-5">
          <input
            type="text "
            className="form-control"
            id="personal-email"
            aria-describedby="PersonalEmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group row-5">
          <label name="Address">Address</label>
        </div>
        <div className="form-group row">
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="address"
              aria-describedby="Address"
              placeholder="Address"
              required
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="address-detail"
              aria-describedby="AddressDetail"
              placeholder="Address2"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-3">
            <label name="Country">Country</label>
          </div>
          <div className="col-3">
            <label name="State">State</label>
          </div>
          <div className="col-3">
            <label name="City">City</label>
          </div>
          <div className="col-3">
            <label name="ZIP Code">ZIP Code</label>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-3">{selectCountry()}</div>
          <div className="col-3">{selectState()}</div>
          <div className="col-3">{selectCities()}</div>
          <div className="col-3">
            <input
              type="text "
              className="form-control"
              id="zip-code"
              aria-describedby="ZipCode"
              placeholder="Zip Code"
            ></input>
          </div>
        </div>
        <label name="Emergency Contact">Emergency Contact</label>
        <div className="form-group row mr-10">
          <div className="col-4">
            <label name="First Name">First Name</label>
          </div>
          <div className="col-4">
            <label name="Middle Name">Middle Name</label>
          </div>
          <div className="col-4">
            <label name="Last Name">Last Name</label>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="first-name"
              aria-describedby="FirstName"
              placeholder="First Name"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="middle-name"
              aria-describedby="MiddleName"
              placeholder="Middle Name"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="last-name"
              aria-describedby="LastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-4">
            <label name="Relationship">Relationship</label>
          </div>
          <div className="col-4">
            <label name="E-Phone Number">Phone Number</label>
          </div>
          <div className="col-4">
            <label name="E-Email">Email</label>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="first-name"
              aria-describedby="FirstName"
              placeholder="Relationship"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="middle-name"
              aria-describedby="MiddleName"
              placeholder="Phone Number"
            />
          </div>
          <div className="col-4">
            <input
              type="text "
              className="form-control"
              id="last-name"
              aria-describedby="LastName"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-0">
            <button type="button" className="btn btn-primary">
              Edit
            </button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </form>
    </BlogLayout>
  )
}

export default InfoPage
