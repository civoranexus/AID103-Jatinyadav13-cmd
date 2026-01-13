import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import os

# ================= CONFIG =================
MODEL_PATH = "model/crop_classifier.keras"
IMG_SIZE = (224, 224)

CLASS_NAMES = sorted(os.listdir("crop_cl_data/train"))
# =========================================


def predict_image(img_path):
    model = tf.keras.models.load_model(MODEL_PATH)

    img = image.load_img(img_path, target_size=IMG_SIZE)
    img_array = image.img_to_array(img)
    img_array = img_array / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)[0]
    predicted_index = np.argmax(predictions)
    confidence = predictions[predicted_index] * 100

    return CLASS_NAMES[predicted_index], confidence


if __name__ == "__main__":
    test_image = "sample.jpg"  # put any crop image here
    crop, conf = predict_image(test_image)

    print(f"🌾 Predicted Crop: {crop}")
    print(f"📊 Confidence: {conf:.2f}%")
