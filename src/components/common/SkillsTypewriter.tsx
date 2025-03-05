import React from 'react'
import Typewriter from 'typewriter-effect'

export default function SkillsTypewriter(): React.JSX.Element {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Full-Stack Developer',
          'Django & MERN Stack',
          'Master of Science in Computer Science',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
