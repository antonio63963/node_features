const userArr = [
  { name: "Tom", age: 32 },
  { name: "Ann", age: 52 },
  { name: "Bob", age: 44 },
  { name: "Dan", age: 22 },
];

class UserProvider {
  constructor(users) {
    this._users = users;
  }
  get users() {
    return [...this._users];
  }

  addUser = (user) => {
    console.log("addUSer: ", user);
    if (user.name && user.age) {
      this._users.push(user);
    } else {
      console.error(new Error("User params not found..."));
    }
  };
}

const userProvider = new UserProvider(userArr);

export default userProvider;
