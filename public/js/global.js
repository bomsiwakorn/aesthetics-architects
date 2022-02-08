function activeNavbar() {
  const menus = document.querySelectorAll('#nav-menu-item')
  console.log(menus)
  console.log(window.location)
  console.log(window.location.pathname === '/public/about.html')

  const pathname = window.location.pathname
  if (pathname === '/about.html') {
    menus[0].style.color = '#fdae1e'
    menus[1].style.color = '#fff'
    menus[2].style.color = '#fff'
  } else if (pathname === '/award.html' || pathname === '/award-detail.html') {
    menus[1].style.color = '#fdae1e'
    menus[0].style.color = '#fff'
    menus[2].style.color = '#fff'
  } else if (pathname === '/work.html' || pathname === '/work-detail.html') {
    menus[2].style.color = '#fdae1e'
    menus[0].style.color = '#fff'
    menus[1].style.color = '#fff'
  }
}
activeNavbar()
