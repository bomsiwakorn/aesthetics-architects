const sectionAllImages = document.querySelectorAll(
  '[class^="team-profile-img"]'
)
const sectionImagesObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    const windowBgSlide = document.querySelectorAll('.window-bg-slide')
    const className = entry.target.className
    const indexImg = className.substring(className.length - 1)
    if (entry.isIntersecting) {
      windowBgSlide[indexImg].style.width = '0'
    }
    // else {
    //   windowBgSlide[indexImg].style.width = '250px'
    // }
  })
})
for (let i = 0; i < sectionAllImages.length; i++) {
  sectionImagesObserver.observe(sectionAllImages[i])
}

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
  const profileImgColor = document.querySelectorAll('.profile-img-color')
  if (profileImgColor[index]) {
    profileImgColor[index].style.opacity = '1'
  }
}

function handleUnHoverImageProfile(index) {
  const profileImgColor = document.querySelectorAll('.profile-img-color')
  if (profileImgColor[index]) {
    profileImgColor[index].style.opacity = '0'
  }
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

let experiences1SelectedIndex = 0
let experiences1PrevSelectIndex = 0

selectExperiences1(experiences1SelectedIndex)
function selectExperiences1(index) {
  experiences1PrevSelectIndex = experiences1SelectedIndex
  const experienceTextWrapper = document.querySelectorAll(
    '[class^="experiences-text-wrapper-m"]'
  )
  experienceTextWrapper[index].style.display = 'grid'
  if (experiences1PrevSelectIndex !== index) {
    experienceTextWrapper[experiences1PrevSelectIndex].style.display = 'none'
  }

  const experiences1 = document.querySelectorAll('.experiences1-item')
  experiences1[experiences1PrevSelectIndex].children[0].src =
    imagesDefault1[experiences1PrevSelectIndex]

  experiences1SelectedIndex = index
  experiences1[experiences1SelectedIndex].children[0].src =
    imagesColor1[experiences1SelectedIndex]
}

function handleHoverImageExperiences1(index) {
  selectExperiences1(index)
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

let experiences2SelectedIndex = 0
let experiences2PrevSelectIndex = 0

selectExperiences2(experiences2SelectedIndex)
function selectExperiences2(index) {
  experiences2PrevSelectIndex = experiences2SelectedIndex
  const experienceTextWrapper = document.querySelectorAll(
    '[class^="experiences2-text-wrapper-m"]'
  )
  experienceTextWrapper[index].style.display = 'grid'
  if (experiences2PrevSelectIndex !== index) {
    experienceTextWrapper[experiences2PrevSelectIndex].style.display = 'none'
  }

  const experiences2 = document.querySelectorAll('.experiences2-item')

  experiences2[experiences2PrevSelectIndex].children[0].src =
    imagesDefault2[experiences2PrevSelectIndex]

  experiences2SelectedIndex = index
  experiences2[experiences2SelectedIndex].children[0].src =
    imagesColor2[experiences2SelectedIndex]
}

function handleHoverImageExperiences2(index) {
  selectExperiences2(index)
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

function openModalProfile(index) {
  const profile = {
    0: {
      image: './asset/about/team/Nadadhorn2.jpeg',
      info: `
        <div class="modal-profile-name">Mr. Nadadhorn Dhamabutra</div>
        <div class="modal-profile-position">Founder and President of Aesthetics Group</div>
        <p class="modal-profile-text">Nadadhorn Dhamabutra founded Aesthetics Architects in 1992. He is the president of Aesthetics Group, a multidisciplinary ERM which include Aesthetics Creatects and Imagineers, Aesthetics Interior The Spa Studio and Aesthetics System.</p>
        <p class="modal-profile-text">Nadadhorn attained his Bachelor of Architecture degree from Chulalongkorn University in 1983. He furthered his studies at University of California, Los Angeles, USA in 1985, where he obtained a Master of Architecture degree specializing in Urban Design. In 1990, he completed a mini Masters in Business Administration at Chulalongkorn University.  For over 15 years, Nadadhorn shared his knowledge and experience as a professor and mentor at Rangsit University Architectural School from 1990 – 2021.</p>
        <p class="modal-profile-text">Nadadhorn’s work arises from the goal of creating buildings and spaces with complete positive intentions. “Transcendence” is a good word to describe his work as he goes above and beyond the limits in utilizing materials. His designs somehow transcend what most architects ‘normally’ build into something much more impressive and awe-inspiring.</p>
      `,
    },
    1: {
      image: './asset/about/team/L1002666.jpg',
      info: `
        <div class="modal-profile-name">Mr. Veerachat Phromsorn</div>
        <div class="modal-profile-position">Managing Director / Architect</div>
        <p class="modal-profile-text">After receiving his Bachelor of Architecture degree from Rangsit University in 1997, Veerachat began his career at Aesthetics Architects. He went on to attain his Masters of Architecture degree from University of Newcastle, Australia, graduating in 2001. He continued his career with Aesthetics Architects following his return back to Thailand. With hard work and dedication, Veerachat was promoted to Managing Director in 2006.</p>
        <p class="modal-profile-text">In his service to the profession, Veerachat has served as an active member of the Association of Siamese Architects under Royal Patronage (ASA) from 2008 – 2014. He received the first class architect license since 2020. He has also served as project manager for a number of major local and international projects, including Siam Serpentarium, Bangkok, PT Galleria, All Mercedes Benz Showroom in Thailand, Dhara Dhevi Hotel, Chiangmai, Richmond Hotel, Bangkok, All Metro Sky Condominiums, All Metro Lux Condominiums, I Condo by Property Perfect,  Setthasiri Village by Sansiri, Java Bay Village by Ananda, The Connect by Prueksa, The American School Of Bangkok, Kidzania Bangkok, Alpine Golf Clubhouse, Chiangmai, Stone Forest Resort, Kunming, China, Reignwood Park and Wentworth Golf Course Bangkok, etc.</p>
        <p class="modal-profile-text">With over 20 years’ of work experience, Veerachat has proven to be a professional, creative and innovative architect, committed to ensuring the highest quality of work on all his design projects. He is highly skilled in the development and management of architectural and urban planning processes ranging from high rise buildings, residential estates, educational institutes to his most recent project, zoological architecture.</p>
        <p class="modal-profile-text">Veerachat exhibits the expected qualities to be a team leader among various working groups. He demonstrates excellent communication skills and the ability to develop and maintain positive internal and external relationships with all levels of management and client</p>
      `,
    },
    2: {
      image: './asset/about/team/3CCF631B-870C-47AC-8E6A-368DC49BA12C.jpg',
      info: `
        <div class="modal-profile-name">Niphon Phandee</div>
        <div class="modal-profile-position">Deputy Managing Director</div>
        <ul class="modal-profile-text">
          <span>Design Experience</span>
          <br />
          <li>Showroom Isuzu Auto Center</li>
          <ul class="text-list-sub-item">
            <li>Sukhapiban 3 Branch</li>
            <li>Buddhamonthon 3 Branch</li>
            <li>Rangsit Branch</li>
          </ul>
          <li>CS Hotel Pattani</li>
          <li>Aomthong Village Pattani</li>
          <li>Clubhouse Pattani</li>
          <li>Wattanapat Hospital Trang</li>
          <li>Macro Office Center</li>
          <ul class="text-list-sub-item">
            <li>Paholyothin Branch</li>
            <li>Sukhumvit 24 Branch</li>
            <li>Tawanna Bangkapi Branch</li>
          </ul>
          <li>Max Auto Care and Car Wash</li>
          <li>Isuzu Hatyai</li>
          <ul class="text-list-sub-item">
            <li>Innovative Building Phatumwan Demonstation School</li>
            <li>etc.</li>
          </ul>
          </ul>
        <ul class="modal-profile-text">
          <span>Construction Control Experience</span>
          <li>Renovation OPD Reception area, Bangkok Hospital</li>
          <li>ICU room, Ramathibodi Hospital</li>
          <li>Physician room, Ramathibodi Hospital</li>
          <li>Macro Office Center, Sukhumvit 24 Branch</li>
        </ul>
      `,
    },
    3: {
      image: './asset/about/team/L1002652.JPG',
      info: `
        <div class="modal-profile-name">Mr. Thunthamronk Athithanitjirachot</div>
        <div class="modal-profile-position">Design Director</div>
      `,
    },
    4: {
      image: './asset/about/team/L1002663 x.jpg',
      info: `
      <div class="modal-profile-name">Mr. Manop Sar-ue</div>
      <div class="modal-profile-position">Chief of Production</div>
      `,
    },
  }

  const image = document.querySelector('.modal-profile-img img')
  const text = document.querySelector('.modal-profile-text-wrapper')
  image.src = profile[index].image
  text.innerHTML = profile[index].info

  const modalProfile = document.querySelector('.modal-profile-info')
  const body = document.querySelector('body')
  modalProfile.style.display = 'block'
  setTimeout(() => {
    modalProfile.style.opacity = '1'
    modalProfile.style.top = '0'
  }, 0)

  body.style.overflow = 'hidden'
}

function closeModalProfile() {
  const modalProfile = document.querySelector('.modal-profile-info')
  const body = document.querySelector('body')
  setTimeout(() => {
    modalProfile.style.top = '1080px'
    modalProfile.style.opacity = '0'
  }, 0)

  setTimeout(() => {
    modalProfile.style.display = 'none'
  }, 800)

  body.style.overflow = 'auto'
}
