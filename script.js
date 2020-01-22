
 let roles = ["Городничий", "Аммос Федорович", "Артемий Филиппович", "Лука Лукич"];
 
        let text = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`;

let arrayText = text.split("\n").map((text, index) => `${index+1}) ${text}`);
let newText = "";
for (let i = 0; i < roles.length; i++) {
    newText += roles[i] + ":\n";

    for (let j = 0; j < arrayText.length; j++) {

        if (arrayText[j].includes(roles[i] + ":")) {
            newText += arrayText[j].replace(`${roles[i]}:`, "") +"\n";
        }
    }

    newText += "\n";
}
document.querySelector("body").innerHTML = newText.replace(/\n/g,"<br>");
  