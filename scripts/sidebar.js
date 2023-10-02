

const menuOptions = [
    {

        href:"#",
        iconClass:"fa-house",
        label:"Home"
    }, {

        href:"#about",
        iconClass:"fa-circle-info",
        label:"About"
    }, {

        href:"#services",
        iconClass:"fa-folder",
        label:"Services"
    }, {

        href:"#faqs",
        iconClass:"fa-grear",
        label:"FAQs"
    },{
        href:"#",
        iconClass:"fa-message",
        label:'Contact'
    }
];

(function(){
    createSideBar()
 handleSideBarActions()
})()












function createSideBar(){
    const dSidebar = document.getElementById('d-sidebar');
    menuOptions.forEach((item)=>{
        const a = document.createElement('a');
        a.setAttribute('href',item.href)
        a.classList.add('hero-nav-item')

        const icon = document.createElement('i');
        icon.classList.add('fa-solid')
        icon.classList.add(item.iconClass)

        const label = document.createElement('span');
        // const text = document.createTextNode(item.label)
        //label.append(text)
        label.innerHTML = item.label
        a.append(icon,label)
        dSidebar.append(a)
    })
}


function handleSideBarActions(){
    const menuBtn = document.getElementById('menu-btn')
    menuBtn.addEventListener('click',function(){
     document.body.style.overflow = 'hidden'
     const sidebar = document.getElementById('sidebar');
     sidebar.classList.toggle('show-sidebar')
    
     const overlay = document.getElementById('overlay');
     overlay.classList.toggle('show-overlay')
    })
    
    const closeBtn = document.getElementById('sidebar-close-btn')
    closeBtn.addEventListener('click',onClose)
    
    const overlay = document.getElementById('overlay')
    overlay.addEventListener('click',onClose)
    
    function onClose(){
     document.body.style.overflow = 'auto'
     const sidebar = document.getElementById('sidebar');
     sidebar.classList.toggle('show-sidebar')
    
     const overlay = document.getElementById('overlay');
     overlay.classList.toggle('show-overlay')
    }
}
