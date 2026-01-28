import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    // 🔴 THIS LINE IS CRITICAL
    await auth.authorize()

    const sheets = google.sheets({ version: 'v4', auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          name,
          email,
          phone || '',
          message,
          new Date().toLocaleString(),
        ]],
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('GOOGLE SHEETS ERROR:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
