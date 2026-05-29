const html = document.documentElement;
const sidebarBtn = document.getElementById('theme-toggle');
const sidebarIcon = document.getElementById('theme-toggle-icon');
const sidebarText = document.getElementById('theme-toggle-text');

const settingsBtn = document.getElementById('settings-theme-toggle');
const settingsIcon = document.getElementById('settings-toggle-icon');
const settingsText = document.getElementById('settings-toggle-text');

function toggleTheme() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        sidebarIcon.innerText = '🌙'; sidebarText.innerText = 'Dark Mode';
        settingsIcon.innerText = '🌙'; settingsText.innerText = 'Dark Mode';
    } else {
        html.classList.add('dark');
        sidebarIcon.innerText = '☀️'; sidebarText.innerText = 'Light Mode';
        settingsIcon.innerText = '☀️'; settingsText.innerText = 'Light Mode';
    }
}
sidebarBtn.addEventListener('click', toggleTheme);
settingsBtn.addEventListener('click', toggleTheme);

const tabs = {
    'nav-dashboard': document.getElementById('dashboard-section'),
    'nav-analytics': document.getElementById('analytics-section'),
    'nav-settings': document.getElementById('settings-section')
};

Object.keys(tabs).forEach(btnId => {
    document.getElementById(btnId).addEventListener('click', function() {
        Object.keys(tabs).forEach(id => {
            tabs[id].classList.add('hidden');
            document.getElementById(id).className = "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 font-medium text-sm";
        });
        tabs[btnId].classList.remove('hidden');
        this.className = "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium text-sm";
    });
});

document.getElementById('performance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const q1 = Math.min(100, Math.max(0, parseFloat(document.getElementById('q1-input').value) || 0));
    const q2 = Math.min(100, Math.max(0, parseFloat(document.getElementById('q2-input').value) || 0));
    const q3 = Math.min(100, Math.max(0, parseFloat(document.getElementById('q3-input').value) || 0));
    const q4 = Math.min(100, Math.max(0, parseFloat(document.getElementById('q4-input').value) || 0));

    document.getElementById('bar-jan').style.height = q1 + '%';
    document.getElementById('bar-feb').style.height = q1 + '%';
    document.getElementById('bar-mar').style.height = q1 + '%';

    document.getElementById('bar-apr').style.height = q2 + '%';
    document.getElementById('bar-may').style.height = q2 + '%';
    document.getElementById('bar-jun').style.height = q2 + '%';

    document.getElementById('bar-jul').style.height = q3 + '%';
    document.getElementById('bar-aug').style.height = q3 + '%';
    document.getElementById('bar-sep').style.height = q3 + '%';

    document.getElementById('bar-oct').style.height = q4 + '%';
    document.getElementById('bar-nov').style.height = q4 + '%';
    document.getElementById('bar-dec').style.height = q4 + '%';

    const scoreSum = q1 + q2 + q3 + q4;
    document.getElementById('kpi-total').innerText = scoreSum.toFixed(0);
    document.getElementById('kpi-avg').innerText = (scoreSum / 4).toFixed(1) + "%";
    
    document.getElementById('kpi-total').className = "text-2xl font-bold text-slate-800 dark:text-white";
    document.getElementById('kpi-avg').className = "text-2xl font-bold text-slate-800 dark:text-white";
});