import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterdoc, setFilterdoc] = useState();

  const { doctors } = useContext(AppContext)
  return (
    <div>
      <p>
        Browse through the doctors specialist
      </p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatracians</p>
          <p>Neurologist</p>
          <p>Gastreonterologist</p>
        </div>
        <div>
          {

          }
        </div>
      </div>

    </div>
  )
}

export default Doctors
