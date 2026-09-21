const placeholderJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    match: 85,
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeWorks',
    match: 72,
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'DataHive',
    match: 64,
  },
]

function JobListings() {
  return (
    <div>
      <h2>Job Listings</h2>

      <ul>
        {placeholderJobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> at {job.company} — {job.match}% match
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JobListings