AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",() => {
            console.log("marker is found")
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",() => {
            console.log("marker is lost")
            this.handleMarkerLost();
        });
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex";

        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        ratingButton.addEventListener("click", ()=>{
            swal({
                icon:"https://cdn-icons-png.flaticon.com/512/4001/4001136.png",
                title:"Rate Our Toys",
                text:"Processing...."
            });
        });
        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://cdn-icons-png.flaticon.com/512/2421/2421855.png",
                title:"Thanks for your Order!",
                text:"Your order will be delivered soon.."
            })
        })
    },

    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none"
    }
})