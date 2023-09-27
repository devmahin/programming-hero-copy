const milestonsData = JSON.parse(data).data;
console.log(milestonsData);


function name(val) {
  console.log(val)
  
}

function load() {
  const milestionsec_sec = document.querySelector(".milestion-sec");

  milestionsec_sec.innerHTML = `${milestonsData
    .map(function (Milestone) {
      return `<div class="milestion-module" id="${Milestone._id}">
                    <div class="flex border_b" >
                                    <div class="checkBox"><input type="checkbox" onclick="milestion_list(this,${
                                      Milestone._id
                                    })"></div>

                                    <div class="milestion-name">
                                        <div onclick="openMilestion(this, ${
                                          Milestone._id
                                        })">
                                            <p> ${Milestone.name}
                                            <span><i class="ri-arrow-down-s-line"></i></span>
                                            </p>
                                        </div>
                                    </div>
                        </div>

                                <div class="hidden">
                                    ${Milestone.modules
                                      .map(function (modul) {
                                        return ` <div class="module border_b">
                                            <p>${modul.name}</p>
                                        </div>`;
                                      })
                                      .join("")}

                                </div>
                </div>`;
    })
    .join("")}`;
}

load();

function openMilestion(milestionElem, id) {
  let elem = milestionElem.parentNode.parentNode.nextElementSibling;
  let showPannel = document.querySelector(".show");
  let active = document.querySelector(".active");

  if (!elem.classList.contains("show") && showPannel)
    showPannel.classList.remove("show");
  elem.classList.toggle("show");

  if (active && !milestionElem.classList.contains("active")) {
    active.classList.remove("active");
  }
  milestionElem.classList.add("active");

  showMilestion(id);
  name(id)
}

function showMilestion(id) {
  console.log(id);
  const changeImg = document.querySelector(".changeImg");
  const title = document.querySelector(".title");
  const des = document.querySelector(".des");

  changeImg.style.opacity = "0";
  changeImg.src = milestonsData[id].image;
  title.innerHTML = milestonsData[id].name;
  des.innerHTML = milestonsData[id].description;
}

const changeImg = document.querySelector(".changeImg");
changeImg.onload = function () {
  this.style.opacity = "1";
};

function milestion_list(checkBox, id) {
  let milestion = document.querySelector(".milestion-sec");

  let donelist = document.querySelector(".donelist");

  let item = document.getElementById(id);

  if (checkBox.checked) {
    milestion.removeChild(item);
    donelist.appendChild(item);
  } else {
    donelist.removeChild(item);
    milestion.appendChild(item);
  }
}


  