export interface ApiResponse<T>{
    code: string,
    status: string,
    message: string,
    data: T
    //   email: "qwerty@mail.com",
    //   accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2VydHlAbWFpbC5jb20iLCJpYXQiOjE2Njk3MTQ4NjMsImV4cCI6MTY2OTcxNjY2M30.I9ZXPe9tOBkkSbXETfA1cENPVwICpvNh7_N5CPPblUQ73YZBWEPEUS_6eRkdLmrc-E_eIwHycXHa5MZBFo2FNw"
    
    
}