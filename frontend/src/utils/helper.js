
export const getInitials=(name)=>{
    if(!name) return "";

    const words=name.split(" ");
    let initial="";

    for(var i=0;i<Math.min(words.length,2);i++){
        initial+=words[i][0];
    }

    return initial.toUpperCase();
}