// import "./style.css";

let names: string[] = ["alice"]

function input(name:string) {

  if (name === "" || !name) {
    return "one for you one for me"
  }else{
    return `one for ${name} one for me`
  }


}
console.log(input(names[0]));
console.log(input(names[3]));
