document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.querySelector('.output');
    const inputElement = document.querySelector('.input');

    // Array of jokes
    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs!",
        "Parallel lines have so much in common. It’s a shame they’ll never meet.",
        "I told my wife she should embrace her mistakes. She gave me a hug.",
        "Why don't scientists trust atoms? Because they make up everything!",
        "I'm reading a book on anti-gravity. It's impossible to put down!"
    ];

    const commands = {
        help: () => {
            const availableCommands = Object.keys(commands).join('\n  ');
            return `
Available commands:
  ${availableCommands}
`;
        },
        clear: () => { outputElement.innerHTML = ''; return ''; },
        date: () => new Date().toLocaleDateString(),
        time: () => new Date().toLocaleTimeString(),
        joke: () => {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            return jokes[randomIndex];
        },
        calc: (expression) => {
            try {
                return eval(expression).toString();
            } catch {
                return 'Error: Invalid Expression';
            }
        },
        echo: (text) => text,
        say: (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
            return `Saying: "${text}"`;
        },
        'draw': (args) => {
            if (args === 'cow') {
                return `
     \\   ^__^
      \\  (oo)\\_______
         (__)\\       )\\/\\
             ||----w |
             ||     ||
`;
            } else {
                return `Unknown draw command: ${args}`;
            }
        }
    };

    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const input = inputElement.value;
            inputElement.value = '';
            const [command, ...args] = input.split(' ');
            const response = commands[command] ? commands[command](args.join(' ')) : `Unknown command: ${command}`;
            outputElement.innerHTML += `<div>$ ${input}</div><div>${response}</div>`;
            outputElement.scrollTop = outputElement.scrollHeight;
        }
    });
});
