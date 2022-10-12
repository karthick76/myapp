Cookies.set("_bw",101, { expires:2 });

var myCookie = Cookies.get("_bw");

if(myCookie)
{
   console.log("Value Passed to Another Page");
}
else
{
    Cookies.set("_bw","404Found");
}
export{myCookie};