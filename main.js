// main.js
async function compressImage() {
    const imageInput = document.getElementById('imageInput');
    const compressionLevel = document.getElementById('compressionLevel').value;

    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.onload = async function (e) {
        const image_data = e.target.result.split(',')[1]; // Extract base64-encoded data

        const response = await fetch('/api/compress_image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image_data: image_data,
                compression_level: compressionLevel,
            }),
        });

        const result = await response.json();

        document.getElementById('originalImage').src = `data:image/png;base64,${image_data}`;
        document.getElementById('compressedImage').src = `data:image/png;base64,${result.compressed_image}`;
    };

    reader.readAsDataURL(file);
}
