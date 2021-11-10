import type { UserValue } from "./types";

export async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log("fetching user", username);

  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: {
          name: { first: string; last: string };
          login: { username: string };
        }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        })
      )
    );
}
