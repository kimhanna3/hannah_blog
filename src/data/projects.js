export const projects = [
  {
    id: 1,
    title: "House Price Prediction",
    description: "Built a comprehensive regression model to predict house prices using advanced feature engineering and ensemble methods. Compared Linear Regression, XGBoost, and Random Forest models, achieving 89% accuracy through careful hyperparameter tuning and feature importance analysis.",
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Matplotlib"],
    category: "Predictive Modeling",
    year: "2024",
    github: "https://github.com/kimhanna3/house-price-prediction",
    image: "hannah_blog/projects/house_price_prediction/78036515.png",
    featured: true
  },
  {
    id: 2,
    title: "Sentiment Analysis of Product Reviews",
    description: "Developed an NLP pipeline to classify customer reviews as positive, negative, or neutral. Implemented BERT embeddings and compared performance with traditional Word2Vec approaches. Deployed the model as an interactive Streamlit app for real-time sentiment prediction.",
    technologies: ["Python", "NLTK", "Transformers", "BERT", "Streamlit", "PyTorch"],
    category: "Natural Language Processing",
    year: "2024",
    github: "https://github.com/kimhanna3/sentiment-analysis",
    image: "/images/projects/sentiment-analysis.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Plant Disease Detection",
    description: "Created a computer vision model using transfer learning with ResNet50 to identify plant diseases from leaf images. Achieved 94% accuracy on validation set and deployed via FastAPI for agricultural applications. The model helps farmers detect diseases early and take preventive action.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "FastAPI", "ResNet50"],
    category: "Computer Vision",
    year: "2023",
    github: "https://github.com/kimhanna3/plant-disease-detection",
    image: "/images/projects/plant-disease.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Energy Consumption Forecasting",
    description: "Built time series forecasting models to predict household energy consumption patterns. Compared statistical methods (ARIMA, Prophet) with deep learning approaches (LSTM networks). The project provides actionable insights for energy optimization and cost reduction.",
    technologies: ["Python", "Prophet", "TensorFlow", "LSTM", "Time Series Analysis"],
    category: "Time Series Forecasting",
    year: "2023",
    github: "https://github.com/kimhanna3/energy-forecasting",
    image: "/images/projects/energy-forecast.jpg",
    featured: false
  }
];
