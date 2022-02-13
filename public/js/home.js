window.onscroll = () => {
  animateOverviewNumber()
  animateAboutPage()
  animateShowNavbar()
}

let viewed = false
function animateOverviewNumber() {
  const yearOfExperienceNumber = document.getElementById(
    'YearOfExperienceNumber'
  )
  const ourProjectsNumber = document.getElementById('OurProjectsNumber')
  const totalAwardsNumber = document.getElementById('TotalAwardsNumber')
  const overviewPage = document.getElementById('OverviewPage')
  const distance = overviewPage.offsetTop - window.innerHeight
  let animateNumberExperience = 0
  let animateNumberProject = 0
  let animateNumberAward = 0
  if (distance < window.pageYOffset && !viewed) {
    const experienceInterval = setInterval(() => {
      if (animateNumberExperience < 30) {
        animateNumberExperience += 1
        yearOfExperienceNumber.innerHTML = animateNumberExperience + '+'
      }
      if (animateNumberExperience === 30) {
        clearInterval(experienceInterval)
      }
    }, 100)
    const projectInterval = setInterval(() => {
      if (animateNumberProject < 200) {
        animateNumberProject += 10
        ourProjectsNumber.innerHTML = animateNumberProject + '+'
      }
      if (animateNumberProject === 200) {
        clearInterval(projectInterval)
      }
    }, 140)
    const awardInterval = setInterval(() => {
      if (animateNumberAward < 18) {
        animateNumberAward += 1
        totalAwardsNumber.innerHTML = animateNumberAward + '+'
      }
      if (animateNumberAward === 18) {
        clearInterval(awardInterval)
      }
    }, 170)
    viewed = true
  }
  // if (window.pageYOffset === 0) {
  //   viewed = false;
  //   animateNumberExperience = 0;
  //   animateNumberProject = 0;
  //   animateNumberAward = 0;
  // }
}

let showedCardAbout = false
function animateAboutPage() {
  const image = document.querySelector('.about-image-wrapper')
  const info = document.querySelector('.about-info-wrapper')
  const aboutPage = document.getElementById('AboutPage')
  const halfWindowPageY = window.pageYOffset / 2
  const distance = aboutPage.offsetTop - halfWindowPageY
  if (distance < window.pageYOffset && !showedCardAbout) {
    if (window.innerWidth <= 768) {
      image.style.top = '0'
      info.style.bottom = '0'
      info.style.height = '100%'
      info.style.padding = '1rem'
    } else {
      image.style.left = '0'
      info.style.right = '0'
    }
    showedCardAbout = true
  }
}

function animateShowNavbar() {
  const navbar = document.getElementById('NavbarPage')
  if (window.pageYOffset > 0) {
    navbar.style.background = 'rgba(0, 0, 0, 0.4)'
  } else {
    navbar.style.background = 'none'
  }
}

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
    aboutMenu.style.height = '122px'
    aboutMenu.style.setProperty('padding', '1rem', 'important')
    if (window.innerWidth <= 768) {
      iconArrowAboutM.style.transform = 'rotate(180deg)'
    } else {
      iconArrowAboutD.style.transform = 'rotate(180deg)'
    }
    isShowAboutMenu = true
  }
}
