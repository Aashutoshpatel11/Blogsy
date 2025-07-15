import React from 'react'
import ShinyText from './Animation/ShinyText'

function Logo({ width = '100px' }) {
  return (
    <ShinyText
      text="Blogsy"
      disabled={false}
      speed={3}
      className="font-bold text-3xl"
    />
  );
}

export default Logo
