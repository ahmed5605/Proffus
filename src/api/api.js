export function getCategories() {
    return(
        fetch(
            `https://60ffcd6bbca46600171cf51c.mockapi.io/category/`,
            {
              method: "GET",
            }
        )
        .then(res => res.json())
    )
}

export function getSimilarProducts() {
    return(
        fetch(
            `https://60ffcd6bbca46600171cf51c.mockapi.io/similarProducts/`,
            {
              method: "GET",
            }
        )
        .then(res => res.json())
    )
}

export function getAllProducts() {
    return(
        fetch(
            `https://60ffcd6bbca46600171cf51c.mockapi.io/Proffus/`,
            {
              method: "GET",
            }
        )
        .then(res => res.json())
    )
}

export function getSingleProduct(id) {
    return(
        fetch(
            `https://60ffcd6bbca46600171cf51c.mockapi.io/Proffus/`+id,
            {
              method: "GET",
            }
        )
        .then(res => res.json())
    )
}

export function getCategoryProducts(id) {
    if(id !== 0){
        console.log("get : " + id);
        return(
            fetch(
                `https://60ffcd6bbca46600171cf51c.mockapi.io/Proffus?categoryId=`+id,
                {
                  method: "GET",
                }
            )
            .then(res => res.json())
        )
    } else {
        console.log("get all"); 
        return(
            fetch(
                `https://60ffcd6bbca46600171cf51c.mockapi.io/Proffus/`,
                {
                  method: "GET",
                }
            )
            .then(res => res.json())
        )
    }
}