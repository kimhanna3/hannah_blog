export const projects = [
  {
    id: 5,
    title: "Supply Chain & Inventory Bottleneck Simulator",
    description: "An interactive simulation app and analytics dashboard modeling discrete-event supply chain workflows, repair line WIP limits, parts availability, and automated bottleneck detection.",
    technologies: ["Python", "Streamlit", "SimPy", "Pandas", "NumPy", "Plotly", "Pytest"],
    category: "Supply Chain Analytics / Operations Research / Interactive Web Apps",
    year: "2026",
    github: "https://github.com/kimhanna3/Supply-Chain-Inventory-Bottleneck-Simulator",
    image: "/images/projects/supply-chain-simulator.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Spatial-Temporal EV Infrastructure & Charging Desert Analyzer",
    description: "A geospatial analytics application analyzing electric vehicle infrastructure coverage, deployment dynamics, and automated spatial detection of charging deserts.",
    technologies: ["Python", "Streamlit", "GeoPandas", "Folium", "Streamlit-Folium", "Plotly", "Scikit-learn", "Shapely", "Pandas", "Pytest"],
    category: "Geospatial Data Science / Transport Analytics / Machine Learning",
    year: "2026",
    github: "https://github.com/kimhanna3/Spatial-Temporal-EV-Infrastructure-Charging-Desert-Analyzer",
    image: "/images/projects/ev-charging-desert-analyzer.jpg",
    featured: true
  },
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
    image: "hannah_blog/projects/sentiment-analysis/write-product-reviews.png",
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
