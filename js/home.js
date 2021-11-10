window.onscroll = () => {
  animateOverviewNumber();
};

let viewed = false;
function animateOverviewNumber() {
  const yearOfExperienceNumber = document.getElementById(
    'YearOfExperienceNumber'
  );
  const ourProjectsNumber = document.getElementById('OurProjectsNumber');
  const totalAwardsNumber = document.getElementById('TotalAwardsNumber');
  const overviewPage = document.getElementById('OverviewPage');
  const distance = overviewPage.offsetTop - window.innerHeight;
  let animateNumberExperience = 0;
  let animateNumberProject = 0;
  let animateNumberAward = 0;
  if (distance < window.pageYOffset && !viewed) {
    const experienceInterval = setInterval(() => {
      if (animateNumberExperience < 30) {
        animateNumberExperience += 1;
        yearOfExperienceNumber.innerHTML = animateNumberExperience + '+';
      }
      if (animateNumberExperience === 30) {
        clearInterval(experienceInterval);
      }
    }, 100);
    const projectInterval = setInterval(() => {
      if (animateNumberProject < 200) {
        animateNumberProject += 10;
        ourProjectsNumber.innerHTML = animateNumberProject + '+';
      }
      if (animateNumberProject === 200) {
        clearInterval(projectInterval);
      }
    }, 140);
    const awardInterval = setInterval(() => {
      if (animateNumberAward < 18) {
        animateNumberAward += 1;
        totalAwardsNumber.innerHTML = animateNumberAward + '+';
      }
      if (animateNumberAward === 18) {
        clearInterval(awardInterval);
      }
    }, 170);
    viewed = true;
  }
  // if (window.pageYOffset === 0) {
  //   viewed = false;
  //   animateNumberExperience = 0;
  //   animateNumberProject = 0;
  //   animateNumberAward = 0;
  // }
}
