import os
import shutil
import random

# ===== CONFIG =====
SOURCE_DIR = r"D:\visual studio code\civora\AID103-Jatinyadav13-cmd\ML_models\crop_classification\crop_cl_data\Agricultural-crops"

OUTPUT_BASE = r"D:\visual studio code\civora\AID103-Jatinyadav13-cmd\ML_models\crop_classification\crop_cl_data"

TRAIN_DIR = os.path.join(OUTPUT_BASE, "train")
TEST_DIR = os.path.join(OUTPUT_BASE, "test")
VALID_DIR = os.path.join(OUTPUT_BASE, "valid")

TRAIN_RATIO = 0.7
TEST_RATIO = 0.2
VALID_RATIO = 0.1

random.seed(42)
# ==================


def get_classes():
    return [
        d for d in os.listdir(SOURCE_DIR)
        if os.path.isdir(os.path.join(SOURCE_DIR, d))
    ]


def create_dirs(classes):
    for base in [TRAIN_DIR, TEST_DIR, VALID_DIR]:
        for cls in classes:
            os.makedirs(os.path.join(base, cls), exist_ok=True)


def get_images(class_path):
    return [
        f for f in os.listdir(class_path)
        if os.path.isfile(os.path.join(class_path, f))
    ]


def split_images(cls):
    class_path = os.path.join(SOURCE_DIR, cls)
    images = get_images(class_path)

    random.shuffle(images)

    total = len(images)
    if total == 0:
        print(f"⚠️  {cls}: No images found, skipping")
        return

    train_end = int(total * TRAIN_RATIO)
    test_end = train_end + int(total * TEST_RATIO)

    train_imgs = images[:train_end]
    test_imgs = images[train_end:test_end]
    valid_imgs = images[test_end:]

    for img in train_imgs:
        shutil.copy(os.path.join(class_path, img),
                    os.path.join(TRAIN_DIR, cls, img))

    for img in test_imgs:
        shutil.copy(os.path.join(class_path, img),
                    os.path.join(TEST_DIR, cls, img))

    for img in valid_imgs:
        shutil.copy(os.path.join(class_path, img),
                    os.path.join(VALID_DIR, cls, img))

    print(f"{cls}: Train={len(train_imgs)}, Test={len(test_imgs)}, Valid={len(valid_imgs)}")


def main():
    classes = get_classes()
    create_dirs(classes)

    for cls in classes:
        split_images(cls)

    print("\n✅ Dataset successfully split into train, test, and validation sets.")


if __name__ == "__main__":
    main()
