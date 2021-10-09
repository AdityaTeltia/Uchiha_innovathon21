export interface UserInfo {
  name: string;
  image_link: string;
  roomID: string;
}

export interface MessageProps {
  messages: string[];
  userInfo: UserInfo;
  socketID: string;
}
