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