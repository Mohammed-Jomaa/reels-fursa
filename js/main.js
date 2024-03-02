const home_section = document.querySelector('.home_section');
const search_section = document.querySelector('.search_section');
const reels_section = document.querySelector('.reels_section');
const notifications_section = document.querySelector('.notifications_section');
const account_section = document.querySelector('.account_section');

home_btn.onclick = () => { setValue("reels_section"); }
search_btn.onclick = () => { setValue("reels_section"); }
reels_btn.onclick = () => { setValue("reels_section"); }
notify_btn.onclick = () => { setValue("reels_section"); }
account_btn.onclick = () => { setValue("reels_section"); }


function setValue(value1){
    let val1 = value1;
    home_section.classList.remove("active");
    search_section.classList.remove("active");
    reels_section.classList.remove("active");
    notifications_section.classList.remove("active");
    account_section.classList.remove("active");
    home_btn.className = "bi bi-house-door";
    reels_btn.className = "bi bi-camera-video";
    notify_btn.className = "bi bi-heart";
    account_btn.className = "bi bi-person";

    if(val1 == "home_section"){
        home_section.classList.add("active");
        home_btn.className = "bi bi-house-door-fill";
    } else if(val1 == "search_section"){
        search_section.classList.add("active");
    } else if(val1 == "reels_section"){
        reels_section.classList.add("active");
        reels_btn.className = "bi bi-camera-video-fill";
    } else if(val1 == "notifications_section"){
        notifications_section.classList.add("active");
        notify_btn.className = "bi bi-heart-fill";
    } else if(val1 == "account_section"){
        account_section.classList.add("active");
        account_btn.className = "bi bi-person-circle";
    }
}

// Home section - like btn
const post_likes = document.querySelectorAll('.container .home_section .bi-heart');
for(let i = 0; i < post_likes.length; i++){
    post_likes[i].onclick = () => {
        if((post_likes[i].classList.contains("bi-heart"))){
            post_likes[i].className = "bi bi-heart-fill";
        } else{
            post_likes[i].className = "bi bi-heart";
        }
    }
}



// reels video section
const video = document.querySelectorAll('.container video');

for(let i = 0; i < video.length; i++){
    video[i].addEventListener("mouseenter", () => {
        video[i].currentTime = 0;   
        video[i].play();
        video[i].loop = true;

        video[i].onclick = () => {
            if(video[i].paused){
                video[i].play();
            }else{
                video[i].pause();
            }
            like_counter.classList.remove("active");
        }

        // reels video like button setting 
        const parentDiv = video[i].parentElement;
        const like_btn = parentDiv.querySelector('.options .bi-heart');
        const comment_btn = parentDiv.querySelector('.options .bi-chat');
        const send_btn = parentDiv.querySelector('.options .bi-send');
        const share_video_btn = parentDiv.querySelector('.options .bi-three-dots-vertical');
        const like_btn_span = parentDiv.querySelectorAll('.options span');
        const setting_tools_btn = document.querySelector('.acc_top_part .right_part .bi-list');

        video[i].ondblclick = () => {
            if(!(like_btn.classList.contains("bi-heart-fill"))){
                setColor();
            }
        }

        const like_counter = parentDiv.querySelector('.like_counter');
        
        like_btn.onclick = () => {
            if(like_btn.classList.contains("bi-heart-fill")){
                removeColor();
            } else{
                setColor();
            }
        }

        for(let i = 0; i < like_btn_span.length; i++){
            if(i == 0){
                like_btn_span[0].onclick = () => {
                    like_counter.classList.toggle("active");
                }
            } 
        }
        const like_close_btn = document.querySelectorAll('.bi-x-lg');
        for(let counter_close of like_close_btn){
            counter_close.onclick = close_counter;
        }
        function close_counter(){
            like_counter.classList.remove('active');
            share_video.classList.remove('active');
            setting_tools.classList.remove('active');
        }
        // like reels video
        function setColor(){
            like_btn.className = "bi bi-heart-fill";
            like_btn.style.color = "red";
        }
        // unlike reels video
        function removeColor(){
            like_btn.style.color = "#fff";
                like_btn.classList.remove("bi-heart-fill");
                like_btn.classList.add("bi-heart");
        }
    });
    video[i].addEventListener("mouseleave", () => {
        video[i].pause();
    });
}

