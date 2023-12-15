//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(post) {
    this.post = post;
  }
  addPost(newPost) {
    this.post.push(newPost);
  }
  sharePost() {
    console.log(`You've shared post ${Post.title}`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}

class Comment {
  constructor(id, content, createBy, like) {
    this.id = id;
    this.content = content;
    this.createBy = createBy;
    this.like = like;
  }
  addLike() {
    this.like++;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(newGroup) {
    this.groupList.push(newGroup);
  }
  addPage(newPage) {
    this.pageList.push(newPage);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send() {
    console.log(
      `Notification: ${User.name} has just commented on this post-${Post.title}`
    );
  }
}
