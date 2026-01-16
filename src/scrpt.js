

// Setup Editor
const codeMirrorInstance = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: 'gasArm',
	lineNumbers: true,
	tabSize: 4,
	indentUnit: 4,
	lineWrapping: true,
	theme: 'material-darker',
});

const registersDiv = document.getElementById('registers');
const cursorPos = document.getElementById("cursorPos");

function createRegisters() {
	const regs = ['R0','R1','R2','R3','R4','R5','R6','R7','R8','R9','R10','R11','R12','R13','R14','R15'];
	registersDiv.innerHTML = regs.map((r, i) => `
		<div class="register">
			<span class="register-name">${r}</span>
			<span class="register-value">${i === 13 ? '0xFF000000' : '0x0'}</span>
		</div>
	`).join('');
}

function run() {
	alert('Execution simulation would run here');
}

function reset() {
	createRegisters();
}

window.addEventListener('DOMContentLoaded', () => {
	codeMirrorInstance.setSize('100%', '99%');
});


createRegisters();
