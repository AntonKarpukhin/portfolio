const containerTemplateSkill = document.querySelector('#skills-template').content;
const sectionSkillsElement = document.querySelector('.skills__elements');

function createSkill(src, name, arrStars) {
  const cloneSkill = containerTemplateSkill.querySelector('.skills__element').cloneNode(true),
        cloneImg = cloneSkill.querySelector('.skills__icons'),
        cloneStar = cloneSkill.querySelector('.skills__star');

  cloneSkill.querySelector('.skills__name').textContent = name;
  cloneImg.innerHTML = src

  arrStars.forEach(item => {
    if (item === 'star') {
      cloneStar.textContent += 'star ';
    } else {
      cloneStar.textContent += 'grade ';
    }
  })
  return cloneSkill;
}

function renderSkills(src, name, stars) {
  sectionSkillsElement.append(createSkill(src, name, stars));
}

export { renderSkills }