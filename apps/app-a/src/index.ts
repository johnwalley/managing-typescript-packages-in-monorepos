import { greet } from "lib-a";
import { greet as greetb } from "lib-b";
import { message } from "lib-c";

const app = document.getElementById("app")!;
app.textContent = `${greet('John')} and ${greetb('John')} and ${message('John')}`;