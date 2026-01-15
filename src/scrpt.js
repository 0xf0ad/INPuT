
const code = `        B       main ; reset vector (execution starts here)

        ;       ---------------------------
        ;       Data (no sections)
        ;       ---------------------------
tableauDuTp
        DCD     0x00000002
        DCD     0x00000020
        DCD     0x00000200
        DCD     0x00002000

codeDuTP
        DCD     0xEA00001F

variableDuTp
        DCD     0xFFFFFFFF

        ;       ---------------------------
        ;       Code
        ;       ---------------------------
main
        MOV     R0, #0x12
        MOV     R1, #0x80
        STR     R0, [R1]

        MOV     R0, #0x12
        LDR     R1, =variableDuTp
        STR     R0, [R1]

fin
        B       fin`;


// Setup Editor
const codeMirrorInstance = CodeMirror.fromTextArea(document.getElementById('editor'), {
	mode: 'gasArm',
	lineNumbers: true,
	tabSize: 4,
	indentUnit: 4,
	lineWrapping: true,
	theme: 'material-darker',
});

editor.value = code;

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

//editor.on("cursorActivity",()=>{
//    const c = editor.getCursor();
//    cursorPos.textContent = `Ln ${c.line+1}, Col ${c.ch+1}`;
//});

window.addEventListener('DOMContentLoaded', () => {
	codeMirrorInstance.setSize('100%', '99%');
});


createRegisters();
