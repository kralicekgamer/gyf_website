function copyUrl(url) {
    navigator.clipboard.writeText(url);
}

const gifPath = "https://gyf.kralyk.dev/gifs/";
// const gifPath = "./gifs/";
const gifCount = 187;
let gallery = "";

for (let i = 1; i <= gifCount; i++) {
    let url = `${gifPath}${i}.gif`;
    gallery += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${url}" alt="GIF ${i}" loading="lazy">
                <div class="card-body text-center">
                    <a href="${url}" download class="btn btn-success me-2">Download</a>
                    <button class="btn btn-primary" onclick="copyUrl('${url}')">Copy me!</button>
                </div>
            </div>
        </div>
    `;
}

document.write(gallery);
