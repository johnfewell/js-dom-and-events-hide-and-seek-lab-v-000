function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  const grandNode = document.querySelector('#grand-node')
  const divs = grandNode.querySelectorAll('div')
  return divs[divs.length -1]
}
