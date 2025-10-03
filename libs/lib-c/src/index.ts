import { greet } from "lib-a";

export function message(name: string) {
    return `${greet(name)} via lib-c!`;
}
