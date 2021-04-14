var list= document.getElementById("list");

function fun()
{
    var text=document.getElementById("input").value;
    axios.get(`http://api.tvmaze.com/search/shows?q=${text}`)
    
.then(res=>{
    console.log(res);
    document.getElementById("input").value="";
    for(let item of res.data)
    {
        if(item.show.image)
       { console.log(item.show.image);
        const img= document.createElement("img");
        img.src=item.show.image.medium;
        img.setAttribute('class','img-thumbnail');
        img.style.margin='20px';
        list.append(img);
       }
    }
}).catch();
}


$("#input").keydown(e=>{
if(e.keyCode==13 )
{
    fun();
}
});



$("#btn").click(()=>{
    console.log("clicked");
fun();
});
