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
      if (animateNumberExperience < 20) {
        animateNumberExperience += 1;
        yearOfExperienceNumber.innerHTML = animateNumberExperience + '+';
      }
      if (animateNumberExperience === 20) {
        clearInterval(experienceInterval);
      }
    }, 100);
    const projectInterval = setInterval(() => {
      if (animateNumberProject < 39) {
        animateNumberProject += 1;
        ourProjectsNumber.innerHTML = animateNumberProject;
      }
      if (animateNumberProject === 39) {
        clearInterval(projectInterval);
      }
    }, 100);
    const awardInterval = setInterval(() => {
      if (animateNumberAward < 13) {
        animateNumberAward += 1;
        totalAwardsNumber.innerHTML = animateNumberAward;
      }
      if (animateNumberAward === 13) {
        clearInterval(awardInterval);
      }
    }, 100);
    viewed = true;
  }
  // if (window.pageYOffset === 0) {
  //   viewed = false;
  //   animateNumberExperience = 0;
  //   animateNumberProject = 0;
  //   animateNumberAward = 0;
  // }
}
