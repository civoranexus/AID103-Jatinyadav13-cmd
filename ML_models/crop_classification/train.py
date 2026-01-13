import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing import image_dataset_from_directory
import os

# ================= CONFIG =================
DATASET_DIR = "crop_cl_data"
IMG_SIZE = (224, 224)
BATCH_SIZE = 16
EPOCHS = 15
MODEL_PATH = "model/crop_classifier.keras"
# =========================================

# Load datasets
train_ds = image_dataset_from_directory(
    os.path.join(DATASET_DIR, "train"),
    image_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical"
)

val_ds = image_dataset_from_directory(
    os.path.join(DATASET_DIR, "valid"),
    image_size=IMG_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical"
)

class_names = train_ds.class_names
num_classes = len(class_names)

print("Classes:", class_names)

# Improve performance
AUTOTUNE = tf.data.AUTOTUNE
train_ds = train_ds.prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.prefetch(buffer_size=AUTOTUNE)

# Build CNN model
model = models.Sequential([
    layers.Rescaling(1./255, input_shape=(224, 224, 3)),

    layers.Conv2D(32, 3, activation='relu'),
    layers.MaxPooling2D(),

    layers.Conv2D(64, 3, activation='relu'),
    layers.MaxPooling2D(),

    layers.Conv2D(128, 3, activation='relu'),
    layers.MaxPooling2D(),

    layers.Flatten(),
    layers.Dense(256, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)

model.summary()

# Train model
model.fit(
    train_ds,
    validation_data=val_ds,
    epochs=EPOCHS
)

# Save model
os.makedirs("model", exist_ok=True)
model.save(
    r"D:\visual studio code\civora\AID103-Jatinyadav13-cmd\ML_models\crop_classification\model")

print(f"\nModel saved at {r'D:\\visual studio code\\civora\\AID103-Jatinyadav13-cmd\\ML_models\\crop_classification\\model'}")
