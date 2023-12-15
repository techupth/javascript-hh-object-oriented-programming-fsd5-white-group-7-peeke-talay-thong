//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = posts ?? [];
  }
  addPost(newPost) {
    return this.posts.push({ ...newPost });
  }
  sharePost(postTitle) {
    for (let post of this.posts) {
      if (post.title === postTitle) {
        return console.log(`You've shared post ${post.title} to your friend.`);
      } else {
        return console.log(`Post with title "${postTitle}" not found.`);
      }
    }
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment ?? [];
  }
  addComment(newComment) {
    return this.comment.push({ ...newComment });
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = like ?? 0;
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
  addGroup() {
    this.groupList++;
  }
  addPage() {
    this.pageList++;
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
  send(newComment, post) {
    return `Notification: ${newComment.createdBy} has just commented on this post—"${post.title}”`;
  }
}

// const firstComment = new Comment("2345", "Description", "Talay", 1);
// const secondComment = new Comment("5913", "Description", "John");
// const test = new Post("1223", "title-test", "content details");

// test.addComment(firstComment);
// test.addComment(secondComment);

// const notification = new Notification("11");

// console.log(test);
// console.log(notification.send(firstComment, test));
