import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = `${process.env.API_URL}/recipes`
const options: RequestInit = {
  method: 'GET', 
  headers: {
    Authorization: `Token ${process.env.API_TOKEN}` 
  }
}

export default async function handler(_req: NextApiRequest, response: NextApiResponse) {

  try {
    const res = await fetch(
      API_URL,
      options
    );
    const data = await res.json()
    if (res.ok) {
      return response.status(200).json(data)
    } response.status(404).json({
      message: 'recipe not found'
    })
  } catch (e)   {
    console.error(e)
  }
}