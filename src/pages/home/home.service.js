import http from "./api.service";

// Added mock data
class HomeDataService {
  getAll() {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: this.data
          });
      }, 300);
    });
    return promise;

    //return http.get("/tutorials");
  }

  get(id) {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: this.data.find(x => x.id)
          });
      }, 300);
    });

    return promise;

    //return http.get(`/tutorials/${id}`);

  }

  create(data) {

    var maxId = (this.data.reduce(function (prev, current) {

      if (+current.id > +prev.id) {
        return current;
      } else {
        return prev;
      }
    })?.id + 1) ?? 0;

    data.id = maxId;
    data.published = true;
    this.data.push(data);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: data
          });
      }, 300);
    });

    return promise;

    //return http.post("/tutorials", data);

  }

  update(id, data) {
    let tmp = this.data.find(x => x.id == id);
    if (tmp != null) {
      tmp.title = data.title;
      tmp.description = data.description;
      tmp.published = data.published;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: tmp
          });
      }, 300);
    });

    return promise;

    //return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    let index = this.data.findIndex(x => x.id == id);
    if(index > -1)
      this.data.splice(index, 1);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: null
          });
      }, 300);
    });

    return promise;

    //return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    this.data = [];


    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: null
          });
      }, 300);
    });

    return promise;

    //return http.delete(`/tutorials`);
  }

  findByTitle(title) {

    let tmp = this.data.filter(x => x.title.includes(title));
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
            data: [...tmp]
          });
      }, 300);
    });

    return promise;

    //return http.get(`/tutorials?title=${title}`);
  }

  data = [
    {
      id: 1,
      title: "title1",
      description: "description1",
      published: true
    }, {
      id: 2,
      title: "title2",
      description: "description2",
      published: true
    }, {
      id: 3,
      title: "title3",
      description: "description3",
      published: true
    }, {
      id: 4,
      title: "title4",
      description: "description4",
      published: true
    }, {
      id: 5,
      title: "title5",
      description: "description5",
      published: false
    },
  ];


}

export default new HomeDataService();