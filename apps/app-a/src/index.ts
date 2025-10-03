import { greet } from "lib-a";
import { greet as greetb } from "lib-b";

const app = document.getElementById("app")!;
app.textContent = `${greet('John')} and ${greetb('John')}`;