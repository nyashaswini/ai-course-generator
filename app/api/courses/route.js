import { db } from '@/configs/db'
import { CourseList } from '@/configs/Schema'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 0
    const limit = parseInt(searchParams.get('limit')) || 6
    const offset = page * limit

    const courses = await db.select().from(CourseList)
      .limit(limit)
      .offset(offset)

    return Response.json({ courses })
  } catch (error) {
    console.error('Error fetching courses:', error)
    return Response.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}
