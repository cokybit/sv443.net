// obfuscation because of crawlers
const contents = Object.freeze({
    address: {
        en: "U3ZlbiBGZWhsZXI8YnI+S+R0aGUtS29sbHdpdHotV2VnIDE1PGJyPjcwNTY5IFN0dXR0Z2FydA==",
        de: "U3ZlbiBGZWhsZXI8YnI+S+R0aGUtS29sbHdpdHotV2VnIDE1PGJyPjcwNTY5IFN0dXR0Z2FydA==",
    },
    contact: {
        en: "UGhvbmU6ICs0OSAxNzYgNzM1NTQ5ODU8YnI+RS1NYWlsOiBjb250YWN0QHN2NDQzLm5ldA==",
        de: "VGVsZWZvbjogKzQ5IDE3NiA3MzU1NDk4NTxicj5FLU1haWw6IGNvbnRhY3RAc3Y0NDMubmV0",
    },
});

document.addEventListener("DOMContentLoaded", init);

function init()
{
    /**
     * @param {string} content b64 encoded
     * @param {HTMLElement} element
     */
    const insert = (content, element) => element.innerHTML = atob(content[element.dataset.lang]);

    document.querySelectorAll(".insAddress").forEach(insElem => insert(contents.address, insElem));
    document.querySelectorAll(".insContact").forEach(insElem => insert(contents.contact, insElem));
}
