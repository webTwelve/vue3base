import { request } from '@/service/index'
import type { RootObject } from '@/api/type'
import type { IGetCourses, IGetCoursesParams } from './type'
enum ELogin {
  get_course = '/gaokaoInfo/v1/courses'
}

export const GetCourse = (params: IGetCoursesParams) => {
  return request.get<RootObject<IGetCourses>>({
    url: ELogin.get_course,
    params
  })
}
