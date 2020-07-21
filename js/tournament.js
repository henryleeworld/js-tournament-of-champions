(function() {
    const rounds = [{
            title: "8 強",
            matches: [...new Array(4)].fill({
                date: new Date(),
                users: [{
                        name: "玩家",
                        score: 0
                    },
                    {
                        name: "玩家",
                        score: 0
                    }
                ]
            })
        },
        {
            title: "4 強",
            matches: [...new Array(2)].fill({
                date: new Date(),
                users: [{
                        name: "玩家",
                        score: 0
                    },
                    {
                        name: "玩家",
                        score: 0
                    }
                ]
            })
        },
        {
            title: "決賽",
            matches: [...new Array(1)].fill({
                date: new Date(),
                users: [{
                        name: "玩家",
                        score: 0
                    },
                    {
                        name: "玩家",
                        score: 0
                    }
                ]
            })
        }
    ];

    const brackets = document.querySelector(".tournament-brackets");
    rounds.forEach(round => {
        const matches = round.matches.map(match => {
            const date = `${match.date.getFullYear()}-${
        (match.date.getMonth() + 1) > 9
          ? (match.date.getMonth() + 1)
          : `0${(match.date.getMonth() + 1)}`
      }-${
        match.date.getDate() > 9
          ? match.date.getDate()
          : `0${match.date.getDate()}`
      }`;
            return `<li class="round-item">
          <div class="match">
            <div><time datetime="${date}"> ${date} </time></div>
            <div class="scores"><span>${match.users[0].score}</span> : <span>${match.users[1].score}</span></div>
            <div class="users">
              <span><span class="flag-icon flag-icon-tw"></span> ${match.users[0].name}</span> vs <span><span class="flag-icon flag-icon-tw"></span> ${match.users[1].name}</span>
            </div>
          </div>
        </li>`;
        });

        const elem = `<div class="bracket-round">
            <h3 class="round-title">
                ${round.title}
            </h3>
            <ul class="matches-list">
            ${matches.join("")}
            </ul>
      </div>`;
        brackets.innerHTML += elem;
    });
})();