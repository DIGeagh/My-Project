# main_app.py
from flask import Flask, request, jsonify
from compression_manager import CompressionManager

app = Flask(__name__)
compression_manager = CompressionManager()

@app.route('/api/compress_image', methods=['POST'])
def compress_image():
    try:
        image_data = request.json['image_data']
        compression_level = request.json['compression_level']

        compressed_image = compression_manager.compress_image(image_data, compression_level)

        return jsonify({'compressed_image': compressed_image})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
