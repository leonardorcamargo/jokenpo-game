import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

app.get('/dispute', (req, res) => {
	res.send('get /dispute')
	console.log('get /dispute')
})

app.post('/dispute', (req, res) => {
	res.send('post /dispute')
	console.log('post /dispute')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
})
