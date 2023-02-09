fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))

setTimeout(()=>{
    console.log(1);
},1)




setTimeout(() => {
    console.log("first block");
    setTimeout(() => {
        console.log("second block");
    }, Math.random() * 30);
}, Math.random() * 30);
