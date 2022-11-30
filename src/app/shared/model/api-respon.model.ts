export interface ApiResponse<t>{
    code: 200,
    status: "OK",
    message: "User signed in successfully",
    data: t
    //   email: "qwerty@mail.com",
    //   accessToken: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxd2VydHlAbWFpbC5jb20iLCJpYXQiOjE2Njk3MTQ4NjMsImV4cCI6MTY2OTcxNjY2M30.I9ZXPe9tOBkkSbXETfA1cENPVwICpvNh7_N5CPPblUQ73YZBWEPEUS_6eRkdLmrc-E_eIwHycXHa5MZBFo2FNw"
    
    
}