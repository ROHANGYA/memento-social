export type UserType = {
  username: string;
  profileImage?: string | Base64URLString;
  email: string;
};

export default class User {
  username: string;
  profileImage?: string | Base64URLString;
  email: string;

  constructor(user: UserType) {
    this.username = user.username;
    this.profileImage = user.profileImage;
    this.email = user.email;
  }
}

export const mockUser = new User({
  username: "John Doe",
  profileImage: "https://picsum.photos/200",
  email: "john@test.com",
});
