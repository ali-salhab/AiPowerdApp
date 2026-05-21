import {get_encoding} from "tiktoken";




const enc = get_encoding("cl100k_base");

const text = "ali sahab ull stac wfdsa !";
const tokens = enc.encode(text);

console.log(tokens);