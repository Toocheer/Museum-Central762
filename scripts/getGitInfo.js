const cp = require('child_process')

try {
  const gitHash = cp.execSync('git rev-parse HEAD').toString().trim()
  const gitDate = cp.execSync('git log -1 --format=%cd').toString().trim()

  console.log('  Hash:', gitHash)
  console.log('  Date:', gitDate)
} catch (err) {
  console.error('Error retrieving git information:', err)
  process.exit(1)
}
