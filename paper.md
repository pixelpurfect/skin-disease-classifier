# Skin Disease Classification Using Deep Learning

## Abstract
This paper presents a lightweight convolutional neural network (CNN) to classify skin lesions into benign or malignant classes. Using a subset of the ISIC dataset, the model achieves validation accuracy of 85%. We discuss data preprocessing, model design, performance metrics, and ethical implications of AI-assisted dermatology diagnostics.

## 1. Introduction
Skin cancer is one of the most common cancers globally. Early detection improves survival rates. Deep learning has shown promise in medical imaging and dermatology.

## 2. Dataset
We use the ISIC 2018 dataset, preprocessed and resized to 224x224. A train/validation split of 80/20 is applied.

## 3. Model Architecture
A CNN with 3 convolutional layers, max pooling, and dropout. Softmax activation is used for binary classification.

## 4. Results
The model achieves:
- Training accuracy: 90%
- Validation accuracy: 85%
- F1 Score: 0.84

## 5. Deployment
The trained model is converted to TensorFlow.js and deployed on GitHub Pages, allowing real-time classification in-browser.

## 6. Conclusion
This study shows that deep learning can assist in skin cancer screening. Future work includes model interpretability and multi-class classification.

## References
- ISIC Archive
- TensorFlow.js Docs
- Keras API
