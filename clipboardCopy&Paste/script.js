const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const copyBtn = document.querySelector(".button--copy");
const pasteBtn = document.querySelector(".button--paste");

copyBtn.addEventListener("click", copyToClipboard);
pasteBtn.addEventListener("click", copyFromClipboard);

async function copyToClipboard () {
    const copyIcon = document.querySelector('.lucide-copy');
    const checkIcon = document.querySelector('.lucide-check');
    try {
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';
        await navigator.clipboard.writeText(input1.value)

    } catch (error) {
        console.log(error);
    } finally{
        setTimeout(() => {
            copyIcon.style.display = 'block';
            checkIcon.style.display = 'none';
        }, 1000);
    }
}

async function copyFromClipboard () {
    try {
        input2.value = await navigator.clipboard.readText();
    } catch (error) {
        console.log(error);
    }
}