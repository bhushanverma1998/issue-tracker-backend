//Toggle Create modal of Project
$("#project-create-issue-btn").click(()=>{
    $("#project-create-issue-modal").addClass("modal-show");
    $("#project-create-issue-btn").css("display","none");
})
$("#create-div-close").click((event)=>{
    event.preventDefault();
    $("#project-create-issue-modal").removeClass("modal-show");
    $("#project-create-issue-btn").css("display","block");
})
