function openApp(appName) {
    alert(appName + ' is opened!');
    // Implement further functionality to open the app
}

function openSettings() {
    document.getElementById('settings-panel').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings-panel').style.display = 'none';
}

function changeWallpaper(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.body.style.backgroundImage = `url(${e.target.result})`;
        document.body.style.backgroundSize = 'cover';
    }
    reader.readAsDataURL(file);
}

function changeTabColor(event) {
    const color = event.target.value;
    document.getElementById('app-bar').style.backgroundColor = color;
}

function changeTimezone(event) {
    const timezone = event.target.value;
    updateTime(timezone);
}

// Function to update battery status
function updateBatteryStatus(battery) {
    const batteryStatus = document.getElementById('battery-status');
    const level = Math.floor(battery.level * 100);
    const charging = battery.charging ? "charging" : "";
    batteryStatus.innerHTML = `<i class="fas fa-battery-${getBatteryIcon(level)} ${charging}"></i> ${level}%`;
}

// Function to get the appropriate battery icon class based on battery level
function getBatteryIcon(level) {
    if (level > 75) return 'full';
    if (level > 50) return 'three-quarters';
    if (level > 25) return 'half';
    if (level > 10) return 'quarter';
    return 'empty';
}

// Function to update the time
function updateTime(timezone = 'America/Los_Angeles') {
    const laTimeElement = document.getElementById('la-time');
    const now = new Date();
    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    const laTime = now.toLocaleTimeString('en-US', options);
    laTimeElement.textContent = `Time: ${laTime}`;
}

// Initialize battery status and time updates
navigator.getBattery().then(battery => {
    updateBatteryStatus(battery);
    battery.addEventListener('levelchange', () => updateBatteryStatus(battery));
    battery.addEventListener('chargingchange', () => updateBatteryStatus(battery));
});

setInterval(updateTime, 1000);
updateTime();
function openApp(appName) {
    if (appName === 'Browser') {
        document.getElementById('browser-panel').style.display = 'block';
        loadURL('https://www.example.com'); // Initial URL to load
    }
    // Implement other apps similarly if needed
}

function loadURL(url) {
    const iframe = document.getElementById('browser-frame');
    iframe.src = url;
}

function maximizePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.width = '100%';
    panel.style.height = '100%';
    panel.style.top = '0';
    panel.style.left = '0';
}

function minimizePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.width = '80%'; // Set to original width
    panel.style.height = '70%'; // Set to original height
    panel.style.top = '10%'; // Set to original top position
    panel.style.left = '10%'; // Set to original left position
}

function closePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.style.display = 'none';
    const iframe = panel.querySelector('iframe');
    iframe.src = 'about:blank'; // Clear iframe source
}
// Function to save settings to localStorage
function saveSettings() {
    const wallpaperType = document.querySelector('input[name="wallpaperType"]:checked').id;
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const timezone = document.getElementById('timezone').value;

    localStorage.setItem('wallpaperType', wallpaperType);
    localStorage.setItem('color1', color1);
    localStorage.setItem('color2', color2);
    localStorage.setItem('timezone', timezone);

    alert('Settings saved!');
}

// Function to load settings from localStorage
function loadSettings() {
    const wallpaperType = localStorage.getItem('wallpaperType');
    const color1 = localStorage.getItem('color1');
    const color2 = localStorage.getItem('color2');
    const timezone = localStorage.getItem('timezone');

    if (wallpaperType === 'uploadImage') {
        // Handle upload image option (if needed)
    } else if (wallpaperType === 'gradient') {
        const gradientType = document.getElementById('gradientType');
        gradientType.value = localStorage.getItem('gradientType');
        document.getElementById('color1').value = color1;
        document.getElementById('color2').value = color2;
        changeWallpaper(); // Apply saved gradient
    }

    document.getElementById('timezone').value = timezone;
    changeTimezone(); // Apply saved timezone
}

// Call loadSettings when the page loads to initialize settings
window.onload = function() {
    loadSettings();
};
// Function to save settings to localStorage
function saveSettings() {
    const wallpaperType = document.querySelector('input[name="wallpaperType"]:checked').id;
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const timezone = document.getElementById('timezone').value;

    localStorage.setItem('wallpaperType', wallpaperType);
    localStorage.setItem('color1', color1);
    localStorage.setItem('color2', color2);
    localStorage.setItem('timezone', timezone);
}

// Function to load settings from localStorage
function loadSettings() {
    const wallpaperType = localStorage.getItem('wallpaperType');
    const color1 = localStorage.getItem('color1');
    const color2 = localStorage.getItem('color2');
    const timezone = localStorage.getItem('timezone');

    if (wallpaperType === 'uploadImage') {
        // Handle upload image option (if needed)
    } else if (wallpaperType === 'gradient') {
        const gradientType = document.getElementById('gradientType');
        gradientType.value = localStorage.getItem('gradientType');
        document.getElementById('color1').value = color1;
        document.getElementById('color2').value = color2;
        changeWallpaper(); // Apply saved gradient
    }

    document.getElementById('timezone').value = timezone;
    changeTimezone(); // Apply saved timezone
}

// Call loadSettings when the page loads to initialize settings
window.onload = function() {
    loadSettings();
};

// Save settings when the page is about to unload (close or refresh)
window.addEventListener('beforeunload', function() {
    saveSettings();
});
// Function to close the popup
function closePopup(event) {
  event.preventDefault();
  const popup = document.getElementById('welcome');
  popup.style.animation = 'fadeOut 0.5s ease-out forwards';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500); // Adjust this timeout to match the animation duration
}
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
  }, 2000); // Adjust delay (in milliseconds) as needed
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');

    terminalInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim();
            terminalInput.value = '';

            if (command !== '') {
                executeCommand(command);
            }
        }
    });

    function executeCommand(command) {
        const output = document.createElement('p');
        output.textContent = '> ' + command;
        terminalBody.appendChild(output);

        switch (command.toLowerCase()) {
            case 'help':
                printOutput("Available commands: <br> - help: Display available commands <br> - date: Show current date <br> - time: Show current time <br> - clear: Clear the terminal");
                break;
            case 'date':
                printOutput(new Date().toLocaleDateString());
                break;
            case 'time':
                printOutput(new Date().toLocaleTimeString());
                break;
            case 'clear':
                clearTerminal();
                break;
            default:
                printOutput("Command not found. Type 'help' for available commands.");
        }
    }

    function printOutput(message) {
        const output = document.createElement('p');
        output.innerHTML = message;
        terminalBody.appendChild(output);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function clearTerminal() {
        terminalBody.innerHTML = '';
    }
});
function openApp(appName) {
    closeAllPanels();
    switch (appName) {
        case 'Browser':
            document.getElementById('browser-panel').style.display = 'block';
            break;
        case 'Apps':
            // Add logic to display your apps panel
            break;
        case 'Terminal':
            document.getElementById('terminal-panel').style.display = 'block';
            break;
    }
}

function closePanel(panelId) {
    document.getElementById(panelId).style.display = 'none';
}

function closeAllPanels() {
    const panels = document.querySelectorAll('.app-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');

    terminalInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim();
            terminalInput.value = '';

            if (command !== '') {
                executeCommand(command);
            }
        }
    });

    function executeCommand(command) {
        const output = document.createElement('p');
        output.textContent = '> ' + command;
        terminalBody.appendChild(output);

        switch (command.toLowerCase()) {
            case 'help':
                printOutput("Available commands: <br> - help: Display available commands <br> - date: Show current date <br> - time: Show current time <br> - clear: Clear the terminal");
                break;
            case 'date':
                printOutput(new Date().toLocaleDateString());
                break;
            case 'time':
                printOutput(new Date().toLocaleTimeString());
                break;
            case 'clear':
                clearTerminal();
                break;
            default:
                printOutput("Command not found. Type 'help' for available commands.");
        }
    }

    function printOutput(message) {
        const output = document.createElement('p');
        output.innerHTML = message;
        terminalBody.appendChild(output);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function clearTerminal() {
        terminalBody.innerHTML = '';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Other existing code...

    
});

document.addEventListener("DOMContentLoaded", function() {
    const browserPanel = document.getElementById('browser-panel');
    const browserFrame = document.getElementById('browser-frame');

    function openApp(appName) {
        closeAllPanels();
        switch (appName) {
            case 'Browser':
                browserPanel.style.display = 'block';
                break;
            case 'Apps':
                // Add logic to display your apps panel
                break;
            case 'Terminal':
                document.getElementById('terminal-panel').style.display = 'block';
                break;
        }
    }

    function maximizePanel(panelId) {
        const panel = document.getElementById(panelId);
        panel.style.width = '100%';
        panel.style.height = '100%';
        panel.style.top = '0';
        panel.style.left = '0';
    }

    function minimizePanel(panelId) {
        const panel = document.getElementById(panelId);
        panel.style.width = '80%'; // Adjust as per your default size
        panel.style.height = '300px'; // Adjust as per your default size
        panel.style.top = '50px'; // Adjust as per your default position
        panel.style.left = '50px'; // Adjust as per your default position
    }

    function closePanel(panelId) {
        document.getElementById(panelId).style.display = 'none';
    }

    function closeAllPanels() {
        const panels = document.querySelectorAll('.app-panel');
        panels.forEach(panel => {
            panel.style.display = 'none';
        });
    }

    // Click event listener for browser icon
    document.querySelector('.app-icon:nth-child(1)').addEventListener('click', function() {
        openApp('Browser');
    });

    // Other app icons click event listeners...

});
// Function to open the app panels
function openApp(appName) {
    // Close all panels first
    const panels = document.querySelectorAll('.app-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Open the specific app panel
    const panel = document.getElementById(`${appName.toLowerCase()}-panel`);
    if (panel) {
        panel.style.display = 'block';
    }
}

// Functions for panel controls (maximize, minimize, close)
function maximizePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.toggle('maximized');
    }
}

function minimizePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'none';
    }
}

function closePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'none';
    }
}

// Function to open settings panel
function openSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
        settingsPanel.style.display = 'block';
    }
}

// Function to close settings panel
function closeSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
        settingsPanel.style.display = 'none';
    }
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Function to change wallpaper
function changeWallpaper(event) {
    // Implement your change wallpaper logic here
}

// Function to change timezone
function changeTimezone(event) {
    // Implement your change timezone logic here
}

// Function to save settings
function saveSettings() {
    // Implement your save settings logic here
}

// Example initialization code if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example initialization actions
    // openApp('Browser'); // Uncomment to open the Browser panel by default
});
// Add this to your script.js file

// Function to open the app panels
function openApp(appName) {
    // Close all panels first
    const panels = document.querySelectorAll('.app-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Open the specific app panel
    const panel = document.getElementById(`${appName.toLowerCase()}-panel`);
    if (panel) {
        panel.style.display = 'block';
    }
}

// Function to install the game
function installGame() {
    // Show the game icon in the app bar
    const gameIcon = document.getElementById('game-icon');
    if (gameIcon) {
        gameIcon.style.display = 'block';
    }
}

// Functions for panel controls (maximize, minimize, close)
function maximizePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.classList.toggle('maximized');
    }
}

function minimizePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'none';
    }
}

function closePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
        panel.style.display = 'none';
    }
}

// Function to open settings panel
function openSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
        settingsPanel.style.display = 'block';
    }
}

// Function to close settings panel
function closeSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    if (settingsPanel) {
        settingsPanel.style.display = 'none';
    }
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Function to change wallpaper
function changeWallpaper(event) {
    // Implement your change wallpaper logic here
}

// Function to change timezone
function changeTimezone(event) {
    // Implement your change timezone logic here
}

// Function to save settings
function saveSettings() {
    // Implement your save settings logic here
}

// Example initialization code if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example initialization actions
    // openApp('Browser'); // Uncomment to open the Browser panel by default
});
// Function to open the app panels
function openApp(appName) {
    // Close all panels first
    const panels = document.querySelectorAll('.app-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // Open the specific app panel
    const panel = document.getElementById(`${appName.toLowerCase()}-panel`);
    if (panel) {
        panel.style.display = 'block';
    }
}

// Function to install the game
function installGame() {
    // Show the game icon in the app bar
    const gameIcon = document.getElementById('game-icon');
    if (gameIcon) {
        gameIcon.style.display = 'block';
    }

    // Save the installed state to localStorage
    saveInstalledApp('game-installed');
}

// Function to save installed apps to localStorage
function saveInstalledApp(appKey) {
    let installedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];
    if (!installedApps.includes(appKey)) {
        installedApps.push(appKey);
        localStorage.setItem('installed-apps', JSON.stringify(installedApps));
    }
}

// Function to load installed apps from localStorage
function loadInstalledApps() {
    let installedApps = JSON.parse(localStorage.getItem('installed-apps')) || [];
    installedApps.forEach(appKey => {
        if (appKey === 'game-installed') {
            const gameIcon = document.getElementById('game-icon');
            if (gameIcon) {
                gameIcon.style.display = 'block';
            }
        }
    });
}

// Example initialization code if needed
document.addEventListener('DOMContentLoaded', () => {
    loadInstalledApps();
    // Example initialization actions
    // openApp('Browser'); // Uncomment to open the Browser panel by default
});
function changeWallpaper(event) {
    const wallpaperType = document.querySelector('input[name="wallpaperType"]:checked').id;

    if (wallpaperType === 'uploadImage') {
        const file = document.getElementById('wallpaper').files[0];
        if (!file) {
            alert('Please upload an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = 'cover';
            localStorage.setItem('wallpaper', e.target.result); // Save to localStorage
        };
        reader.onerror = function() {
            alert('Error reading the file.');
        };
        reader.readAsDataURL(file);
    } else if (wallpaperType === 'gradient') {
        const gradientType = document.getElementById('gradientType').value;
        const color1 = document.getElementById('color1').value;
        const color2 = document.getElementById('color2').value;
        document.body.style.backgroundImage = `${gradientType}(${color1}, ${color2})`;
        localStorage.setItem('wallpaper', `${gradientType}(${color1}, ${color2})`); // Save to localStorage
    }
}
function changeWallpaper(event) {
    const wallpaperType = document.querySelector('input[name="wallpaperType"]:checked').id;

    if (wallpaperType === 'uploadImage') {
        const file = document.getElementById('wallpaper').files[0];
        if (!file) {
            alert('Please upload an image.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            document.body.style.backgroundSize = 'cover';
            localStorage.setItem('wallpaper', e.target.result); // Save to localStorage
        };
        reader.onerror = function() {
            alert('Error reading the file.');
        };
        reader.readAsDataURL(file);
    } else if (wallpaperType === 'gradient') {
        const gradientType = document.getElementById('gradientType').value;
        const color1 = document.getElementById('color1').value;
        const color2 = document.getElementById('color2').value;
        document.body.style.backgroundImage = `${gradientType}(${color1}, ${color2})`;
        localStorage.setItem('wallpaper', `${gradientType}(${color1}, ${color2})`); // Save to localStorage
    }
}
function loadSettings() {
    const wallpaperType = localStorage.getItem('wallpaperType');
    const wallpaper = localStorage.getItem('wallpaper');
    const timezone = localStorage.getItem('timezone');

    if (wallpaperType === 'uploadImage' && wallpaper) {
        document.body.style.backgroundImage = `url(${wallpaper})`;
        document.body.style.backgroundSize = 'cover';
        document.getElementById('uploadImage').checked = true;
    } else if (wallpaperType === 'gradient' && wallpaper) {
        document.body.style.backgroundImage = wallpaper;
        document.getElementById('gradient').checked = true;
        // Assuming the saved gradient is in the format: "linear-gradient(#color1, #color2)"
        const colors = wallpaper.match(/#[0-9A-Fa-f]{6}/g);
        if (colors) {
            document.getElementById('color1').value = colors[0];
            document.getElementById('color2').value = colors[1];
        }
    }

    if (timezone) {
        document.getElementById('timezone').value = timezone;
        changeTimezone(); // Apply saved timezone
    }
}

window.onload = function() {
    loadSettings();
};
// Function to check if an app is installed and update UI
function checkInstalledApps() {
    if (localStorage.getItem('textBubbleInstalled') === 'true') {
        document.getElementById('text-bubble-icon').style.display = 'block';
    }
}

// Check installed apps on page load
document.addEventListener('DOMContentLoaded', function() {
    checkInstalledApps();
});

// Function to install Text Bubble app
function installTextBubbleApp() {
    // Set the app as installed in localStorage
    localStorage.setItem('textBubbleInstalled', 'true');

    // Show the app icon in the app bar
    document.getElementById('text-bubble-icon').style.display = 'block';

    // Optionally, open the app panel immediately after installation
    openApp('TextBubble');

    // Optionally, provide user feedback
    alert('Text Bubble app installed!');
}
document.addEventListener('DOMContentLoaded', function() {
    checkInstalledApps();
});

function checkInstalledApps() {
    if (localStorage.getItem('textBubbleInstalled') === 'true') {
        document.getElementById('text-bubble-icon').style.display = 'block';
    }
}

function installTextBubbleApp() {
    localStorage.setItem('textBubbleInstalled', 'true');
    document.getElementById('text-bubble-icon').style.display = 'block';
    openApp('TextBubble');
    alert('Text Bubble app installed!');
}

function openApp(appName) {
    const appPanels = document.querySelectorAll('.app-panel');
    appPanels.forEach(panel => panel.style.display = 'none');

    switch (appName) {
        case 'Browser':
            document.getElementById('browser-panel').style.display = 'block';
            break;
        case 'Shop':
            document.getElementById('shop-panel').style.display = 'block';
            break;
        case 'Game':
            document.getElementById('game-panel').style.display = 'block';
            break;
        case 'Terminal':
            document.getElementById('terminal-panel').style.display = 'block';
            break;
        case 'TextBubble':
            document.getElementById('text-bubble-panel').style.display = 'block';
            break;
        default:
            break;
    }
}

function maximizePanel(panelId) {
    document.getElementById(panelId).classList.add('maximized');
}

function minimizePanel(panelId) {
    document.getElementById(panelId).classList.remove('maximized');
    document.getElementById(panelId).style.display = 'none';
}

function closePanel(panelId) {
    document.getElementById(panelId).style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    checkInstalledApps();
});

function checkInstalledApps() {
    if (localStorage.getItem('textBubbleInstalled') === 'true') {
        document.getElementById('text-bubble-icon').style.display = 'block';
    }
}

function installTextBubbleApp() {
    localStorage.setItem('textBubbleInstalled', 'true');
    document.getElementById('text-bubble-icon').style.display = 'block';
    openApp('TextBubble');
    alert('Text Bubble app installed!');
}

function openApp(appName) {
    const appPanels = document.querySelectorAll('.app-panel');
    appPanels.forEach(panel => panel.style.display = 'none');

    switch (appName) {
        case 'Browser':
            document.getElementById('browser-panel').style.display = 'block';
            break;
        case 'Shop':
            document.getElementById('shop-panel').style.display = 'block';
            break;
        case 'Game':
            document.getElementById('game-panel').style.display = 'block';
            break;
        case 'Terminal':
            document.getElementById('terminal-panel').style.display = 'block';
            break;
        case 'TextBubble':
            document.getElementById('text-bubble-panel').style.display = 'block';
            break;
        default:
            break;
    }
}

function maximizePanel(panelId) {
    document.getElementById(panelId).classList.add('maximized');
}

function minimizePanel(panelId) {
    document.getElementById(panelId).classList.remove('maximized');
    document.getElementById(panelId).style.display = 'none';
}

function closePanel(panelId) {
    document.getElementById(panelId).style.display = 'none';
}
