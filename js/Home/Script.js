// Script for slider
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
// 
var Tab_About = document.getElementById('About-Tab');
var Tab_Skills = document.getElementById('Skills-Tab');
var Tab_Services = document.getElementById('Services-Tab');
var Tab_Project = document.getElementById('Project-Tab');
var Tab_Blog = document.getElementById('Blog-Tab');
var Tab_Contact = document.getElementById('Contact-Tab');
function TabChange(SectionName)
{
    switch (SectionName)
    {  
        case 'Home' :
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'About':
            {
                Tab_About.classList.add('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'Skills':
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.add('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'Services':
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.add('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'Project':
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.add('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'Blog':
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.add('active');
                Tab_Contact.classList.remove('active');
                break;
            }
        case 'Contact':
            {
                Tab_About.classList.remove('active');
                Tab_Skills.classList.remove('active');
                Tab_Services.classList.remove('active');
                Tab_Project.classList.remove('active');
                Tab_Blog.classList.remove('active');
                Tab_Contact.classList.add('active');
                break;
            }
            
    }
}
function Hide(el)
{  
  el.classList.add('hidden');
}
function Show(el)
{  
  el.classList.remove('hidden');
}
function ShowDetail(N)
{
    var el= document.getElementById(N);
    el.children[0].classList.remove('HideDetail');
    el.children[1].classList.remove('HideDetail');
    el.children[2].classList.remove('HideDetail');

    el.children[0].classList.add('ShowDetail');
    el.children[1].classList.add('ShowDetail');
    el.children[2].classList.add('ShowDetail');
    el.classList.remove('CloseDetail');
    el.classList.add('OpenDetail');
}
function HideDetail(N)
{
    var el= document.getElementById(N);
    el.children[0].classList.remove('ShowDetail');
    el.children[1].classList.remove('ShowDetail');
    el.children[2].classList.remove('ShowDetail');

    el.children[0].classList.add('HideDetail');
    el.children[1].classList.add('HideDetail');
    el.children[2].classList.add('HideDetail');
    el.classList.remove('OpenDetail');
    el.classList.add('CloseDitail');
}