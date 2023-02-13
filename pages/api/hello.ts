// Next.js Edge API Routes: https://nextjs.org/docs/api-routes/edge-api-routes

import type { NextRequest } from 'next/server'

export const config = {  
  runtime: 'edge',
}

export default async function (req: NextRequest) {  
  return Response.json({ name: 'John Doe' })
}

