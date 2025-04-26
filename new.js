let url = "https:catfact.ninja/fact";
fetch(url)
.then((autorigcome)=>{
    console.log(autorigcome);
})
.caches((autoerr)=>{
    console.log(`thia is your error ${autoerr}`);
});