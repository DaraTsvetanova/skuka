const typeActivity = document.querySelector('[name="type"]');
const numberParticipants = document.querySelector('[name="participants"]');
const button = document.querySelector('.kill');


const endpoint = 'https://www.boredapi.com/api'; 

async function fetchActivity(type, participants) {
  const res = await fetch(`${endpoint}/activity?type=${type}&participants=${participants}`);
  const activity = await res.json();
  return activity;
}

async function handleClick() {
  let message = '';
  const activity = await fetchActivity(typeActivity.value, numberParticipants.value)
    .catch(err => {
      message = 'No activity found with the specified parameters'; 
    });
  displayActivity(activity);
}

function displayActivity(obj) {
  activityHTML = document.querySelector('#activity');
  if(obj.activity === undefined) {
    activityHTML.innerHTML = `<p class="display">No activity found with the specified parameters.</p>`;
  } else {
  activityHTML.innerHTML = `<p class="display popout">${obj.activity}</p>`;
  }
}

button.addEventListener('click', handleClick);