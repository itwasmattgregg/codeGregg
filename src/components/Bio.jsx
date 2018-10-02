import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// import profilePic from './profile-pic.jpg'

const Bio = () => (
  <div
    style={{
      display: 'flex',
    }}
  >
    {/* <img
      src={profilePic}
      alt={`Kyle Mathews`}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
      }}
    /> */}
    <p>
      Written by <strong>Matt Gregg</strong> who lives and works in Minneapolis, MN
    </p>
  </div>
)

export default Bio
