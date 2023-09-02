const userHasScrolledDown = {scroll: 0}
const story = document.getElementById('story')
const storyStyles = window.getComputedStyle(story);


window.addEventListener('scroll', function() {
    
    userHasScrolledDown.scroll = Math.abs(document.body.scrollHeight - window.scrollY - window.innerHeight + parseInt(storyStyles.getPropertyValue("margin-top")) + parseInt(storyStyles.getPropertyValue("margin-bottom")))

    }
)

function scrolldown() {

    setTimeout(function() {
        if(userHasScrolledDown.scroll <= 1) {
        window.scrollBy({top: 1000, behavior: 'smooth'});
        }
        scrolldown();
    }, 1000)

}

scrolldown();