/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// variable for  the unordered list
const nav_list = document.getElementById('navbar__list');
// variable fo the sections object
const sections = document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//start generate dynamic naviagtion bar helper function
function dynamic_nav(){
    /*
    this function generate naviagtion bar dynamically accourding to number of section
    */ 
    for (section of sections){
        //Section name from section data-nav for list
        const section_name = section.getAttribute('data-nav');

        //Section Id for naviagtion to sections
        const section_ID = section.getAttribute('id');

        //create anchor element
        const anchor_element = document.createElement('a');

        //Attribute for the class attribute
        const attribute_class = document.createAttribute('class');
        attribute_class.value = 'menu__link';

        //Attribute for the href attribute
        const attribute_href = document.createAttribute('href');
        attribute_href.value = `#${section_ID}`

        
        //add  attributes
        anchor_element.setAttributeNode(attribute_class);
        anchor_element.setAttributeNode(attribute_href);
        anchor_element.textContent = section_name;

        //make the li element
        const list_element = document.createElement('li');
        //append the anchor element to the list element
        list_element.appendChild(anchor_element);

        //append the list to the navigation bar
        nav_list.appendChild(list_element);
    };
};
//end generate dynamic naviagtion bar helper function

//start section animation activation of helper functions
function location_validation (location){
    /*
    THis function generate the co-ordination
    input: section elements
    return : true or false depend on the section loaction
    */
        const bounderies = location.getBoundingClientRect();
        /*
        the boundries between 1200 and 0,since the section around 650 so 
        we don't want to dis-activate the animation once we get out of 650
        */
        if ((bounderies.top>0) && (1200>=bounderies.bottom>0) ){
            return true
        }else{
            return false
        }
    };

    function section_animation(){
    /**
     * this function for EventListner to check which section should be active
     */
        for (section of sections){
            if(location_validation(section)){
                if(!(section.classList.contains('your-active-class'))){
                    section.classList.add('your-active-class');
                }
            }else{
                section.classList.remove('your-active-class');
            };
        };
};
//end of helper functions

// Hide fixed navigation bar while not scrolling 
function hide_navi(){
    document.querySelector('.navbar__menu').style.display = 'none';
};

// unHide fixed navigation bar while scrolling 
function unhide_navi(){
    document.querySelector('.navbar__menu').style.display = 'block';
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build  the nav
dynamic_nav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.addEventListener('scroll',function(){
    section_animation();
    unhide_navi();
    setTimeout(hide_navi,3000);
});

// 
// setTimeout(hide_navi,3000);
setTimeout(hide_navi,2500);

// Set sections as active


