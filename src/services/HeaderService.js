import { accessToken } from "../config/config";

export default function HeaderService() {
  if (accessToken) {
    return { Authorization: "Bearer " + accessToken };
  } else {
    return {};
  }
}
