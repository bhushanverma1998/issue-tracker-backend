//Toggle Create modal of Project
$("#create-btn").click(()=>{
    $("#create-div-modal").addClass("modal-show");
    $("#create-btn").css("display","none");
})
$("#create-div-close").click((event)=>{
    event.preventDefault();
    $("#create-div-modal").removeClass("modal-show");
    $("#create-btn").css("display","block");
})