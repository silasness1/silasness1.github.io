# Use lightweight Ruby image
FROM ruby:3.2-slim

# .devcontainer/Dockerfile
FROM ruby:3.2-slim

# Install build tools and Node (needed for some Jekyll themes)
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    npm \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Jekyll and Bundler
RUN gem install bundler jekyll

# Set working directory
WORKDIR /workspace

# Default command
CMD ["bash"]
