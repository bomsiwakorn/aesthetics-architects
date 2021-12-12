function openSidebar() {
  const sidebar = document.querySelector('.nav-menu-all')
  const closeIcon = document.querySelector('.icon-close-sidebar')
  sidebar.style.left = '0'
  sidebar.style.opacity = '1'
  closeIcon.style.display = 'flex'
  document.querySelector('html').style.overflow = 'hidden'
}

function closeSidebar() {
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.nav-menu-all')
    const closeIcon = document.querySelector('.icon-close-sidebar')
    sidebar.style.left = '800px'
    sidebar.style.opacity = '0'
    closeIcon.style.display = 'none'
    document.querySelector('html').style.overflow = 'auto'
  }
}

let isShowAboutMenu = false
function toggleSubMenu() {
  let aboutMenu
  if (window.innerWidth <= 768) {
    aboutMenu = document.querySelector('.navbar-menu-sub-items-m')
  } else {
    aboutMenu = document.querySelector('.navbar-menu-sub-items')
  }
  const iconArrowAboutM = document.querySelector('.icon-arrow-sub-menu-about-m')
  const iconArrowAboutD = document.querySelector('.icon-arrow-sub-menu-about-d')

  if (isShowAboutMenu) {
    aboutMenu.style.setProperty('padding', '0', 'important')
    aboutMenu.style.height = '0'
    if (window.innerWidth <= 768) {
      iconArrowAboutM.style.transform = 'rotate(0deg)'
    } else {
      iconArrowAboutD.style.transform = 'rotate(0deg)'
    }
    isShowAboutMenu = false
  } else {
    aboutMenu.style.height = '94px'
    aboutMenu.style.setProperty('padding', '1rem', 'important')
    if (window.innerWidth <= 768) {
      iconArrowAboutM.style.transform = 'rotate(180deg)'
    } else {
      iconArrowAboutD.style.transform = 'rotate(180deg)'
    }
    isShowAboutMenu = true
  }
}
