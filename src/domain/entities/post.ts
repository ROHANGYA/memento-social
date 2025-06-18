import { DateTime } from "luxon";
import User, { mockUser } from "./user";

export type PostType = {
  user: Pick<User, "username" | "profileImage">;
  body: string;
  image?: string | Base64URLString;
  numberOfLikes: number;
  numberOfComments: number;
  timestamp: string;
};

export default class Post {
  user: Pick<User, "username" | "profileImage">;
  body: string;
  image?: string | Base64URLString;
  numberOfLikes: number;
  numberOfComments: number;
  timestamp: string;

  constructor(post: PostType) {
    this.user = post.user;
    this.body = post.body;
    this.image = post.image;
    this.numberOfLikes = post.numberOfLikes;
    this.numberOfComments = post.numberOfComments;
    this.timestamp = post.timestamp;
  }

  static toJson(failure: Post): string {
    return JSON.stringify(failure);
  }

  static fromJson(failure: string): Post {
    return JSON.parse(failure);
  }
}

const postDate = DateTime.now().toFormat("dd LLL yyyy");

export const mockPostList = [
  new Post({
    user: { username: mockUser.username, profileImage: mockUser.profileImage },
    body: "Hello tis me, your friend",
    image: "https://picsum.photos/seed/test/500/200",
    numberOfLikes: 4,
    numberOfComments: 2,
    timestamp: postDate,
  }),
  new Post({
    user: { username: mockUser.username, profileImage: mockUser.profileImage },
    body: "How is everyone",
    image: "https://picsum.photos/seed/test1/500/200",
    numberOfLikes: 4,
    numberOfComments: 2,
    timestamp: postDate,
  }),
  new Post({
    user: { username: mockUser.username, profileImage: mockUser.profileImage },
    body: "Having dinner rn",
    image: "https://picsum.photos/seed/test2/500/200",
    numberOfLikes: 4,
    numberOfComments: 2,
    timestamp: postDate,
  }),
];
