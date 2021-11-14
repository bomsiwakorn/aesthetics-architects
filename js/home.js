window.onscroll = () => {
  animateOverviewNumber()
  toggleShowNavbar()
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

function toggleShowNavbar() {
  const navbar = document.getElementById('NavbarPage')
  if (window.pageYOffset > 0) {
    navbar.style.background = 'rgba(0, 0, 0, 0.4)'
  } else {
    navbar.style.background = 'none'
  }
}

let isShowAboutMenu = false
function toggleSubMenu() {
  const aboutMenu = document.querySelector('.navbar-menu-sub-items')
  const iconArrowAbout = document.querySelector('.nav-menu-all li div i')

  if (isShowAboutMenu) {
    aboutMenu.style.setProperty('padding', '0', 'important')
    aboutMenu.style.height = '0'
    iconArrowAbout.style.transform = 'rotate(0deg)'
    isShowAboutMenu = false
    // if (window.innerWidth <= 768) {
    //   aboutMenu.style.position = 'none'
    //   aboutMenu.style.display = 'none'
    // }
  } else {
    // if (window.innerWidth <= 768) {
    //   aboutMenu.style.position = 'ralative'
    //   aboutMenu.style.display = 'block'
    // }
    aboutMenu.style.height = '128px'
    aboutMenu.style.setProperty('padding', '1rem', 'important')
    iconArrowAbout.style.transform = 'rotate(180deg)'
    isShowAboutMenu = true
  }
}

function openSidebar() {
  const sidebar = document.querySelector('.nav-menu-all')
  const closeIcon = document.querySelector('.icon-close-sidebar')
  sidebar.style.left = '0'
  closeIcon.style.display = 'flex'
}
function closeSidebar() {
  const sidebar = document.querySelector('.nav-menu-all')
  const closeIcon = document.querySelector('.icon-close-sidebar')
  sidebar.style.left = '1000px'
  closeIcon.style.display = 'none'
}
