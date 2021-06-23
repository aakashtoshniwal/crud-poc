
import http from "../http-common";

class StudentDataService {
  getAll() {
    return http.get("/");
  }

  get(id: string) {
    return http.get(`/${id}`);
  }

  create(data: any) {
    return http.post("/", data);
  }

  update(id: number, data: any) {
    return http.put(`/${id}`, data);
  }

  delete(id: number) {
    return http.delete(`/${id}`);
  }


}

export default new StudentDataService();