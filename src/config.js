const dbBaseUrl = process.env.REACT_APP_DB_SERVER_BASE_URL

export default {
  dbBaseUrl,
  endpoints: {
    getTransactions: `${dbBaseUrl}/transactions`,
    getPrice: 'https://brainblocks.io/api/exchange'
  }
}
