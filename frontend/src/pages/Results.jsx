const placeholderResult = {
  score: 78,
  skillsFound: ['JavaScript', 'React', 'HTML/CSS'],
  skillsMissing: ['Node.js', 'SQL'],
}

function Results() {
  return (
    <div>
      <h2>Analysis Results</h2>

      <p>Resume Score: {placeholderResult.score}/100</p>

      <h3>Skills Found</h3>
      <ul>
        {placeholderResult.skillsFound.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3>Skills to Improve</h3>
      <ul>
        {placeholderResult.skillsMissing.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Results