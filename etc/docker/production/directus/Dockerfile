FROM directus/directus:11.12.0

USER root

# Create necessary directories
RUN mkdir -p /directus/uploads /directus/extensions

# Set proper permissions for directus user
RUN chown -R node:node /directus/uploads /directus/extensions

# Switch back to the directus user (node)
USER node

WORKDIR /directus

EXPOSE 8055