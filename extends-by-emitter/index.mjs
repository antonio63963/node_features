import EventEmitter from "events";

class Post extends EventEmitter {
  constructor(name, text) {
    super();
    this.name = name;
    this.text = text;
    this.likes = 0;
    this.on("like", (userName) => console.log(`${userName} liked your post.`));
    this.on("error", (err) => console.error(err));
  }

  incLikes(name) {
    if(!name) {
      return this.emit('error',  new Error('No user name in the like function!'));
    }
    this.likes += 1;
    this.emit('like', name);
  }

  toString() {
    console.log(`
      name: ${this.name},
      text: ${this.text},
      likes: ${this.likes}
      `);
  }
}

const post = new Post("Tony", "SOme very interesting post...");

post.toString();


setTimeout(() => post.incLikes("Fed"), 100);
setTimeout(() => post.incLikes(), 300);
setTimeout(() => post.incLikes("Boob"), 500);
