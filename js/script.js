const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function showMember(member){
    const card = `<div class="col-12 col-md-6 col-lg-4 mt-3">
                    <div class="bg-primary d-flex align-items-center">
                        <div>
                            <img class="img-fluid" src="${member.img}" alt="">
                        </div>
                        <div class="p-2 d-flex flex-column">
                            <h3>${member.name}</h3>
                            <p>${member.role}</p>
                            <a href="">${member.email}</a>
                        </div>
                    </div>
                </div>`;
    document.getElementById('members').innerHTML += card;
}

for(let i=0; i<teamMembers.length; i++){
    showMember(teamMembers[i]);
}