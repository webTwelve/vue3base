export interface IGetCoursesParams {
  page_index: number
  page_size: number
}

export interface IGetCourses {
  count: number
  list: List[]
}

interface List {
  course_information_id: number
  course_information_title: string
  course_information_describe: string
  course_information_cover: string
  course_information_vod_url: string
  reading_amount: number
}
