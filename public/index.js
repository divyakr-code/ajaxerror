document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById("search-bar").style.display = "none";
    document.getElementById("result").style.display = "block";
    const search = document.getElementById("search").value;
    $.ajax({
        method: "get",
        url: `https://api.github.com/users/${search}`,
        success: (response) => {
            const userInfo = response;
            document.getElementById("showResult").innerHTML = `<div class="p-25px">
                                                                    <div class="row">
                                                                        <div class="col-lg-4">
                                                                            <img class="profileImage" src="${userInfo.avatar_url}">
                                                                        </div>
                                                                        <div class="col-lg-8">
                                                                            <h1>${userInfo.name}</h1>
                                                                            <p><b>GitHub UserName: ${userInfo.login}</b> </p>
                                                                            <p><b>Company: ${userInfo.company}</b> </p>
                                                                            <p><b>Location: ${userInfo.location}</b> </p>
                                                                        </div>
                                                                    </div>
                                                                </div>`
        },
        error: (response) => {
            console.log(response);
            document.getElementById("showResult").innerHTML = ` <div class="p-25px">
                                                                    <div class="alert alert-danger" role="alert">
                                                                        ${response.responseJSON.message}
                                                                    </div>
                                                                </div>`
        }
    })
})
​
// document.getElementById("back").addEventListener("click", () => {
//     document.getElementById("search-bar").style.display = "block"
//     document.getElementById("result").style.display = "none"
// })
// ​
// $("#searchForm").submit((e)=>{
//     e.preventDefault();
//     console.log("Submitted")
//     $("#search-bar").css("display", "none")
//     $("#result").css("display", "block")
// })