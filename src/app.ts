import express, { Request, Response } from 'express'
import { QueryConfig } from 'pg'
import { pool } from './db'

export const app = express()

type Url = {
  id: number
  user_id: number
  original_url: string
  shorten_url_hash: string
}

app.get('/urls', async (_: Request, res: Response) => {
  const response = await pool.query<Url>(`SELECT * from urls;`)

  const urls = response.rows

  res.json(urls)
})

app.get('/urls/:id', async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params

  const query: QueryConfig = {
    text: `SELECT * from urls WHERE id = $1;`,
    values: [id],
  }

  const response = await pool.query<Url>(query)

  const urls = response.rows

  res.json(urls[0])
})
