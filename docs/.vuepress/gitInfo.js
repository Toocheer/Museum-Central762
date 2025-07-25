const moment = require('moment')
const { execSync } = require('child_process');

// 获取当前项目的最新commit信息
const getLastCommitInfo = () => {
  const timestamp = execSync('git log -1 --pretty=%ct').toString().trim();
  const commitHash = execSync('git log -1 --pretty=%h').toString().trim();
  const date = moment.unix(parseInt(timestamp)).format('YYYY-M-D');

  return {
    date,
    commitHash,
  };
};

module.exports = getLastCommitInfo;
