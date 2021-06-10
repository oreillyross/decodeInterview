import { LinkedList } from "./LinkedList";

interface Person {
  name: string;
}

const linkedList = new LinkedList<Person>();
linkedList.insertAtEnd({ name: "Bob" });
linkedList.insertInBegin({ name: "John" });
const list = linkedList.traverse();
console.log(list);
const found = linkedList.search(({ name }) => name === "Bob");
console.log(found);
export const usage = "empty string"