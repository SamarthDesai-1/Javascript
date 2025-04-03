const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}



// let cTitle = document.getElementsByClassName("card-title")[0];
// console.log(cTitle);
// cTitle.style.color = 'red';


// let cTitle = document.getElementById("first-card");
// cTitle.style.color = 'cadetblue';
// cTitle.style.fontSize = '2rem';
// cTitle.style.fontWeight = 'bold';
// cTitle.style.textAlign = 'center';  


// let cTitle = document.querySelectorAll(".card-title");
// cTitle[0].style.color = 'red';
// cTitle[1].style.color = 'cadetblue';
// console.log(cTitle);


// document.querySelector(".this").style.color = 'orange'; 


// let cTitle = document.getElementsByTagName("h5");
// cTitle[0].style.color = 'purple';
// cTitle[1].style.color = 'orange';
// console.log(cTitle);


let cTitle = document.getElementsByName("head-title");
cTitle[0].style.color = 'grey';
console.log(cTitle);