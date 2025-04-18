let navFormacao = document.querySelectorAll('.formacao_nav li');
const tabs = document.querySelectorAll('[data-tab-target]')
const expTab = document.querySelectorAll('[data-exp-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const expContents = document.querySelectorAll('[data-exp-content]')
const tabDesc = document.querySelectorAll('[data-tab-desc]')

function ativarIcon(){
  navFormacao.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
// diplay das formações
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelectorAll(tab.dataset.tabTarget)

    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabDesc.forEach(desc => {
      desc.classList.remove('active')
    })

    tab.classList.add('active')
    target.forEach(alvo => {alvo.classList.add('active')})
    dynamicPadding()
    dynamicPadding()
  })
})
// displays das experiencias

expTab.forEach(tab => {
  tab.addEventListener('click', () =>{
    const alvo =document.querySelector(tab.dataset.expTarget)
    expTab.forEach(tab => {
      tab.classList.remove('active')
    })
    expContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })

    tab.classList.add('active')
    alvo.classList.add('active')
  })
})

navFormacao.forEach((item) => item.addEventListener('click', ativarIcon));

// alinhamento formações

const container = document.querySelector('.formacao_curso_desc');
const paragraphs = container.querySelectorAll('.formacao_curso_desc p');
const root = document.querySelector(':root');

function dynamicPadding(){
  let totalHeight = 0;
  paragraphs.forEach(paragraph => {
    totalHeight += paragraph.offsetHeight;

  });

  const containerHeight = container.offsetHeight;
  const dynamicPadding = (containerHeight - totalHeight) / 2;
  root.style.setProperty('--dynamicPadding', `${dynamicPadding}px`)
}
dynamicPadding()

// animação a cada snap

const sections = document.querySelectorAll('.snap_target');

const separador={
  rootMargin: '0px',
  threshold: .005,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.parentElement.classList.add('show');
    } else {
      entry.target.parentElement.classList.remove('show');
    }
  });
}, separador);

sections.forEach((element) => observer.observe(element));
