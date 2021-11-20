const imageProfileDefault = {
  0: './asset/about/team/Nadadhorn 1.jpg',
  1: './asset/about/team/Veerachat 2.jpg',
  2: './asset/about/team/Niphon 1.jpg',
  3: './asset/about/team/Thunthamronk 1.jpg',
  4: './asset/about/team/L1002663 2.jpg',
}

const imageProfileColor = {
  0: './asset/about/team/Nadadhorn 2.jpg',
  1: './asset/about/team/Veerachat 1.jpg',
  2: './asset/about/team/Niphon 2.jpg',
  3: './asset/about/team/Thunthamronk 2.jpg',
  4: './asset/about/team/L1002663 1.jpg',
}

function handleHoverImageProfile(index) {
  const profile = document.querySelectorAll('.team-profile-img')
  profile[index].children[0].style.opacity = '0'
  setTimeout(() => {
    profile[index].children[0].src = imageProfileColor[index]
    profile[index].children[0].style.opacity = '1'
  }, 100)
}

function handleUnHoverImageProfile(index) {
  const profile = document.querySelectorAll('.team-profile-img')
  profile[index].children[0].style.opacity = '0'
  setTimeout(() => {
    profile[index].children[0].src = imageProfileDefault[index]
    profile[index].children[0].style.opacity = '1'
  }, 100)
}

const imagesDefault1 = {
  0: './asset/about/logo/mandarin-oriental-white.svg',
  1: './asset/about/logo/accor--eps--vector-logo-white.svg',
  2: './asset/about/logo/jw-marriott-grand-rapids-vector-logo-black-01.svg',
  3: './asset/about/logo/hilton-international-vector-logo-white.svg',
  4: './asset/about/logo/intercontinental-hotels-resorts-vector-logo-black-01.svg',
  5: './asset/about/logo/the-ritz-carlton--eps--vector-logo-white.svg',
}

const imagesColor1 = {
  0: './asset/about/logo/mandarin-oriental-colour.svg',
  1: './asset/about/logo/accor--eps--vector-logo-colour.svg',
  2: './asset/about/logo/jw-marriott-grand-rapids-vector-logo-01.svg',
  3: './asset/about/logo/hilton-international-vector-logo-colour.svg',
  4: './asset/about/logo/intercontinental-hotels-resorts-vector-logo-01.svg',
  5: './asset/about/logo/the-ritz-carlton--eps--vector-logo-colour.svg',
}

const text1 = {
  0: {
    name: 'Mandarin Oriental Hotels Group',
    info: 'For Mandarin Oriental DharaDhevi Chiangmai (2004)',
  },
  1: {
    name: 'Accor Hotels Group',
    info: 'For Ibis Pattaya , Ibis Phuket , Ibis Bangkok (2005)',
  },
  2: {
    name: 'JW Marriott Hotels Group',
    info: 'For Marriott Samui (2010)',
  },
  3: {
    name: 'Hilton Hotels Group',
    info: 'For Conrad Samui (2009)',
  },
  4: {
    name: 'Intercontinental Hotels Group',
    info: 'For Intercontinental Resort Samui (2009)',
  },
  5: {
    name: 'The Ritz-Carlton Hotel Company',
    info: 'For The Ritz-Carlton at Royal Rajhadumri',
  },
}

let experiences1SelectedIndex = 0
let experiences1PrevSelectIndex = 0

selectExperiences1(experiences1SelectedIndex)
function selectExperiences1(index) {
  experiences1PrevSelectIndex = experiences1SelectedIndex

  const experiencesName1 = document.getElementById('ExperiencesName1')
  experiencesName1.innerText = text1[index].name

  const experiencesInfo1 = document.getElementById('ExperiencesInfo1')
  experiencesInfo1.innerText = text1[index].info

  if (window.innerWidth <= 991) {
    const experienceTextWrapper = document.querySelectorAll(
      '.experiences-text-wrapper-m'
    )
    experienceTextWrapper[index].style.display = 'block'
    if (experiences1PrevSelectIndex !== index) {
      experienceTextWrapper[experiences1PrevSelectIndex].style.display = 'none'
    }
  }

  const experiences1 = document.querySelectorAll('.experiences1-item')

  experiences1[experiences1PrevSelectIndex].children[0].src =
    imagesDefault1[experiences1PrevSelectIndex]

  experiences1SelectedIndex = index
  experiences1[experiences1SelectedIndex].children[0].src =
    imagesColor1[experiences1SelectedIndex]
}

function handleHoverImageExperiences1(index) {
  if (experiences1SelectedIndex !== index) {
    const experiences1 = document.querySelectorAll('.experiences1-item')
    experiences1[index].children[0].style.opacity = '0'
    setTimeout(() => {
      experiences1[index].children[0].src = imagesColor1[index]
      experiences1[index].children[0].style.opacity = '1'
    }, 150)
  }
}

function handleUnHoverImageExperiences1(index) {
  const experiences1 = document.querySelectorAll('.experiences1-item')
  if (experiences1SelectedIndex !== index) {
    experiences1[index].children[0].style.opacity = '0'
    setTimeout(() => {
      experiences1[index].children[0].src = imagesDefault1[index]
      experiences1[index].children[0].style.opacity = '1'
    }, 150)
  }
}

const imagesDefault2 = {
  0: './asset/about/logo/property-perfect-white.svg',
  1: './asset/about/logo/sc-asset-white.svg',
  2: './asset/about/logo/sansiri-white.svg',
  3: './asset/about/logo/pruksa-white.svg',
  4: './asset/about/logo/ananda-white.svg',
  5: './asset/about/logo/REIGNWOOD - Logo 2.svg',
}

const imagesColor2 = {
  0: './asset/about/logo/property-perfect-colour.svg',
  1: './asset/about/logo/sc-asset-colour.svg',
  2: './asset/about/logo/sansiri-colour.svg',
  3: './asset/about/logo/pruksa-colour.svg',
  4: './asset/about/logo/ananda-colour.svg',
  5: './asset/about/logo/REIGNWOOD - Logo 1.svg',
}

const text2 = {
  0: [
    {
      name: 'I condo Sukhumvit 103',
      info: 'For Property Perfect PCL.(2010)',
    },
    {
      name: 'Metro Sky Kaset',
      info: 'For Property Perfect PCL.(2011)',
    },
    {
      name: 'Metro Sky Prachachuen',
      info: 'For Property Perfect PCL.(2012)',
    },
    {
      name: 'Metro Sky Rama 4',
      info: 'For Property Perfect PCL.(2013)',
    },
  ],
  1: [
    {
      name: 'The Crest Sukhumvit 24',
      info: 'For SC Asset Corporation PCL.(2011)',
    },
  ],
  2: [
    {
      name: 'Setthasiri Onnut-Srinakarindra',
      info: 'For San siri PCL.(2011)',
    },
    {
      name: 'Narasiri By Sansiri',
      info: 'For Sansiri PCL.(2012)',
    },
  ],
  3: [
    {
      name: 'The Connect By Pruksa',
      info: 'For Pruksa Real Estate PCL.(2009)',
    },
    {
      name: 'Pruksa Ville By Pruksa',
      info: 'For Pruksa Real Estate PCL.(2009)',
    },
  ],
  4: [
    {
      name: 'Atoll Java Bay',
      info: 'Ananda Development PCL.(2013)',
    },
  ],
  5: [
    {
      name: 'Wentworth Golf Club',
      info: '',
    },
    {
      name: 'Wentwort Driving Range',
      info: '',
    },
    {
      name: 'Kis international school Lumlookka',
      info: '',
    },
    {
      name: 'Reignwood Sport Club',
      info: '',
    },
    {
      name: 'Reignwood retirement Center',
      info: '',
    },
    {
      name: 'Reignwood Estate',
      info: '',
    },
    {
      name: 'Reignwood Golf Estate',
      info: '',
    },
    {
      name: 'Private Residence',
      info: '',
    },
  ],
}

let experiences2SelectedIndex = 0
let experiences2PrevSelectIndex = 0

selectExperiences2(experiences2SelectedIndex)
function selectExperiences2(index) {
  experiences2PrevSelectIndex = experiences2SelectedIndex

  const experiencesName2 = document.getElementById('ExperiencesName2')
  experiencesName2.innerHTML = ''
  text2[index].forEach((text, i) => {
    experiencesName2.innerHTML += `
      <li class="text-experience2-name">${text.name}</li>
      <div class="text-experience2-info">${text.info}</div>
    `
  })

  if (window.innerWidth <= 991) {
    const experienceTextWrapper = document.querySelectorAll(
      '.experiences2-text-wrapper-m'
    )
    experienceTextWrapper[index].style.display = 'block'
    if (experiences2PrevSelectIndex !== index) {
      experienceTextWrapper[experiences2PrevSelectIndex].style.display = 'none'
    }
  }

  const experiences2 = document.querySelectorAll('.experiences2-item')

  experiences2[experiences2PrevSelectIndex].children[0].src =
    imagesDefault2[experiences2PrevSelectIndex]

  experiences2SelectedIndex = index
  experiences2[experiences2SelectedIndex].children[0].src =
    imagesColor2[experiences2SelectedIndex]
}

function handleHoverImageExperiences2(index) {
  if (experiences2SelectedIndex !== index) {
    const experiences2 = document.querySelectorAll('.experiences2-item')
    experiences2[index].children[0].style.opacity = '0'
    setTimeout(() => {
      experiences2[index].children[0].src = imagesColor2[index]
      experiences2[index].children[0].style.opacity = '1'
    }, 150)
  }
}

function handleUnHoverImageExperiences2(index) {
  const experiences2 = document.querySelectorAll('.experiences2-item')
  if (experiences2SelectedIndex !== index) {
    experiences2[index].children[0].style.opacity = '0'
    setTimeout(() => {
      experiences2[index].children[0].src = imagesDefault2[index]
      experiences2[index].children[0].style.opacity = '1'
    }, 150)
  }
}
