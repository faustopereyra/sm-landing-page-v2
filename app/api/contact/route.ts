import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  objective: z.string().min(10, "Objective must be at least 10 characters").max(2000, "Objective must be less than 2000 characters"),
  isCourseUser: z.boolean()
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the input data
    const validatedData = contactFormSchema.parse(body)

    // Send to webhook
    const response = await fetch(process.env.WEBHOOK_N8N_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    )
  }
} 