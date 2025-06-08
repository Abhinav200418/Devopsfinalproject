# Use Python base image
FROM python:3.9-slim

# Set working directory inside container
WORKDIR /app

# Copy backend code
COPY . .

# Install Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose Flask port
EXPOSE 5000

# Run the Flask app
CMD ["python", "app.py"]
