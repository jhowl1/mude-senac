  const paths = {
      vida: {
        title: "Mudança na vida",
        verse: "Mude, porque a vida é movimento...",
        question: "Qual movimento você precisa iniciar hoje?",
        tip: "Comece com uma pequena ação diária, como caminhar 10 minutos ou ligar para alguém querido.",
        color: "linear-gradient(270deg, #ff9a9e, #fad0c4)"
      },
      trabalho: {
        title: "Mudança no trabalho",
        verse: "Mude, porque só o que está morto não muda...",
        question: "Que hábito no trabalho você gostaria de transformar?",
        tip: "Escolha uma tarefa que costuma adiar e faça-a logo pela manhã.",
        color: "linear-gradient(270deg, #a1c4fd, #c2e9fb)"
      },
      pessoal: {
        title: "Mudança pessoal",
        verse: "Mude, mas comece devagar...",
        question: "Qual pequena mudança pessoal faria diferença?",
        tip: "Adote um novo hábito simples, como beber mais água ou escrever 3 gratidões por dia.",
        color: "linear-gradient(270deg, #d4fc79, #96e6a1)"
      }
    };

    const chosen = [];

    function updateCounter() {
      const counter = document.getElementById("counter");
      if (chosen.length === 0) {
        counter.textContent = "Você ainda não selecionou nenhuma mudança.";
      } else if (chosen.length === 1) {
        counter.textContent = "Você já selecionou 1 mudança!";
      } else {
        counter.textContent = `Você já selecionou ${chosen.length} mudanças!`;
      }
      if (chosen.length === 3) {
        counter.textContent += " 🌟 Parabéns, você construiu sua jornada completa!";
      }
    }

    function choose(option) {
      const output = document.getElementById("output");

      const card = document.createElement("div");
      card.classList.add("card", option);

      const titleEl = document.createElement("h3");
      titleEl.textContent = paths[option].title;

      const verseEl = document.createElement("p");
      verseEl.textContent = paths[option].verse;

      const questionEl = document.createElement("p");
      questionEl.textContent = paths[option].question;

      const tipEl = document.createElement("p");
      tipEl.textContent = "💡 Dica: " + paths[option].tip;

      card.appendChild(titleEl);
      card.appendChild(verseEl);
      card.appendChild(questionEl);
      card.appendChild(tipEl);

      output.appendChild(card);

      if (!chosen.includes(paths[option])) {
        chosen.push(paths[option]);
      }

      document.body.style.background = paths[option].color;
      updateCounter();
    }

    function showSummary() {
      const summary = document.getElementById("summary");
      summary.innerHTML = ""; // limpa apenas a área de resumo

      const summaryTitle = document.createElement("h2");
      summaryTitle.textContent = "🌟 Resumo da sua jornada de mudanças:";
      summary.appendChild(summaryTitle);

      chosen.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const titleEl = document.createElement("h3");
        titleEl.textContent = item.title;

        const verseEl = document.createElement("p");
        verseEl.textContent = item.verse;

        const questionEl = document.createElement("p");
        questionEl.textContent = item.question;

        const tipEl = document.createElement("p");
        tipEl.textContent = "💡 Dica: " + item.tip;

        card.appendChild(titleEl);
        card.appendChild(verseEl);
        card.appendChild(questionEl);
        card.appendChild(tipEl);

        summary.appendChild(card);
      });
    }

    const input = document.getElementById("reflection");
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        document.getElementById("feedback").textContent =
          "Sua reflexão foi registrada: " + input.value;
        input.value = "";
      }
    });
 