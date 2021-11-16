import type { NextApiRequest, NextApiResponse } from "next";

const API_URL = `${process.env.API_URL}/recipes`
const options: RequestInit = {
  method: 'GET',
  headers: { 
    Authorization: `Token ${process.env.API_TOKEN}`
  }
}

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  const {slug} = req.query;
  console.log(slug)
  
  try {
    const res = await fetch(`${API_URL}/${slug}`, options)
    const data = await res.json()
    if (res.ok) {
      return response.status(200).json(data)
    } 
    return response.status(404).json({
      message: 'Recipe not found'
    })
  } catch (err) {
    console.error(err)
  }
}